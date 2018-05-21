import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../../services/pedidos.service';
import { SessionService } from '../../services/session.service';
import { User } from '../../interfaces/user';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver/FileSaver.min';
import * as _ from 'lodash';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	public input1:string = '1';
	public input2:string = '2';

	public pedidos:any[] = [];
	public usuarios:any[] = [];
	public pedido:any = {};

	public filterOptions = {
		startDate: null,
		endDate: null,
		estado: 0,
		usuario: 0,
	}

	constructor(
		public _pedidos: PedidosService,
		public _session: SessionService
	) {
	}

	ngOnInit() {
		this.getPedidos();
		this.getUsers();
	}

	setPedido(pedido:any){
		this.pedido = pedido;
	}

	cambiarEstadoPedido(pedido:any, estado:number){
		if (confirm("Quieres cambiar el estado de este pedido?")) {
			this._pedidos.cambiarEstadoPedido(pedido, estado);
			this.getPedidos();
		}
	}

	public filterPedidos(){
		this.pedidos = this.queryPedidos();
	}

	public exportPedidos(){
		let pedidos 		= this.queryPedidos();
		let model			= {};

		let departamentos	= _.groupBy(pedidos, _.property('user.departamento.nombre'));

		for (var key in departamentos) {
			let array			= [];
			
			array.push([
				{align:'center', text:'PEDIDO ID'},
				{align:'center', text:'PRODUCTO'},
				{align:'center', text:'CANTIDAD'},
				{align:'center', text:'SUBTOTAL'},
				{align:'center', text:'USUARIO'},
				{align:'center', text:'DEPARTAMENTO'}
			]);

			departamentos[key].forEach(pedido => {
				pedido.detalles.forEach(detalle => {
					array.push([
						{align:'center', text: pedido._id},
						{align:'center', text: detalle.name},
						{align:'center', text: detalle.cantidad},
						{align:'center', text: detalle.subtotal},
						{align:'center', text: pedido.user.nombre+' '+pedido.user.apellido},
						{align:'center', text: pedido.user.departamento.nombre}
					]);
				});
			});

			model[key] = this._buildXLSTable(array);
		}

		this.exportToXLSX(model);
	}

	private queryPedidos(){
		let pedidos = this._pedidos.getPedidos();
		let filterOptions = {
			startDate: 	this.filterOptions.startDate 	? new Date(this.filterOptions.startDate.replace(new RegExp('-', 'g'), '/')) 	: null,
			endDate: 	this.filterOptions.endDate 		? new Date(this.filterOptions.endDate.replace(new RegExp('-', 'g'), '/'))		: null,
			estado: this.filterOptions.estado,
			usuario: this.filterOptions.usuario
		};

		if (filterOptions.endDate) filterOptions.endDate.setDate(filterOptions.endDate.getDate() + 1);

		pedidos = pedidos.filter(function(item){
			let values = [];
			values.push((filterOptions.startDate == null || filterOptions.startDate.getTime() <= item.creado.getTime()) 	? true : false);
			values.push((filterOptions.endDate == null || filterOptions.endDate.getTime() >= item.creado.getTime()) 		? true : false);
			values.push((filterOptions.estado == item.estado.id || filterOptions.estado == 0) ? true : false);
			values.push((filterOptions.usuario == item.user.id || filterOptions.usuario == 0) ? true : false);

			return values.filter(function(item){ return item == false; }).length == 0;
		});

		return pedidos;
	}

	private getPedidos(){
		this.pedidos = this._pedidos.getPedidos();
	}

	private getUsers(){
		this.usuarios = this._session.getUsers();
	}

	private exportToXLSX(content){
		let wb = XLSX.utils.book_new();

		for (let key in content) {
			let ws = XLSX.utils.table_to_sheet(content[key], {'raw' : true});
			XLSX.utils.book_append_sheet(wb, ws, key);
		}

		let wbout = XLSX.write(wb, {
			'bookType' : 'xlsx',
			'type' : 'array'
		});

		let data = new Blob([wbout],{type:"application/octet-stream"});
		FileSaver.saveAs(data, "Reporte.xlsx");
	}

	private _buildXLSTable(array):any{
		let idWrapper	= 'custom-table-wrapper';
		let idTable		= idWrapper + '-table';

		let table = document.createElement('table');
		table.setAttribute('id', idTable);

		let thed = document.createElement('thead');

		table.appendChild(thed);

		let tbdy = document.createElement('tbody');
		for (let i = 0; i < array.length; i++) {
			let tr = document.createElement('tr');

			array[i].forEach((item) => {
				let td = document.createElement('td');

				td.innerHTML			= 'text' in item	? item.text 	: item;
				td.colSpan				= 'colspan' in item	? item.colspan 	: 1;

				td.setAttribute('align', ('align' in item 	? item.align	: 'left'));
				tr.appendChild(td);
			})

			tbdy.appendChild(tr);
		}

		table.appendChild(tbdy);

		return table;
	}

	get currentUser():User{
		return this._session.getCurrentUser();
	}
}

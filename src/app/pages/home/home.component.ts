import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../../services/pedidos.service';
import { SessionService } from '../../services/session.service';
import { User } from '../../interfaces/user';

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

	get currentUser():User{
		return this._session.getCurrentUser();
	}
}

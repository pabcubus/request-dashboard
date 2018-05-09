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
	input1:string = '1';
	input2:string = '2';

	pedidos:any[] = [];
	pedido:any = {};

	constructor(
		public _pedidos: PedidosService,
		public _session: SessionService
	) {
	}

	ngOnInit() {
		this.getPedidos();
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

	private getPedidos(){
		this.pedidos = this._pedidos.getPedidos();
	}

	get currentUser():User{
		return this._session.getCurrentUser();
	}
}

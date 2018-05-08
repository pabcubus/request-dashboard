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

	currentUser:User;

	constructor(
		public _pedidos: PedidosService,
		public _session: SessionService
	) {
		this.currentUser = this._session.getCurrentUser();
	}

	ngOnInit() {
		this.getPedidos();
	}

	setPedido(pedido:any){
		this.pedido = pedido;
	}

	private getPedidos(){
		let response = [];

		this.pedidos = this._pedidos.getPedidos();
	}
}

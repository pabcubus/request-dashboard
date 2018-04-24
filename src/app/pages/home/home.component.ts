import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../../services/pedidos.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	pedidos:any[] = [];
	pedido:any = {};

	constructor(
		public _pedidos: PedidosService
	) { }

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

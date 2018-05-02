import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Producto } from '../../interfaces/producto';
import { PedidosService } from '../../services/pedidos.service';
import { ProductosService } from '../../services/productos.service';
import { SessionService } from '../../services/session.service';

@Component({
	selector: 'app-pedido',
	templateUrl: './pedido.component.html',
	styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {

	public productos: 	Producto[]	= [];
	public productoId:	any			= 0;
	public productoCant:any			= 0;
	public pedido: 		any			= {
		_id: 1,
		creado: new Date(),
		total: 73233,
		user: {},
		detalles: []
	};

	constructor(
		private _pedidos: PedidosService,
		private _productos: ProductosService,
		private _session: SessionService,
		private router: Router
	) {
		this.productos = _productos.getProductos();
	}

	ngOnInit() {
	}

	addProduct(){
		let product:Producto = this.productos.find(item => {
			return (item._id == this.productoId);
		});

		product.cantidad = this.productoCant;
		product.subtotal = this.productoCant * product.precio;

		this.pedido.detalles.push(product);
	}

	finalizarPedido(){
		debugger;
		if(this.pedido.detalles.length <= 0){
			alert('No hay detalles para este pedido');
			return;
		}

		this.pedido.user = this._session.getCurrentUser();
		this._pedidos.addPedido(this.pedido);
		this.router.navigate(['/home']);
	}
}

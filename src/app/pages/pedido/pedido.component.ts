import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import 'rxjs/add/operator/map';

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
		_id: null,
		creado: new Date(),
		total: 0,
		user: {},
		detalles: []
	};

	constructor(
		public activatedRoute: ActivatedRoute,
		private _pedidos: PedidosService,
		private _productos: ProductosService,
		private _session: SessionService,
		private router: Router
	) {
		this.productos = _productos.getProductos();
	}

	ngOnInit() {
		this.activatedRoute.params
			.map( params => params['id'] )
			.subscribe( id => {
				if (id) {
					this.pedido = this._pedidos.getPedido(id);
				}
			});
	}

	addProduct(){
		let existingProduct = this.pedido.detalles.find(item => item._id == this.productoId);

		if (existingProduct) {
			existingProduct.cantidad += this.productoCant;
		} else {
			let product:Producto = this.productos.find(item => {
				return (item._id == this.productoId);
			});

			product.cantidad = this.productoCant;
			product.subtotal = this.productoCant * product.precio;

			this.pedido.detalles.push(product);
		}
	}

	removeProduct(producto:any){
		this.pedido.detalles = this.pedido.detalles.filter(item => (item._id != producto._id));
	}

	finalizarPedido(){
		if(this.pedido.detalles.length <= 0){
			alert('No hay detalles para este pedido');
			return;
		}

		if (this.pedido._id) {
			this._pedidos.modifyPedido(this.pedido);
		} else {
			this.pedido.user = this._session.getCurrentUser();
			this.pedido._id = (new Date()).getTime();
			this._pedidos.addPedido(this.pedido);
		}
		this.router.navigate(['/home']);
	}
}

import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { ProductosService } from '../../services/productos.service';

@Component({
	selector: 'app-pedido',
	templateUrl: './pedido.component.html',
	styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {

	productos: Producto[] = [];

	constructor(public _productos: ProductosService) {
		this.productos = _productos.getProductos();
	}

	ngOnInit() {
	}

}

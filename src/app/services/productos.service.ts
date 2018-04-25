import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto'

@Injectable()
export class ProductosService {

	productos: Producto[] = [];

	constructor() {
		this.setProductos();
	}

	getProducto(id:string):Producto{
		return this.productos.find((item) => {
			return item._id == id;
		});
	}

	getProductos():Producto[]{
		this.productos.sort(
			function(a, b) {
				return a.name.toLowerCase().localeCompare( b.name.toLowerCase() );
			}
		);


		return this.productos;
	}

	private setProductos() {
		this.productos = [
			{
				"_id": "5ae011afbb369bfc12a5b548",
				"name": "Resma de Papel",
				"precio": 6441
			},
			{
				"_id": "5ae011af199121b77e8d4c85",
				"name": "Marcadores",
				"precio": 6028
			},
			{
				"_id": "5ae011afc419e76ba048a13b",
				"name": "Tajalapiz",
				"precio": 8900
			},
			{
				"_id": "5ae011af36bcfe9f0274d9dd",
				"name": "Lapices",
				"precio": 7319
			},
			{
				"_id": "5ae011afa132d6749c0e23c8",
				"name": "Borradores",
				"precio": 13592
			}
		];
	}
}

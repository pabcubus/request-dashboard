import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class PedidosService {

	private pedidos: any[] = [];
	private estados: any[] = [
		{
			id: 1,
			nombre: 'Pendiente'
		},
		{
			id: 2,
			nombre: 'En Curso'
		},
		{
			id: 3,
			nombre: 'Terminado'
		},
		{
			id: 4,
			nombre: 'Cancelado'
		}
	];

	constructor() {
		this.generatePedidos();
	}

	getPedidos() {
		return this.pedidos;
	}

	getPedido(id: number): any {
		return this.pedidos.find(pedido => pedido._id == id);
	}

	addPedido(pedido: any) {
		pedido.estado = {
			id: 1,
			nombre: 'Pendiente'
		};
		pedido.total = _.sumBy(pedido.detalles, 'subtotal');
		this.pedidos.push(pedido);
	}

	modifyPedido(oldpedido: any) {
		this.pedidos = this.pedidos.filter(pedido => pedido._id != oldpedido._id);
		this.pedidos.push(oldpedido);
	}

	cambiarEstadoPedido(oldpedido: any, estado: number) {
		oldpedido.estado = this.estados.find(estado => estado.id == estado);
		this.pedidos = this.pedidos.filter(pedido => pedido._id != oldpedido._id);
		this.pedidos.push(oldpedido);
	}

	private generatePedidos() {
		this.pedidos = [
			{
				"_id": 1,
				"creado": "2018-05-09T05:28:47.265Z",
				"total": 73844,
				"estado": {
					"id": 3,
					"nombre": "Terminado"
				},
				"user": {
					"id": 1,
					"nombre": "franco",
					"apellido": "garcia",
					"usuario": "fgarcia",
					"password": "123",
					"rol": "admin",
					"email": "fgarcia@hotmail.com",
					"departamento": {
						"nombre": "Compra",
						"direccion": "658 Leonard Street, Brantleyville, Alaska"
					}
				},
				"detalles": [
					{
						"_id": "5af2870f7696021993aac1c1",
						"name": "Marcadores",
						"precio": 9128,
						"cantidad": 3,
						"subtotal": 27384
					},
					{
						"_id": "5af2870f15e783751623986a",
						"name": "Borradores",
						"precio": 7129,
						"cantidad": 2,
						"subtotal": 14258
					}
				]
			},
			{
				"_id": 2,
				"creado": "2018-05-09T05:28:47.265Z",
				"total": 52270,
				"estado": {
					"id": 4,
					"nombre": "Cancelado"
				},
				"user": {
					"id": 3,
					"nombre": "camilo",
					"apellido": "bassil",
					"usuario": "cbassil",
					"password": "123",
					"rol": "operador",
					"email": "cbassil@hotmail.com",
					"departamento": {
						"nombre": "Mercadeo",
						"direccion": "854 Guider Avenue, Eden, Wyoming"
					}
				},
				"detalles": [
					{
						"_id": "5af2870fe389df9f1c613121",
						"name": "Resma de Papel",
						"precio": 5158,
						"cantidad": 5,
						"subtotal": 25790
					},
					{
						"_id": "5af2870f9d362e2897fe9bda",
						"name": "Resma de Papel",
						"precio": 25721,
						"cantidad": 5,
						"subtotal": 128605
					},
					{
						"_id": "5af2870f85b6a5cc4dd981f7",
						"name": "Borradores",
						"precio": 14111,
						"cantidad": 3,
						"subtotal": 42333
					},
					{
						"_id": "5af2870fb96048f85d0615c4",
						"name": "Lapices",
						"precio": 21237,
						"cantidad": 5,
						"subtotal": 106185
					},
					{
						"_id": "5af2870ff4b88c7631b513df",
						"name": "Resma de Papel",
						"precio": 5239,
						"cantidad": 5,
						"subtotal": 26195
					}
				]
			},
			{
				"_id": 3,
				"creado": "2018-05-09T05:28:47.265Z",
				"total": 50623,
				"estado": {
					"id": 4,
					"nombre": "Cancelado"
				},
				"user": {
					"id": 2,
					"nombre": "pablo",
					"apellido": "bassil",
					"usuario": "pbassil",
					"password": 123,
					"rol": "operador",
					"email": "pbassil@hotmail.com",
					"departamento": {
						"nombre": "Auditoria",
						"direccion": "950 Farragut Place, Bannock, West Virginia"
					}
				},
				"detalles": [
					{
						"_id": "5af2870fcc6b1cbda6fc6ea8",
						"name": "Borradores",
						"precio": 10596,
						"cantidad": 1,
						"subtotal": 10596
					},
					{
						"_id": "5af2870fc5fab51ec45847e2",
						"name": "Resma de Papel",
						"precio": 19906,
						"cantidad": 3,
						"subtotal": 59718
					},
					{
						"_id": "5af2870f0655ff266c97c10e",
						"name": "Resma de Papel",
						"precio": 20146,
						"cantidad": 1,
						"subtotal": 20146
					}
				]
			},
			{
				"_id": 4,
				"creado": "2018-05-09T05:28:47.265Z",
				"total": 83995,
				"estado": {
					"id": 1,
					"nombre": "Pendiente"
				},
				"user": {
					"id": 1,
					"nombre": "franco",
					"apellido": "garcia",
					"usuario": "fgarcia",
					"password": 123,
					"rol": "admin",
					"email": "fgarcia@hotmail.com",
					"departamento": {
						"nombre": "Compra",
						"direccion": "658 Leonard Street, Brantleyville, Alaska"
					}
				},
				"detalles": [
					{
						"_id": "5af2870f505b642ffec052dd",
						"name": "Borradores",
						"precio": 8217,
						"cantidad": 4,
						"subtotal": 32868
					},
					{
						"_id": "5af2870f6825b541b58035b6",
						"name": "Resma de Papel",
						"precio": 16097,
						"cantidad": 4,
						"subtotal": 64388
					},
					{
						"_id": "5af2870f3779db5585ec37f1",
						"name": "Resma de Papel",
						"precio": 14425,
						"cantidad": 4,
						"subtotal": 57700
					}
				]
			},
			{
				"_id": 5,
				"creado": "2018-05-09T05:28:47.265Z",
				"total": 81401,
				"estado": {
					"id": 2,
					"nombre": "En Curso"
				},
				"user": {
					"id": 2,
					"nombre": "pablo",
					"apellido": "bassil",
					"usuario": "pbassil",
					"password": 123,
					"rol": "operador",
					"email": "pbassil@hotmail.com",
					"departamento": {
						"nombre": "Auditoria",
						"direccion": "950 Farragut Place, Bannock, West Virginia"
					}
				},
				"detalles": [
					{
						"_id": "5af2870fcd3e5a56454b922d",
						"name": "Resma de Papel",
						"precio": 28001,
						"cantidad": 2,
						"subtotal": 56002
					},
					{
						"_id": "5af2870fcea1b593f584d677",
						"name": "Borradores",
						"precio": 20432,
						"cantidad": 2,
						"subtotal": 40864
					},
					{
						"_id": "5af2870fa190b76dd1ae7f67",
						"name": "Marcadores",
						"precio": 17401,
						"cantidad": 1,
						"subtotal": 17401
					},
					{
						"_id": "5af2870f0b436375295fca04",
						"name": "Borradores",
						"precio": 15092,
						"cantidad": 2,
						"subtotal": 30184
					}
				]
			},
			{
				"_id": 6,
				"creado": "2018-05-09T05:28:47.265Z",
				"total": 62174,
				"estado": {
					"id": 2,
					"nombre": "En Curso"
				},
				"user": {
					"id": 2,
					"nombre": "pablo",
					"apellido": "bassil",
					"usuario": "pbassil",
					"password": 123,
					"rol": "operador",
					"email": "pbassil@hotmail.com",
					"departamento": {
						"nombre": "Auditoria",
						"direccion": "950 Farragut Place, Bannock, West Virginia"
					}
				},
				"detalles": [
					{
						"_id": "5af2870fc5241b6f1b332fbc",
						"name": "Marcadores",
						"precio": 20015,
						"cantidad": 1,
						"subtotal": 20015
					},
					{
						"_id": "5af2870fba7e3b36a937c25b",
						"name": "Lapices",
						"precio": 8417,
						"cantidad": 4,
						"subtotal": 33668
					},
					{
						"_id": "5af2870fbf8c3ff4b0359089",
						"name": "Resma de Papel",
						"precio": 9777,
						"cantidad": 4,
						"subtotal": 39108
					},
					{
						"_id": "5af2870f5e13f9914607acf8",
						"name": "Borradores",
						"precio": 9397,
						"cantidad": 4,
						"subtotal": 37588
					},
					{
						"_id": "5af2870f893b6f493b0c0f4b",
						"name": "Lapices",
						"precio": 10559,
						"cantidad": 5,
						"subtotal": 52795
					}
				]
			},
			{
				"_id": 7,
				"creado": "2018-05-09T05:28:47.265Z",
				"total": 99172,
				"estado": {
					"id": 4,
					"nombre": "Cancelado"
				},
				"user": {
					"id": 3,
					"nombre": "camilo",
					"apellido": "bassil",
					"usuario": "cbassil",
					"password": 123,
					"rol": "operador",
					"email": "cbassil@hotmail.com",
					"departamento": {
						"nombre": "Mercadeo",
						"direccion": "854 Guider Avenue, Eden, Wyoming"
					}
				},
				"detalles": [
					{
						"_id": "5af2870f5b8d583ca77d1baf",
						"name": "Resma de Papel",
						"precio": 5897,
						"cantidad": 2,
						"subtotal": 11794
					},
					{
						"_id": "5af2870f3ee00658fb7c835b",
						"name": "Borradores",
						"precio": 15654,
						"cantidad": 3,
						"subtotal": 46962
					},
					{
						"_id": "5af2870f75da78339d2b12b0",
						"name": "Marcadores",
						"precio": 23147,
						"cantidad": 2,
						"subtotal": 46294
					}
				]
			},
			{
				"_id": 8,
				"creado": "2018-05-09T05:28:47.265Z",
				"total": 53770,
				"estado": {
					"id": 4,
					"nombre": "Cancelado"
				},
				"user": {
					"id": 2,
					"nombre": "pablo",
					"apellido": "bassil",
					"usuario": "pbassil",
					"password": 123,
					"rol": "operador",
					"email": "pbassil@hotmail.com",
					"departamento": {
						"nombre": "Auditoria",
						"direccion": "950 Farragut Place, Bannock, West Virginia"
					}
				},
				"detalles": [
					{
						"_id": "5af2870f50ea868f4226f36a",
						"name": "Resma de Papel",
						"precio": 28331,
						"cantidad": 4,
						"subtotal": 113324
					},
					{
						"_id": "5af2870fd26e35caaee93892",
						"name": "Lapices",
						"precio": 10894,
						"cantidad": 4,
						"subtotal": 43576
					},
					{
						"_id": "5af2870fb84e36b517799e39",
						"name": "Resma de Papel",
						"precio": 15586,
						"cantidad": 4,
						"subtotal": 62344
					}
				]
			},
			{
				"_id": 9,
				"creado": "2018-05-09T05:28:47.265Z",
				"total": 59987,
				"estado": {
					"id": 2,
					"nombre": "En Curso"
				},
				"user": {
					"id": 1,
					"nombre": "franco",
					"apellido": "garcia",
					"usuario": "fgarcia",
					"password": 123,
					"rol": "admin",
					"email": "fgarcia@hotmail.com",
					"departamento": {
						"nombre": "Compra",
						"direccion": "658 Leonard Street, Brantleyville, Alaska"
					}
				},
				"detalles": [
					{
						"_id": "5af2870f8e066c503adae345",
						"name": "Marcadores",
						"precio": 9494,
						"cantidad": 2,
						"subtotal": 18988
					},
					{
						"_id": "5af2870f2ba69dd663a4bf93",
						"name": "Resma de Papel",
						"precio": 20555,
						"cantidad": 2,
						"subtotal": 41110
					},
					{
						"_id": "5af2870fa22f6c53d3b5c9be",
						"name": "Lapices",
						"precio": 27038,
						"cantidad": 2,
						"subtotal": 54076
					},
					{
						"_id": "5af2870ffa8ca9f1ac17ebb7",
						"name": "Marcadores",
						"precio": 12455,
						"cantidad": 1,
						"subtotal": 12455
					},
					{
						"_id": "5af2870f1a3f64bea9a23c2c",
						"name": "Resma de Papel",
						"precio": 22948,
						"cantidad": 3,
						"subtotal": 68844
					}
				]
			},
			{
				"_id": 10,
				"creado": "2018-05-09T05:28:47.265Z",
				"total": 85805,
				"estado": {
					"id": 3,
					"nombre": "Terminado"
				},
				"user": {
					"id": 1,
					"nombre": "franco",
					"apellido": "garcia",
					"usuario": "fgarcia",
					"password": 123,
					"rol": "admin",
					"email": "fgarcia@hotmail.com",
					"departamento": {
						"nombre": "Compra",
						"direccion": "658 Leonard Street, Brantleyville, Alaska"
					}
				},
				"detalles": [
					{
						"_id": "5af2870f836c158f3a63f98b",
						"name": "Resma de Papel",
						"precio": 22112,
						"cantidad": 1,
						"subtotal": 22112
					},
					{
						"_id": "5af2870f49e7f91521037ac7",
						"name": "Borradores",
						"precio": 29551,
						"cantidad": 3,
						"subtotal": 88653
					}
				]
			}
		];
	}

}

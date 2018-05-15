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

	cambiarEstadoPedido(oldpedido: any, newestado: number) {
		let newEstado		= this.estados.find(estado => (estado.id == newestado));
		oldpedido.estado	= newEstado;
		this.pedidos		= this.pedidos.filter(pedido => pedido._id != oldpedido._id);
		this.pedidos.push(oldpedido);
	}

	private generatePedidos() {
		this.pedidos = [
			{
				"_id": 1,
				"creado": "2018-05-14T06:00:30.319Z",
				"total": 66543,
				"estado": {
					"id": 4,
					"nombre": "Cancelado"
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
						"_id": "5af925fe0956399aa56047ca",
						"name": "Lapices",
						"precio": 26742,
						"cantidad": 4,
						"subtotal": 106968
					},
					{
						"_id": "5af925fe8b0af4973069f535",
						"name": "Marcadores",
						"precio": 17742,
						"cantidad": 4,
						"subtotal": 70968
					},
					{
						"_id": "5af925fe6a3e0d277d67ed65",
						"name": "Borradores",
						"precio": 8749,
						"cantidad": 4,
						"subtotal": 34996
					}
				]
			},
			{
				"_id": 2,
				"creado": "2018-05-14T06:00:30.319Z",
				"total": 64618,
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
						"_id": "5af925fe9caf55d5b7e74eb8",
						"name": "Resma de Papel",
						"precio": 15087,
						"cantidad": 5,
						"subtotal": 75435
					},
					{
						"_id": "5af925fe7fbdfb439f947fbd",
						"name": "Borradores",
						"precio": 7241,
						"cantidad": 3,
						"subtotal": 21723
					},
					{
						"_id": "5af925fe3f747e67f3f178c9",
						"name": "Borradores",
						"precio": 11152,
						"cantidad": 5,
						"subtotal": 55760
					},
					{
						"_id": "5af925fee31c715be1a79b8b",
						"name": "Resma de Papel",
						"precio": 12138,
						"cantidad": 3,
						"subtotal": 36414
					}
				]
			},
			{
				"_id": 3,
				"creado": "2018-05-14T06:00:30.319Z",
				"total": 77369,
				"estado": {
					"id": 4,
					"nombre": "Cancelado"
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
						"_id": "5af925feded5057bb2aaab9a",
						"name": "Borradores",
						"precio": 14067,
						"cantidad": 5,
						"subtotal": 70335
					},
					{
						"_id": "5af925fe0dc89b4e57f2b6b0",
						"name": "Marcadores",
						"precio": 12936,
						"cantidad": 3,
						"subtotal": 38808
					}
				]
			},
			{
				"_id": 4,
				"creado": "2018-05-14T06:00:30.319Z",
				"total": 77725,
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
						"_id": "5af925fe929999bc8c7ba16d",
						"name": "Lapices",
						"precio": 24775,
						"cantidad": 2,
						"subtotal": 49550
					},
					{
						"_id": "5af925fed31ce62531b02bf0",
						"name": "Borradores",
						"precio": 15645,
						"cantidad": 1,
						"subtotal": 15645
					},
					{
						"_id": "5af925fe4a7c22282668fa13",
						"name": "Marcadores",
						"precio": 27481,
						"cantidad": 4,
						"subtotal": 109924
					}
				]
			},
			{
				"_id": 5,
				"creado": "2018-05-14T06:00:30.319Z",
				"total": 50393,
				"estado": {
					"id": 1,
					"nombre": "Pendiente"
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
						"_id": "5af925fe9ba591a26ecb3688",
						"name": "Borradores",
						"precio": 17209,
						"cantidad": 4,
						"subtotal": 68836
					},
					{
						"_id": "5af925fec450a2d942238c3a",
						"name": "Borradores",
						"precio": 5802,
						"cantidad": 4,
						"subtotal": 23208
					},
					{
						"_id": "5af925fe1adb08abdf510e7c",
						"name": "Borradores",
						"precio": 6949,
						"cantidad": 4,
						"subtotal": 27796
					},
					{
						"_id": "5af925fec9ec8d8edfa2ecf1",
						"name": "Lapices",
						"precio": 21593,
						"cantidad": 3,
						"subtotal": 64779
					}
				]
			},
			{
				"_id": 6,
				"creado": "2018-05-14T06:00:30.319Z",
				"total": 56935,
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
						"_id": "5af925fec5be01daa165e142",
						"name": "Borradores",
						"precio": 13829,
						"cantidad": 4,
						"subtotal": 55316
					},
					{
						"_id": "5af925fe9e351cb77cca4f9f",
						"name": "Marcadores",
						"precio": 22048,
						"cantidad": 5,
						"subtotal": 110240
					},
					{
						"_id": "5af925fe30d5b1135ea6f12c",
						"name": "Resma de Papel",
						"precio": 17812,
						"cantidad": 5,
						"subtotal": 89060
					}
				]
			},
			{
				"_id": 7,
				"creado": "2018-05-14T06:00:30.319Z",
				"total": 72512,
				"estado": {
					"id": 4,
					"nombre": "Cancelado"
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
						"_id": "5af925fe067f8d54ba9481b5",
						"name": "Borradores",
						"precio": 24003,
						"cantidad": 5,
						"subtotal": 120015
					},
					{
						"_id": "5af925fe7fbb98909d64273b",
						"name": "Lapices",
						"precio": 7949,
						"cantidad": 1,
						"subtotal": 7949
					},
					{
						"_id": "5af925fe334388dfea6cab26",
						"name": "Marcadores",
						"precio": 15020,
						"cantidad": 5,
						"subtotal": 75100
					},
					{
						"_id": "5af925fe00f6dc73b8b4c144",
						"name": "Resma de Papel",
						"precio": 12851,
						"cantidad": 2,
						"subtotal": 25702
					}
				]
			},
			{
				"_id": 8,
				"creado": "2018-05-14T06:00:30.319Z",
				"total": 89881,
				"estado": {
					"id": 2,
					"nombre": "En Curso"
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
						"_id": "5af925fe37b01f64ef25e43e",
						"name": "Marcadores",
						"precio": 27216,
						"cantidad": 4,
						"subtotal": 108864
					},
					{
						"_id": "5af925feb1c3e5dd763eea6a",
						"name": "Resma de Papel",
						"precio": 28096,
						"cantidad": 4,
						"subtotal": 112384
					},
					{
						"_id": "5af925fe1cbeaa59d32a5785",
						"name": "Marcadores",
						"precio": 20926,
						"cantidad": 1,
						"subtotal": 20926
					},
					{
						"_id": "5af925fe50174c1c804aabe4",
						"name": "Lapices",
						"precio": 22522,
						"cantidad": 3,
						"subtotal": 67566
					},
					{
						"_id": "5af925fe9b59445970f51f9b",
						"name": "Lapices",
						"precio": 29485,
						"cantidad": 1,
						"subtotal": 29485
					}
				]
			},
			{
				"_id": 9,
				"creado": "2018-05-14T06:00:30.319Z",
				"total": 62238,
				"estado": {
					"id": 1,
					"nombre": "Pendiente"
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
						"_id": "5af925feabcafebc925e73a3",
						"name": "Resma de Papel",
						"precio": 28144,
						"cantidad": 1,
						"subtotal": 28144
					},
					{
						"_id": "5af925fe1a680a842b248511",
						"name": "Borradores",
						"precio": 9611,
						"cantidad": 5,
						"subtotal": 48055
					}
				]
			},
			{
				"_id": 10,
				"creado": "2018-05-14T06:00:30.319Z",
				"total": 59804,
				"estado": {
					"id": 3,
					"nombre": "Terminado"
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
						"_id": "5af925fe282650ea8b805979",
						"name": "Resma de Papel",
						"precio": 18738,
						"cantidad": 1,
						"subtotal": 18738
					},
					{
						"_id": "5af925fee2c40190214ed6f8",
						"name": "Resma de Papel",
						"precio": 19295,
						"cantidad": 4,
						"subtotal": 77180
					},
					{
						"_id": "5af925fe516cfdb5a74d67e5",
						"name": "Resma de Papel",
						"precio": 8129,
						"cantidad": 5,
						"subtotal": 40645
					},
					{
						"_id": "5af925fe0e84bce374475890",
						"name": "Resma de Papel",
						"precio": 19879,
						"cantidad": 2,
						"subtotal": 39758
					}
				]
			},
			{
				"_id": 11,
				"creado": "2018-05-14T06:00:30.319Z",
				"total": 57152,
				"estado": {
					"id": 1,
					"nombre": "Pendiente"
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
						"_id": "5af925feb54444c3fdc982e1",
						"name": "Lapices",
						"precio": 18902,
						"cantidad": 3,
						"subtotal": 56706
					},
					{
						"_id": "5af925fe6067a5756feb77a9",
						"name": "Borradores",
						"precio": 25562,
						"cantidad": 4,
						"subtotal": 102248
					}
				]
			},
			{
				"_id": 12,
				"creado": "2018-05-14T06:00:30.319Z",
				"total": 62005,
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
						"_id": "5af925fe422c5b0588982e93",
						"name": "Resma de Papel",
						"precio": 25561,
						"cantidad": 2,
						"subtotal": 51122
					},
					{
						"_id": "5af925fe144a6d97b352111e",
						"name": "Resma de Papel",
						"precio": 16387,
						"cantidad": 1,
						"subtotal": 16387
					},
					{
						"_id": "5af925fe8f7ad8e95c0cb71d",
						"name": "Borradores",
						"precio": 11760,
						"cantidad": 1,
						"subtotal": 11760
					}
				]
			},
			{
				"_id": 13,
				"creado": "2018-05-14T06:00:30.319Z",
				"total": 70168,
				"estado": {
					"id": 3,
					"nombre": "Terminado"
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
						"_id": "5af925fe5d1044035950632c",
						"name": "Resma de Papel",
						"precio": 23399,
						"cantidad": 3,
						"subtotal": 70197
					},
					{
						"_id": "5af925fe4ecf795dd0eca4fd",
						"name": "Marcadores",
						"precio": 16329,
						"cantidad": 3,
						"subtotal": 48987
					},
					{
						"_id": "5af925fee063929f449b7b9e",
						"name": "Borradores",
						"precio": 8370,
						"cantidad": 3,
						"subtotal": 25110
					}
				]
			},
			{
				"_id": 14,
				"creado": "2018-05-14T06:00:30.319Z",
				"total": 57329,
				"estado": {
					"id": 1,
					"nombre": "Pendiente"
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
						"_id": "5af925fe5731bc000e6dd85e",
						"name": "Resma de Papel",
						"precio": 19964,
						"cantidad": 4,
						"subtotal": 79856
					},
					{
						"_id": "5af925fee344eff465a2839d",
						"name": "Borradores",
						"precio": 5635,
						"cantidad": 4,
						"subtotal": 22540
					}
				]
			},
			{
				"_id": 15,
				"creado": "2018-05-14T06:00:30.319Z",
				"total": 60531,
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
						"_id": "5af925fec758c80227753214",
						"name": "Borradores",
						"precio": 24568,
						"cantidad": 4,
						"subtotal": 98272
					},
					{
						"_id": "5af925feaa5614502d3ee51c",
						"name": "Lapices",
						"precio": 18317,
						"cantidad": 5,
						"subtotal": 91585
					}
				]
			},
			{
				"_id": 16,
				"creado": "2018-05-14T06:00:30.319Z",
				"total": 57089,
				"estado": {
					"id": 1,
					"nombre": "Pendiente"
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
						"_id": "5af925fe7011aa7f07e0c458",
						"name": "Borradores",
						"precio": 26447,
						"cantidad": 3,
						"subtotal": 79341
					},
					{
						"_id": "5af925fee21aa90e36cc7b3c",
						"name": "Lapices",
						"precio": 29172,
						"cantidad": 3,
						"subtotal": 87516
					}
				]
			},
			{
				"_id": 17,
				"creado": "2018-05-14T06:00:30.319Z",
				"total": 88772,
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
						"_id": "5af925febf31283e4ff0bc8d",
						"name": "Lapices",
						"precio": 10723,
						"cantidad": 5,
						"subtotal": 53615
					},
					{
						"_id": "5af925fecc2403cf8a000607",
						"name": "Lapices",
						"precio": 28743,
						"cantidad": 2,
						"subtotal": 57486
					},
					{
						"_id": "5af925fe9eb430843e58b3dd",
						"name": "Marcadores",
						"precio": 17991,
						"cantidad": 3,
						"subtotal": 53973
					}
				]
			},
			{
				"_id": 18,
				"creado": "2018-05-14T06:00:30.319Z",
				"total": 72732,
				"estado": {
					"id": 4,
					"nombre": "Cancelado"
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
						"_id": "5af925fe9e9d73db7220dcb4",
						"name": "Resma de Papel",
						"precio": 18561,
						"cantidad": 4,
						"subtotal": 74244
					},
					{
						"_id": "5af925fe7290a78c21b5d3ee",
						"name": "Resma de Papel",
						"precio": 9863,
						"cantidad": 1,
						"subtotal": 9863
					},
					{
						"_id": "5af925fe871a83b079912306",
						"name": "Resma de Papel",
						"precio": 19214,
						"cantidad": 5,
						"subtotal": 96070
					},
					{
						"_id": "5af925fe7e27310c812ebdeb",
						"name": "Marcadores",
						"precio": 15271,
						"cantidad": 5,
						"subtotal": 76355
					}
				]
			},
			{
				"_id": 19,
				"creado": "2018-05-14T06:00:30.319Z",
				"total": 95185,
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
						"_id": "5af925fe2d579e7e8d93c999",
						"name": "Borradores",
						"precio": 18674,
						"cantidad": 1,
						"subtotal": 18674
					},
					{
						"_id": "5af925fe7645a76aea41a0cd",
						"name": "Borradores",
						"precio": 24847,
						"cantidad": 1,
						"subtotal": 24847
					},
					{
						"_id": "5af925fe379243bbd2a4af04",
						"name": "Resma de Papel",
						"precio": 8451,
						"cantidad": 1,
						"subtotal": 8451
					},
					{
						"_id": "5af925fe78c46b178e668b52",
						"name": "Borradores",
						"precio": 7262,
						"cantidad": 2,
						"subtotal": 14524
					}
				]
			},
			{
				"_id": 20,
				"creado": "2018-05-14T06:00:30.319Z",
				"total": 53273,
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
						"_id": "5af925fe3a4a57a065f82dc1",
						"name": "Borradores",
						"precio": 10995,
						"cantidad": 4,
						"subtotal": 43980
					},
					{
						"_id": "5af925fe70cad38ea0f40b16",
						"name": "Marcadores",
						"precio": 17429,
						"cantidad": 5,
						"subtotal": 87145
					}
				]
			}
		];
	}

}

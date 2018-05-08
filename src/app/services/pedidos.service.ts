import { Injectable } from '@angular/core';

@Injectable()
export class PedidosService {

	private pedidos: any[] = [];

	constructor() {
		this.generatePedidos();
	}

	getPedidos() {
		return this.pedidos;
	}

	getPedido(id:number):any{
		return this.pedidos.find(pedido => pedido._id == id);
	}

	addPedido(pedido:any) {
		this.pedidos.push(pedido);
	}

	modifyPedido(oldpedido:any) {
		debugger;
		this.pedidos =  this.pedidos.filter(pedido => pedido._id != oldpedido._id);
		this.pedidos.push(oldpedido);
	}

	private generatePedidos() {
		this.pedidos = [
			{
				"_id": 1,
				"creado": "2018-04-25T05:23:39.183Z",
				"total": 73233,
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
						"_id": "5ae010db35cc8be6be338f5d",
						"name": "Resma de Papel",
						"precio": 6005,
						"cantidad": 4,
						"subtotal": 24020
					},
					{
						"_id": "5ae010dba4c0ef8a481c87a7",
						"name": "Resma de Papel",
						"precio": 13441,
						"cantidad": 3,
						"subtotal": 40323
					}
				]
			},
			{
				"_id": 2,
				"creado": "2018-04-25T05:23:39.183Z",
				"total": 84413,
				"user": {
					"id": 2,
					"nombre": "pablo",
					"apellido": "bassil",
					"usuario": "pbassil",
					"password": "123",
					"rol": "operador",
					"email": "pbassil@hotmail.com",
					"departamento": {
						"nombre": "Auditoria",
						"direccion": "950 Farragut Place, Bannock, West Virginia"
					}
				},
				"detalles": [
					{
						"_id": "5ae010dbc261657688dbdbe9",
						"name": "Borradores",
						"precio": 5582,
						"cantidad": 3,
						"subtotal": 16746
					},
					{
						"_id": "5ae010db0ede4df8caa47e7f",
						"name": "Marcadores",
						"precio": 24438,
						"cantidad": 2,
						"subtotal": 48876
					},
					{
						"_id": "5ae010db0cfa90c5082aa10e",
						"name": "Resma de Papel",
						"precio": 26959,
						"cantidad": 2,
						"subtotal": 53918
					}
				]
			},
			{
				"_id": 3,
				"creado": "2018-04-25T05:23:39.183Z",
				"total": 65700,
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
						"_id": "5ae010dbb1319f4131a2d8d0",
						"name": "Lapices",
						"precio": 29020,
						"cantidad": 3,
						"subtotal": 87060
					},
					{
						"_id": "5ae010dba41fd62e26467899",
						"name": "Resma de Papel",
						"precio": 11815,
						"cantidad": 1,
						"subtotal": 11815
					},
					{
						"_id": "5ae010db655241a347a537eb",
						"name": "Marcadores",
						"precio": 6168,
						"cantidad": 1,
						"subtotal": 6168
					},
					{
						"_id": "5ae010db6352a7b1adbed9bb",
						"name": "Borradores",
						"precio": 23600,
						"cantidad": 2,
						"subtotal": 47200
					}
				]
			},
			{
				"_id": 4,
				"creado": "2018-04-25T05:23:39.183Z",
				"total": 93750,
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
						"_id": "5ae010db7235aee343e71853",
						"name": "Borradores",
						"precio": 20216,
						"cantidad": 2,
						"subtotal": 40432
					},
					{
						"_id": "5ae010dbdc98591dda4ea516",
						"name": "Marcadores",
						"precio": 8278,
						"cantidad": 1,
						"subtotal": 8278
					},
					{
						"_id": "5ae010db61859a96c791ae8d",
						"name": "Resma de Papel",
						"precio": 18485,
						"cantidad": 2,
						"subtotal": 36970
					}
				]
			},
			{
				"_id": 5,
				"creado": "2018-04-25T05:23:39.183Z",
				"total": 97898,
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
						"_id": "5ae010dbd764d6ad0a63cc46",
						"name": "Marcadores",
						"precio": 16411,
						"cantidad": 2,
						"subtotal": 32822
					},
					{
						"_id": "5ae010dba3ba2fd8290c8e5f",
						"name": "Marcadores",
						"precio": 13000,
						"cantidad": 5,
						"subtotal": 65000
					}
				]
			},
			{
				"_id": 6,
				"creado": "2018-04-25T05:23:39.183Z",
				"total": 68055,
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
						"_id": "5ae010dbd8353f3f50d09a8e",
						"name": "Lapices",
						"precio": 20204,
						"cantidad": 5,
						"subtotal": 101020
					},
					{
						"_id": "5ae010db5bd2a53b6b16f4a7",
						"name": "Marcadores",
						"precio": 23292,
						"cantidad": 3,
						"subtotal": 69876
					}
				]
			},
			{
				"_id": 7,
				"creado": "2018-04-25T05:23:39.183Z",
				"total": 59734,
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
						"_id": "5ae010db64500fd9ce0d0a66",
						"name": "Borradores",
						"precio": 18835,
						"cantidad": 4,
						"subtotal": 75340
					},
					{
						"_id": "5ae010db7c25c28f640bff05",
						"name": "Lapices",
						"precio": 25868,
						"cantidad": 4,
						"subtotal": 103472
					},
					{
						"_id": "5ae010db1ad268a5dbe11b77",
						"name": "Borradores",
						"precio": 24329,
						"cantidad": 3,
						"subtotal": 72987
					}
				]
			},
			{
				"_id": 8,
				"creado": "2018-04-25T05:23:39.183Z",
				"total": 68367,
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
						"_id": "5ae010dbad6ff2f62eadaa76",
						"name": "Lapices",
						"precio": 24805,
						"cantidad": 5,
						"subtotal": 124025
					},
					{
						"_id": "5ae010dbd9f6e4e88f15d382",
						"name": "Marcadores",
						"precio": 28069,
						"cantidad": 3,
						"subtotal": 84207
					},
					{
						"_id": "5ae010dbecdbfce74ffe505e",
						"name": "Borradores",
						"precio": 5875,
						"cantidad": 4,
						"subtotal": 23500
					},
					{
						"_id": "5ae010dbcde4d3ff96ad0b74",
						"name": "Borradores",
						"precio": 20876,
						"cantidad": 5,
						"subtotal": 104380
					},
					{
						"_id": "5ae010db8f902a4240616929",
						"name": "Lapices",
						"precio": 25639,
						"cantidad": 4,
						"subtotal": 102556
					}
				]
			},
			{
				"_id": 9,
				"creado": "2018-04-25T05:23:39.183Z",
				"total": 93305,
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
						"_id": "5ae010dbb361a9028425cb03",
						"name": "Marcadores",
						"precio": 16983,
						"cantidad": 2,
						"subtotal": 33966
					},
					{
						"_id": "5ae010db4aab6b2f99a84969",
						"name": "Resma de Papel",
						"precio": 19405,
						"cantidad": 2,
						"subtotal": 38810
					},
					{
						"_id": "5ae010db9a1d63c83199bb96",
						"name": "Resma de Papel",
						"precio": 5269,
						"cantidad": 5,
						"subtotal": 26345
					}
				]
			},
			{
				"_id": 10,
				"creado": "2018-04-25T05:23:39.183Z",
				"total": 55666,
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
						"_id": "5ae010dbb7f8189b4a0914d5",
						"name": "Lapices",
						"precio": 20156,
						"cantidad": 4,
						"subtotal": 80624
					},
					{
						"_id": "5ae010db4ddbb0ba73b3b755",
						"name": "Marcadores",
						"precio": 10375,
						"cantidad": 2,
						"subtotal": 20750
					}
				]
			}
		];
	}

}

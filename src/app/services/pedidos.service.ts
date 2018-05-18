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
		let newEstado = this.estados.find(estado => (estado.id == newestado));
		oldpedido.estado = newEstado;
		this.pedidos = this.pedidos.filter(pedido => pedido._id != oldpedido._id);
		this.pedidos.push(oldpedido);
	}

	private generatePedidos() {
		this.pedidos = [
			{
				"_id": 1,
				"creado": "2018-05-19T04:00:12.908Z",
				"total": 91964,
				"estado": {
					"id": 2,
					"nombre": "En Curso"
				},
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
						"_id": "5afe4fccaf97f64b09715e1e",
						"name": "Borradores",
						"precio": 25294,
						"cantidad": 2,
						"subtotal": 50588
					},
					{
						"_id": "5afe4fcc2740e984c1e297ff",
						"name": "Marcadores",
						"precio": 13014,
						"cantidad": 4,
						"subtotal": 52056
					}
				]
			},
			{
				"_id": 2,
				"creado": "2018-05-20T04:00:12.911Z",
				"total": 74406,
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
						"_id": "5afe4fccc60006fbd91fef7d",
						"name": "Borradores",
						"precio": 29516,
						"cantidad": 5,
						"subtotal": 147580
					},
					{
						"_id": "5afe4fccd1bc83a45d705749",
						"name": "Marcadores",
						"precio": 17986,
						"cantidad": 5,
						"subtotal": 89930
					}
				]
			},
			{
				"_id": 3,
				"creado": "2018-05-21T04:00:12.911Z",
				"total": 62933,
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
						"_id": "5afe4fcc365c86345da7ea69",
						"name": "Resma de Papel",
						"precio": 17275,
						"cantidad": 1,
						"subtotal": 17275
					},
					{
						"_id": "5afe4fcc0a76dca8b3324e56",
						"name": "Marcadores",
						"precio": 16611,
						"cantidad": 4,
						"subtotal": 66444
					},
					{
						"_id": "5afe4fcca1b095705be38a16",
						"name": "Lapices",
						"precio": 18988,
						"cantidad": 3,
						"subtotal": 56964
					}
				]
			},
			{
				"_id": 4,
				"creado": "2018-05-22T04:00:12.911Z",
				"total": 56254,
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
						"_id": "5afe4fcc263572a8dfd9a2d6",
						"name": "Borradores",
						"precio": 20849,
						"cantidad": 3,
						"subtotal": 62547
					},
					{
						"_id": "5afe4fcc897aeb03456c8f26",
						"name": "Marcadores",
						"precio": 12436,
						"cantidad": 1,
						"subtotal": 12436
					},
					{
						"_id": "5afe4fccd2d708118f64e918",
						"name": "Lapices",
						"precio": 6706,
						"cantidad": 5,
						"subtotal": 33530
					}
				]
			},
			{
				"_id": 5,
				"creado": "2018-05-23T04:00:12.911Z",
				"total": 69100,
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
						"_id": "5afe4fccc4a715fe6958c71b",
						"name": "Marcadores",
						"precio": 6987,
						"cantidad": 4,
						"subtotal": 27948
					},
					{
						"_id": "5afe4fcc097abf982e2082a9",
						"name": "Marcadores",
						"precio": 26093,
						"cantidad": 1,
						"subtotal": 26093
					}
				]
			},
			{
				"_id": 6,
				"creado": "2018-05-24T04:00:12.912Z",
				"total": 79770,
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
						"_id": "5afe4fcc8309143147d79363",
						"name": "Marcadores",
						"precio": 23782,
						"cantidad": 4,
						"subtotal": 95128
					},
					{
						"_id": "5afe4fcc43d0d6c7aa2b96fe",
						"name": "Lapices",
						"precio": 25349,
						"cantidad": 3,
						"subtotal": 76047
					}
				]
			},
			{
				"_id": 7,
				"creado": "2018-05-25T04:00:12.912Z",
				"total": 55777,
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
						"_id": "5afe4fccadf991c4157e9c4d",
						"name": "Borradores",
						"precio": 17430,
						"cantidad": 2,
						"subtotal": 34860
					},
					{
						"_id": "5afe4fccaedfc3b345f7ec06",
						"name": "Lapices",
						"precio": 7255,
						"cantidad": 2,
						"subtotal": 14510
					},
					{
						"_id": "5afe4fccc43be8b23f544de5",
						"name": "Borradores",
						"precio": 21520,
						"cantidad": 4,
						"subtotal": 86080
					}
				]
			},
			{
				"_id": 8,
				"creado": "2018-05-26T04:00:12.912Z",
				"total": 80274,
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
						"_id": "5afe4fccec63fdb77081de30",
						"name": "Borradores",
						"precio": 7550,
						"cantidad": 2,
						"subtotal": 15100
					},
					{
						"_id": "5afe4fccc143cb41970835d5",
						"name": "Resma de Papel",
						"precio": 18365,
						"cantidad": 2,
						"subtotal": 36730
					}
				]
			},
			{
				"_id": 9,
				"creado": "2018-05-27T04:00:12.912Z",
				"total": 68647,
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
						"_id": "5afe4fcc0d8a58eafc2bda1b",
						"name": "Marcadores",
						"precio": 12053,
						"cantidad": 5,
						"subtotal": 60265
					},
					{
						"_id": "5afe4fcc716fa9a4e91ce6ab",
						"name": "Resma de Papel",
						"precio": 11659,
						"cantidad": 1,
						"subtotal": 11659
					},
					{
						"_id": "5afe4fcc0d997c63e7e7a55f",
						"name": "Lapices",
						"precio": 12089,
						"cantidad": 3,
						"subtotal": 36267
					}
				]
			},
			{
				"_id": 10,
				"creado": "2018-05-28T04:00:12.912Z",
				"total": 71619,
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
						"_id": "5afe4fcccd80c18445898aca",
						"name": "Marcadores",
						"precio": 18301,
						"cantidad": 5,
						"subtotal": 91505
					},
					{
						"_id": "5afe4fcc2a8730b3d14fb051",
						"name": "Resma de Papel",
						"precio": 9811,
						"cantidad": 2,
						"subtotal": 19622
					},
					{
						"_id": "5afe4fcc292261dee9f2deb5",
						"name": "Borradores",
						"precio": 26962,
						"cantidad": 3,
						"subtotal": 80886
					},
					{
						"_id": "5afe4fcc396e329fe86c6374",
						"name": "Resma de Papel",
						"precio": 25752,
						"cantidad": 3,
						"subtotal": 77256
					},
					{
						"_id": "5afe4fcc2a4c07a0a8226c55",
						"name": "Marcadores",
						"precio": 19353,
						"cantidad": 1,
						"subtotal": 19353
					}
				]
			},
			{
				"_id": 11,
				"creado": "2018-05-29T04:00:12.913Z",
				"total": 85274,
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
						"_id": "5afe4fccc68a1f6a58c07b0c",
						"name": "Resma de Papel",
						"precio": 7710,
						"cantidad": 1,
						"subtotal": 7710
					},
					{
						"_id": "5afe4fccae82f7606e16fb58",
						"name": "Resma de Papel",
						"precio": 6216,
						"cantidad": 4,
						"subtotal": 24864
					},
					{
						"_id": "5afe4fccbff3266d91255e02",
						"name": "Borradores",
						"precio": 11095,
						"cantidad": 3,
						"subtotal": 33285
					},
					{
						"_id": "5afe4fcc380bedcd3d74bf57",
						"name": "Lapices",
						"precio": 25658,
						"cantidad": 2,
						"subtotal": 51316
					}
				]
			},
			{
				"_id": 12,
				"creado": "2018-05-30T04:00:12.961Z",
				"total": 93454,
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
						"_id": "5afe4fcc2202572753f0af2a",
						"name": "Marcadores",
						"precio": 5636,
						"cantidad": 3,
						"subtotal": 16908
					},
					{
						"_id": "5afe4fccce3cf88ba739c71b",
						"name": "Marcadores",
						"precio": 10450,
						"cantidad": 5,
						"subtotal": 52250
					},
					{
						"_id": "5afe4fcca3cf9873aa614cca",
						"name": "Marcadores",
						"precio": 9933,
						"cantidad": 2,
						"subtotal": 19866
					},
					{
						"_id": "5afe4fccd699679c1dfff9d9",
						"name": "Marcadores",
						"precio": 21460,
						"cantidad": 2,
						"subtotal": 42920
					}
				]
			},
			{
				"_id": 13,
				"creado": "2018-05-31T04:00:12.962Z",
				"total": 69677,
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
						"_id": "5afe4fcc35365c1372043c76",
						"name": "Borradores",
						"precio": 9141,
						"cantidad": 1,
						"subtotal": 9141
					},
					{
						"_id": "5afe4fcc59fa589ce8679a33",
						"name": "Resma de Papel",
						"precio": 12491,
						"cantidad": 1,
						"subtotal": 12491
					},
					{
						"_id": "5afe4fccb2ed359f6b5ebb67",
						"name": "Resma de Papel",
						"precio": 17604,
						"cantidad": 4,
						"subtotal": 70416
					},
					{
						"_id": "5afe4fccb96a4271adbb7552",
						"name": "Resma de Papel",
						"precio": 17500,
						"cantidad": 3,
						"subtotal": 52500
					}
				]
			},
			{
				"_id": 14,
				"creado": "2018-06-01T04:00:12.962Z",
				"total": 75224,
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
						"_id": "5afe4fcc11db9f6b57cd9b80",
						"name": "Borradores",
						"precio": 14220,
						"cantidad": 3,
						"subtotal": 42660
					},
					{
						"_id": "5afe4fcc38b60cc99850bbe4",
						"name": "Borradores",
						"precio": 28536,
						"cantidad": 1,
						"subtotal": 28536
					},
					{
						"_id": "5afe4fccf20a44ff905afc55",
						"name": "Marcadores",
						"precio": 27102,
						"cantidad": 2,
						"subtotal": 54204
					},
					{
						"_id": "5afe4fcc024349929716ce1f",
						"name": "Resma de Papel",
						"precio": 6038,
						"cantidad": 1,
						"subtotal": 6038
					},
					{
						"_id": "5afe4fcca3c0ba50ba06c2a9",
						"name": "Resma de Papel",
						"precio": 26851,
						"cantidad": 3,
						"subtotal": 80553
					}
				]
			},
			{
				"_id": 15,
				"creado": "2018-06-02T04:00:12.962Z",
				"total": 86666,
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
						"_id": "5afe4fccc0910c2c3191cbde",
						"name": "Borradores",
						"precio": 18591,
						"cantidad": 2,
						"subtotal": 37182
					},
					{
						"_id": "5afe4fccc7465b2766852883",
						"name": "Borradores",
						"precio": 8273,
						"cantidad": 4,
						"subtotal": 33092
					},
					{
						"_id": "5afe4fcc0e2225fe411af991",
						"name": "Lapices",
						"precio": 26761,
						"cantidad": 3,
						"subtotal": 80283
					},
					{
						"_id": "5afe4fcc7f47601f5eaa8fdc",
						"name": "Borradores",
						"precio": 9754,
						"cantidad": 5,
						"subtotal": 48770
					},
					{
						"_id": "5afe4fccc6b2ca2f2881534e",
						"name": "Borradores",
						"precio": 14211,
						"cantidad": 3,
						"subtotal": 42633
					}
				]
			},
			{
				"_id": 16,
				"creado": "2018-06-03T04:00:12.962Z",
				"total": 63390,
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
						"_id": "5afe4fccd1758c55045ad129",
						"name": "Resma de Papel",
						"precio": 13723,
						"cantidad": 2,
						"subtotal": 27446
					},
					{
						"_id": "5afe4fcca47deb105f4f9035",
						"name": "Marcadores",
						"precio": 23710,
						"cantidad": 1,
						"subtotal": 23710
					},
					{
						"_id": "5afe4fcc4425be5cc1852723",
						"name": "Borradores",
						"precio": 14443,
						"cantidad": 5,
						"subtotal": 72215
					},
					{
						"_id": "5afe4fcc9fed41f3a1e45f54",
						"name": "Resma de Papel",
						"precio": 15534,
						"cantidad": 2,
						"subtotal": 31068
					}
				]
			},
			{
				"_id": 17,
				"creado": "2018-06-04T04:00:12.963Z",
				"total": 74402,
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
						"_id": "5afe4fcc3e40ec1fc93b2a5e",
						"name": "Resma de Papel",
						"precio": 9004,
						"cantidad": 2,
						"subtotal": 18008
					},
					{
						"_id": "5afe4fcc6a46e1423ed865a6",
						"name": "Borradores",
						"precio": 26126,
						"cantidad": 4,
						"subtotal": 104504
					}
				]
			},
			{
				"_id": 18,
				"creado": "2018-06-05T04:00:12.963Z",
				"total": 80936,
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
						"_id": "5afe4fcc3af2c7ae327a7e4f",
						"name": "Resma de Papel",
						"precio": 14024,
						"cantidad": 3,
						"subtotal": 42072
					},
					{
						"_id": "5afe4fccc61ff5f209b15476",
						"name": "Resma de Papel",
						"precio": 10683,
						"cantidad": 1,
						"subtotal": 10683
					},
					{
						"_id": "5afe4fccc130ff7fe6efdacb",
						"name": "Marcadores",
						"precio": 26353,
						"cantidad": 5,
						"subtotal": 131765
					}
				]
			},
			{
				"_id": 19,
				"creado": "2018-06-06T04:00:12.963Z",
				"total": 70685,
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
						"_id": "5afe4fcc9ad28e03b86f071b",
						"name": "Resma de Papel",
						"precio": 23809,
						"cantidad": 3,
						"subtotal": 71427
					},
					{
						"_id": "5afe4fcc797f15cf504f29dc",
						"name": "Borradores",
						"precio": 22176,
						"cantidad": 2,
						"subtotal": 44352
					},
					{
						"_id": "5afe4fcc6dd2089991aec371",
						"name": "Resma de Papel",
						"precio": 21911,
						"cantidad": 4,
						"subtotal": 87644
					}
				]
			},
			{
				"_id": 20,
				"creado": "2018-06-07T04:00:12.963Z",
				"total": 69465,
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
						"_id": "5afe4fccfe332073477dad08",
						"name": "Marcadores",
						"precio": 7547,
						"cantidad": 5,
						"subtotal": 37735
					},
					{
						"_id": "5afe4fcc6cf9ddd06d32c25c",
						"name": "Resma de Papel",
						"precio": 8074,
						"cantidad": 4,
						"subtotal": 32296
					},
					{
						"_id": "5afe4fcc570db358915db923",
						"name": "Borradores",
						"precio": 16776,
						"cantidad": 2,
						"subtotal": 33552
					}
				]
			}
		];

		this.pedidos = this.pedidos.map(function(item, index){
			let date = new Date();
			date.setDate(date.getDate() + index);

			item.creado = date;

			return item;
		});
	}

}

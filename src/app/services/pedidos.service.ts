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

	private generatePedidos() {
		this.pedidos = [
			{
				"_id": "5ade00322a00aeaf20c844ef",
				"creado": "2018-04-23T15:48:02.492Z",
				"total": 84436,
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
						"_id": "5ade003227dee813f6502215",
						"name": "Lapices",
						"precio": 8684,
						"cantidad": 3
					},
					{
						"_id": "5ade003216499d81f58d8b65",
						"name": "Resma de Papel",
						"precio": 15910,
						"cantidad": 4
					},
					{
						"_id": "5ade00323bdf5130c6f3cb9e",
						"name": "Borradores",
						"precio": 5742,
						"cantidad": 2
					},
					{
						"_id": "5ade003275bec779b7a7a0db",
						"name": "Borradores",
						"precio": 23904,
						"cantidad": 3
					}
				]
			},
			{
				"_id": "5ade00325be673c37fa4773e",
				"creado": "2018-04-23T15:48:02.492Z",
				"total": 80678,
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
						"_id": "5ade003293e5df596a237db8",
						"name": "Borradores",
						"precio": 17824,
						"cantidad": 4
					},
					{
						"_id": "5ade0032d6c1bc841383a1bb",
						"name": "Marcadores",
						"precio": 10136,
						"cantidad": 5
					},
					{
						"_id": "5ade00329853484310ee1477",
						"name": "Borradores",
						"precio": 7529,
						"cantidad": 3
					},
					{
						"_id": "5ade00321610f84d1c4d3553",
						"name": "Borradores",
						"precio": 20372,
						"cantidad": 2
					},
					{
						"_id": "5ade003278ea9b6465693795",
						"name": "Borradores",
						"precio": 12154,
						"cantidad": 4
					}
				]
			},
			{
				"_id": "5ade00322ad10533d16adf42",
				"creado": "2018-04-23T15:48:02.492Z",
				"total": 96360,
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
						"_id": "5ade00329a430f2d30b744b0",
						"name": "Lapices",
						"precio": 12600,
						"cantidad": 2
					},
					{
						"_id": "5ade0032428b3c0ed9057039",
						"name": "Lapices",
						"precio": 5242,
						"cantidad": 1
					},
					{
						"_id": "5ade00321f9be68a3d6b0558",
						"name": "Marcadores",
						"precio": 11434,
						"cantidad": 3
					},
					{
						"_id": "5ade0032a7a0c5b926cdbba5",
						"name": "Borradores",
						"precio": 12223,
						"cantidad": 5
					}
				]
			},
			{
				"_id": "5ade0032d700856b0e3d4b41",
				"creado": "2018-04-23T15:48:02.492Z",
				"total": 65784,
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
						"_id": "5ade003221496585a19c1ccf",
						"name": "Borradores",
						"precio": 5939,
						"cantidad": 3
					},
					{
						"_id": "5ade0032b204c1e53b226457",
						"name": "Lapices",
						"precio": 11521,
						"cantidad": 2
					},
					{
						"_id": "5ade0032be5767f1d4e4ed81",
						"name": "Borradores",
						"precio": 5799,
						"cantidad": 3
					},
					{
						"_id": "5ade0032a564c8c32c926fa9",
						"name": "Resma de Papel",
						"precio": 17099,
						"cantidad": 4
					},
					{
						"_id": "5ade00324dee403f89056b5b",
						"name": "Resma de Papel",
						"precio": 13116,
						"cantidad": 1
					}
				]
			},
			{
				"_id": "5ade003267fb402dcb99cf49",
				"creado": "2018-04-23T15:48:02.492Z",
				"total": 67530,
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
						"_id": "5ade0032a1996d0ed86a313e",
						"name": "Marcadores",
						"precio": 13005,
						"cantidad": 3
					},
					{
						"_id": "5ade0032a8aed3a7979b090e",
						"name": "Borradores",
						"precio": 20226,
						"cantidad": 5
					},
					{
						"_id": "5ade0032f681bfcf50f84dcc",
						"name": "Borradores",
						"precio": 23127,
						"cantidad": 3
					}
				]
			},
			{
				"_id": "5ade0032b61535138acfe3e4",
				"creado": "2018-04-23T15:48:02.492Z",
				"total": 55590,
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
						"_id": "5ade0032c390fec1ca73228b",
						"name": "Lapices",
						"precio": 21288,
						"cantidad": 3
					},
					{
						"_id": "5ade003259b8873bd9edf393",
						"name": "Lapices",
						"precio": 25237,
						"cantidad": 2
					},
					{
						"_id": "5ade003202a30d52e61342f3",
						"name": "Lapices",
						"precio": 20440,
						"cantidad": 1
					},
					{
						"_id": "5ade00320f208288b79b8dd7",
						"name": "Borradores",
						"precio": 10407,
						"cantidad": 1
					},
					{
						"_id": "5ade0032681c657a4574f07e",
						"name": "Lapices",
						"precio": 28628,
						"cantidad": 2
					}
				]
			},
			{
				"_id": "5ade003203d7d15939274d43",
				"creado": "2018-04-23T15:48:02.492Z",
				"total": 82815,
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
						"_id": "5ade0032e8474575e76841eb",
						"name": "Borradores",
						"precio": 18323,
						"cantidad": 1
					},
					{
						"_id": "5ade003203c8d6196a78afa0",
						"name": "Resma de Papel",
						"precio": 19982,
						"cantidad": 1
					}
				]
			},
			{
				"_id": "5ade0032609424c7a444fc75",
				"creado": "2018-04-23T15:48:02.492Z",
				"total": 89544,
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
						"_id": "5ade003239eb0da9b867218a",
						"name": "Lapices",
						"precio": 7130,
						"cantidad": 3
					},
					{
						"_id": "5ade0032375a65ba652859e5",
						"name": "Lapices",
						"precio": 14763,
						"cantidad": 2
					},
					{
						"_id": "5ade0032d75b7e7f182af9ee",
						"name": "Marcadores",
						"precio": 12051,
						"cantidad": 3
					},
					{
						"_id": "5ade0032fa06d490f2238caa",
						"name": "Resma de Papel",
						"precio": 21585,
						"cantidad": 5
					},
					{
						"_id": "5ade00325197b421b1ef65d4",
						"name": "Resma de Papel",
						"precio": 15559,
						"cantidad": 5
					}
				]
			},
			{
				"_id": "5ade003252102aa6384cdc68",
				"creado": "2018-04-23T15:48:02.492Z",
				"total": 92789,
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
						"_id": "5ade0032540fd5e9cdf69823",
						"name": "Lapices",
						"precio": 17132,
						"cantidad": 2
					},
					{
						"_id": "5ade00327d2171dace1570b6",
						"name": "Borradores",
						"precio": 22581,
						"cantidad": 3
					},
					{
						"_id": "5ade003265a31f25b185de95",
						"name": "Lapices",
						"precio": 25447,
						"cantidad": 2
					},
					{
						"_id": "5ade0032c67955a2beff98f8",
						"name": "Lapices",
						"precio": 25483,
						"cantidad": 5
					}
				]
			},
			{
				"_id": "5ade003255c6c7c558ddc37d",
				"creado": "2018-04-23T15:48:02.492Z",
				"total": 78254,
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
						"_id": "5ade0032bcb96451deef2374",
						"name": "Resma de Papel",
						"precio": 11610,
						"cantidad": 3
					},
					{
						"_id": "5ade00328dc42beddeb0b64f",
						"name": "Borradores",
						"precio": 26768,
						"cantidad": 1
					},
					{
						"_id": "5ade0032857033d837abebd7",
						"name": "Borradores",
						"precio": 16357,
						"cantidad": 1
					}
				]
			}
		];
	}
}

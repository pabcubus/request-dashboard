import { Injectable } from '@angular/core';

import { User } from '../interfaces/user';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class SessionService {
	logedIn:	Boolean = false;
	users:		User[] 	= [
		{
			id: 1,
			nombre: 'franco',
			apellido: 'garcia',
			usuario: 'fgarcia',
			password: '123',
			rol: 'admin',
			email: 'fgarcia@hotmail.com',
			departamento: {
				nombre: 'Compra',
				direccion: '658 Leonard Street, Brantleyville, Alaska'
			}
		},
		{
			id: 2,
			nombre: 'pablo',
			apellido: 'bassil',
			usuario: 'pbassil',
			password: '123',
			rol: 'operador',
			email: 'pbassil@hotmail.com',
			departamento: {
				nombre: 'Auditoria',
				direccion: '950 Farragut Place, Bannock, West Virginia'
			}
		},
		{
			id: 3,
			nombre: 'camilo',
			apellido: 'bassil',
			usuario: 'cbassil',
			password: '123',
			rol: 'operador',
			email: 'cbassil@hotmail.com',
			departamento: {
				nombre: 'Mercadeo',
				direccion: '854 Guider Avenue, Eden, Wyoming'
			}
		}
	];

	constructor() {
	}

	getLogedIn(): any {
		let observable = Observable.create(observer => {
			setTimeout(() => {
				observer.next(this.logedIn);
			}, 2000);

			setTimeout(() => {
				observer.next(this.logedIn);
			}, 4000);

			setTimeout(() => {
				observer.next(this.logedIn);
			}, 8000);

			setTimeout(() => {
				observer.complete();
			}, 10000);
		});

		return observable;
	}

	toggleLogedIn() {
		console.log('service toggled!');
		this.logedIn = !this.logedIn;
	}

	getUser(id:number):User{
		return this.users.find(function(element) {
			return element.id == id;
		});
	}
}

import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { HelperService } from './helper.service';
import { Router } from '@angular/router';

@Injectable()
export class SessionService {
	private logedIn:		Boolean = false;
	private currentUser:	User;
	private users:			User[] 	= [
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

	constructor(
		private _helper: HelperService,
		private router: Router
	) {
		this.setCurrentUser();
	}

	getUsers(){
		return this.users;
	}

	getUser(id:number):User{
		return this.users.find(function(element) {
			return element.id == id;
		});
	}

	getCurrentUser():User{
		return this.currentUser;
	}

	login(usuario:string, password:string):User{
		let user = this.users.find(function(element) {
			return (element.usuario == usuario && element.password == password);
		});

		this.currentUser = user ? user : null;

		this._helper.setLocalStorageKey('user', this.currentUser, true);

		return user;
	}

	logout(){
		this._helper.removeLocalStorageKey('user');
		this.currentUser = null;
		this.router.navigate(['/login']);
	}

	private setCurrentUser(){
		this.currentUser = this._helper.getLocalStorageKey('user', true);

		if (!this.currentUser) {
			this.router.navigate(['/login']);
		}
	}
}

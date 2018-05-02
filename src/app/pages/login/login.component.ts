import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	usuario:string	= '';
	password:string = '';

	constructor(
		private _session:SessionService,
		private router: Router
	) { }

	ngOnInit() {
	}

	login(){
		let user = this._session.login(this.usuario, this.password);

		if (user){
			this.router.navigate(['/home']);
		} else {
			alert('Usuario no encontrado. Verifique el usuario o la contraseña.');
		}
	}
}

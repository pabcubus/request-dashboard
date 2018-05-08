import { Component, OnInit } 	from '@angular/core';
import { SessionService } 		from '../../services/session.service';
import { User }					from '../../interfaces/user';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	constructor(
		public _session: SessionService
	) { }

	ngOnInit() {
	}

	get currentUser():User{
		return this._session.getCurrentUser();
	}

	logout() {
		this._session.logout();
	}
}

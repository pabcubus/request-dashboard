import { Component } 		from '@angular/core';
import { SessionService }	from './services/session.service';
import { User }				from './interfaces/user';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'app';

	constructor(
		public _session: SessionService
	) {
	}

	get currentUser():User{
		return this._session.getCurrentUser();
	}
}

import { Component } from '@angular/core';
import { SessionService } from './services/session.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'app';

	logedIn:Boolean = false;

	constructor(public _session: SessionService){
	}
}

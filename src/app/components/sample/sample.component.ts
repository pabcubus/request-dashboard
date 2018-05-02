import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'sample',
	templateUrl: './sample.component.html',
	styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
	@Input() input1:string;
	@Input() input2:string;

	constructor() { }

	ngOnInit() {
	}
}

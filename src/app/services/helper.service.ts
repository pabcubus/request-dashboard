import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {

	constructor() { }

	setLocalStorageKey(key:string, value:any, stringify:boolean){
		localStorage.setItem(key, (stringify ? JSON.stringify(value) : value));
	}

	getLocalStorageKey(key:string, parse:boolean):any{
		let value = (parse ? JSON.parse(localStorage.getItem(key)) : localStorage.getItem(key));
		return value;
	}
}

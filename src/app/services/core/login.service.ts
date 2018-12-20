import { Injectable } from '@angular/core';
import { HttpProvider } from './http.service';
import {environment as env} from '../../../environments/environment'
import { apiUrls } from '../../constants/urls';

/**
 * Class for the LoginService.
 * Functionality:handles login service.c
 * API calls:none
 */ 


@Injectable()
export class LoginService {


	constructor(private httpProvider: HttpProvider, private urls: apiUrls) {}
	getAccess( data) {
		console.log(env.url);
		let promise = new Promise((resolve, reject) => {
			this.httpProvider.doAsyncTask(env.url + this.urls.getAccessToken, "POST", data).subscribe(
				response => {
					if (response.status == 0) {
						resolve(response);
					} else {
						reject(response);
					}
				},
				error => {
					reject(error);
				}
			);
			
		});
		return promise;
	}
}

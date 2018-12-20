import { Injectable } from '@angular/core';
import { Headers, Http,Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/**
 * Class for the HttpProvider.
 * Functionality: it is core service handler.
 * API calls:none
 */

@Injectable()
export class HttpProvider {
	httpOptionsDoc;
	httpOptions;
	httpOptionsScan;
	httpOptionsFile;
	constructor(private http: Http, private router: Router,) { }

	doAsyncTask(url: string, httpmethod?: string, body?: any) {
			this.httpOptions = {
			headers: new Headers({
				'Content-Type': 'application/json',
				'Authorization': 'Bearer '+sessionStorage.getItem('session-token')
			})
		};
		let observable: Observable<Response>;
		if (!navigator.onLine) alert('No Network Connection');
		else {
			switch (httpmethod) {
				
				case 'GET':
					observable = this.http.get(url, this.httpOptions);
					break;

				case 'POST':
					observable = this.http.post(url, body, this.httpOptions);
					break;

				case 'PUT':
					observable = this.http.put(url, body, this.httpOptions);
					break;

				case 'DELETE':
					observable = this.http.delete(url, this.httpOptions);
					break;

				case 'PATCH':
					observable = this.http.patch(url, body, this.httpOptions);
					break;

				case 'HEAD':
					observable = this.http.head(url, this.httpOptions);
					break;
				default:
					observable = this.http.get(url, this.httpOptions);
					break;
			}

			return observable.map(response => this.handleResponse(response)).catch(error => this.handleError(error));
		}
	}

	private handleResponse(response: Response | any) {
		let timeNow:any  = (new Date()).getTime();
		sessionStorage.setItem('lastclear', timeNow);
		return response.json();
	}

	private async handleError(error: Response | any) {
		return Promise.reject(error);
	}
}


import { Injectable } from '@angular/core';
import { HttpProvider } from './http.service';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { environment as env } from '../../../environments/environment'
import { apiUrls } from '../../constants/urls';

/**
 * Class for the HttpProvider.
 * Functionality: it is core service handler.
 * API calls:none
 */

@Injectable()
export class DataService {
    constructor(private httpProvider: HttpProvider,  private urls: apiUrls) { }
    getCaseStudy() {
        let promise = new Promise((resolve, reject) => {
            this.httpProvider.doAsyncTask(env.url + this.urls.getCaseStudy, "GET").subscribe(
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
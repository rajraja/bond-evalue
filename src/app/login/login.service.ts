import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public apiUrl = '';
    constructor(public http: HttpClient) {

    }
    userAuthenticate(username, password) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl +'/auth', {username: username, password: password}).subscribe(data => {
                resolve(data);

                }, err => {
                    reject(err);
            });
        });
    };
}

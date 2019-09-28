import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = 'https://api-uat.unionbankph.com/partners/sb/customers/v1/oauth2/token';
  constructor(private http: HttpClient) {}

  sendGetRequest(){
    const headers = new HttpHeaders()
        .set('accept', 'text/html')
        .set('content-type', 'application/x-www-form-urlencoded')
        .set('x-ibm-client-id', 'fe741aa8-5bfe-433f-b2e5-1de645a418e7')
        .set('x-ibm-client-secret', 'M6iP6gM0gI1nL8fK2qM3fG2xS1lU6uT8oN6mU2eN0oB6fL3cP0');
        
        const body = {
          token_type: "bearer",
          access_token: "https://api-uat.unionbankph.com/partners/sb/customers/v1/oauth2/token",
          expires_in: 0,
          scope: "account_info",
          refresh_token: "https://www.getpostman.com/oauth2/callback"
          }
          
          // return this.http
          // .get(this.url, body, { headers: headers })
          // .subscribe(res => console.log(res));

        this.http.get('https://api-uat.unionbankph.com/partners/sb/customers/v1/oauth2/token' ,{headers:headers}).subscribe(res =>console.log(res));
       // this.http.get()
      }
}


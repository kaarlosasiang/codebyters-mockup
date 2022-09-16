import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  localhost_url = 'http://localhost:3000';
  host_url = 'https://my-json-server.typicode.com/kaarlosasiang/codebyters';

  constructor(private http: HttpClient) { }

  loginUser(path: string) {
    return this.http.get(this.host_url + path);
  }

  // registerUser(path: string, details: {}) {
  //   this.registerUserlocally(path, details);
  //   return this.http.post(this.host_url + path, details);
  // }

  registerUser(path: string, details: {}) {
    return this.http.post(this.localhost_url + path, details)
  }

  checkLogin() {
    let isLogin = localStorage.getItem('session_user');
    if (isLogin && isLogin != '') {
      return true;
    } else {
      return false;
    }
  }

  getUserDetails(path: string) {
    return this.http.get(this.host_url + path);
  }
}

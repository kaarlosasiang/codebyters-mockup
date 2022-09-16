import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  // host_url = 'http://localhost:3000';
  host_url = 'http://my-json-server.typicode.com/kaarlosasiang/codebyters';

  constructor(private http: HttpClient) {}

  loginUser(path: string) {
    return this.http.get(this.host_url + path);
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

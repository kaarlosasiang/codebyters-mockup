import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  localhost_url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  loginUser(path: string) {
    return this.http.get(this.localhost_url + path);
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
    return this.http.get(this.localhost_url + path);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login_details = {
    email: '',
    password: '',
  };

  constructor(
    private commonService: CommonService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const isLogout = this.route.snapshot.routeConfig?.path;

    if (isLogout === 'logout') {
      localStorage.removeItem('session_user');
      this.router.navigate(['/login']);
    }
  }

  login(data: { email: string; password: string }) {
    const path = '/users';
    this.commonService.loginUser(path).subscribe((res: any) => {
      // console.log(res);
      if (data.email !== '' || data.password !== '') {
        for (let i = 0; i < res.length; i++) {
          if (
            data.email === res[i].email &&
            data.password === res[i].password
          ) {
            console.log('email correct');
            localStorage.setItem('session_user', String(res[i].id));
            this.router.navigate(['/dashboard']);
            break;
          } else {
            console.log('wrong email');
          }
        }
      } else {
        console.log('empty');
      }
    });
  }
}

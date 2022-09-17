import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private commonService: CommonService) { }

  currentUser = {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    profile_img: '',
    node: 0,
    role: 0,
    points: 0,
    achievements: [],
  };

  node = { node_category: '', node_role: '' };

  ngOnInit(): void {
    if (this.commonService.checkLogin()) {
      const user_id = Number(localStorage.getItem('session_user'));
      if (user_id) {
        const path = '/users';
        this.commonService.getUserDetails(path).subscribe((res: any) => {
          for (let i = 0; i < res.length; i++) {
            if (user_id === res[i].id) {
              this.currentUser = res[i];
            } else {
              console.error("Error fetching user data");
            }
          }
          console.log(this.currentUser);
          this.commonService.loginUser("/nodes").subscribe((res: any) => {
            console.log(res);
            for (let i = 0; i < res.length; i++) {
              if (this.currentUser.node === res[i].id) {
                this.node.node_category = res[i].name;
                this.node.node_role = res[i].categories[this.currentUser.role];
              }
            }
            console.log(this.node);

          })
        });
      }
    }
  }
}

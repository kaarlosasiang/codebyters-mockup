import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUSerModel = {
    "id": 0,
    "firstname": "",
    "lastname": "",
    "email": "",
    "password": "",
    "profile_img": "",
    "node": 0,
    "role": 0,
    "points": 0,
    "achievements": []
  }

  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(data: any) {
    const path = "/users";
    let currentID = 0;
    if (data.firstname !== "" && data.lastname !== "" && data.email !== "" && data.password !== "" && data.re_enter_password !== "") {
      if (data.password === data.re_enter_password) {
        this.commonService.loginUser("/users").subscribe((res: any) => {
          for (let i = 0; i < res.length; i++) {
            if (res[i].id > currentID) {
              currentID++;
            }
          }

          this.newUSerModel = {
            "id": currentID + 1,
            "firstname": data.firstname,
            "lastname": data.lastname,
            "email": data.email,
            "password": data.password,
            "profile_img" : "assets/img/default-profile.jpg",
            "node": 0,
            "role": 0,
            "points": 0,
            "achievements": []
          };
          console.log(this.newUSerModel);
          this.commonService.registerUser(path, this.newUSerModel).subscribe((res: any) => {
            console.log(res);
            this.router.navigate(["login"])
          })
        })





      } else {
        alert("Password incorrect!")
      }

    } else {
      console.log("empty");

    }
  }

}

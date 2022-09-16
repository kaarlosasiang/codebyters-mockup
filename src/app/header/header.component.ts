import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLogin = false;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.isLogin = this.commonService.checkLogin();
  }
}

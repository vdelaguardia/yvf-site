import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public tabList: Array<string> = ['Home', 'My Story', 'Services', 'Programs'];

  constructor() {
    console.log(this.tabList[1]);
  }

  ngOnInit(): void {
  }

}

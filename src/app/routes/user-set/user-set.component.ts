import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-set',
  templateUrl: './user-set.component.html',
  styleUrls: ['./user-set.component.scss']
})
export class UserSetComponent implements OnInit {

  subItem=['My profile', 'Payment', 'Setting'];
  navSelect: any=[];
  subSelectItem = 0;

  constructor() { }

  ngOnInit() {
    this.navSelect[0] = "nav-select";
  }

  onClickSubNav(index){
    this.navSelect = [];
    this.subSelectItem = index;
    this.navSelect[index] = "nav-select";
  }

}

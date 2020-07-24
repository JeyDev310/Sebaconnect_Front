import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-nav',
  templateUrl: './project-nav.component.html',
  styleUrls: ['./project-nav.component.scss']
})
export class ProjectNavComponent implements OnInit {
  @Input() userInfo
  subItem=['Campaign', 'Payment', 'Files', 'Tasks', 'Project Status/Update']
  subSelectItem = 0;
  navSelect: any=[];
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

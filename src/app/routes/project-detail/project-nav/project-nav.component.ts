import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-nav',
  templateUrl: './project-nav.component.html',
  styleUrls: ['./project-nav.component.scss']
})
export class ProjectNavComponent implements OnInit {

  subItem=['Campaign', 'Payment', 'Files', 'Tasks', 'Project Status/Update']
  subSelectItem = 0;
  constructor() { }

  ngOnInit() {
  }
  onClickSubNav(index){
    this.subSelectItem = index;
  }
}

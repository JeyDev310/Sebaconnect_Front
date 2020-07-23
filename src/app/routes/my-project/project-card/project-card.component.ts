import { Component, OnInit, Input } from '@angular/core';
import { SCProjectModel } from '../../../model/project'
@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() project: SCProjectModel;
  constructor() { }

  ngOnInit() {
    console.log('this is project__________', this.project);
  }

}

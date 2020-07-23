import { Component, Input, OnInit } from '@angular/core';
import { SCMilestoneModel } from 'src/app/model/milestone';
@Component({
  selector: 'app-milestone-card',
  templateUrl: './milestone-card.component.html',
  styleUrls: ['./milestone-card.component.scss']
})
export class MilestoneCardComponent implements OnInit {

  @Input() milestone: SCMilestoneModel;

  constructor() { }

  ngOnInit() {
  }

}

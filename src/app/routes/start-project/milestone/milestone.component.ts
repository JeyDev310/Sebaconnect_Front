import { Component, OnInit } from '@angular/core';
import { SCMilestoneModel } from 'src/app/model/milestone';
@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.scss']
})

export class MilestoneComponent implements OnInit {

  newMilestone: SCMilestoneModel;
  newMilestones: SCMilestoneModel[] = [];
  title: string;
  description: string;
  deadline: any;
  price: number;
  id: number = 0;
  constructor() {
    // this.newMilestone = new SCMilestoneModel({});
   }

  ngOnInit() {
  }

  createMilestone(){
    this.newMilestone = new SCMilestoneModel({});
    this.newMilestone.id = this.id;
    this.newMilestone.title = this.title;
    this.newMilestone.description = this.description;
    this.newMilestone.deadline = this.deadline;
    this.newMilestone.price = this.price;
    this.newMilestones.push(this.newMilestone);
    console.log('this is newMilestone', this.id, this.newMilestones);
    this.id++
  }
}

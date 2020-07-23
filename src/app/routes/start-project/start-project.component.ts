import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-start-project',
  templateUrl: './start-project.component.html',
  styleUrls: ['./start-project.component.scss']
})
export class StartProjectComponent implements OnInit {

  private stepper: Stepper;

  next() {
    this.stepper.next();
  }

  onSubmit() {
    return false;
  }

  ngOnInit() {
    // this.stepper = new Stepper(document.querySelector('#stepper1'), {
    //   linear: false,
    //   animation: true
    // })

    // console.log('thsi is stepper', this.stepper);
  }

}

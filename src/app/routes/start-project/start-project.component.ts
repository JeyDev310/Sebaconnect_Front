import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-start-project',
  templateUrl: './start-project.component.html',
  styleUrls: ['./start-project.component.scss']
})
export class StartProjectComponent implements OnInit {

  private stepper: Stepper;
  pageNumber: number = 0;
  checkFlag: any = [];
  next() {
    this.stepper.next();
  }

  ngOnInit() {
    console.log('this is checkFlag', this.checkFlag[0]);
    // this.stepper = new Stepper(document.querySelector('#stepper1'), {
    //   linear: false,
    //   animation: true
    // })

    // console.log('thsi is stepper', this.stepper);
  }
  onPreview(){
    this.pageNumber--

  }
  onNext(){
    this.pageNumber++
  }
  onSubmit(){

  }
  toggle(e){
    console.log('this is e',e.source.value);
  }
}

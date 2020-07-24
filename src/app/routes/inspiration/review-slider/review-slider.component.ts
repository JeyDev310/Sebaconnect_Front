import { Component, OnInit,ViewChild, Input, ElementRef  } from "@angular/core";
import { reviewsObject } from './reviews-data';
@Component({
  selector: "app-review-slider",
  templateUrl: "./review-slider.component.html",
  styleUrls: ["./review-slider.component.scss"]
})

export class ReviewSliderComponent implements OnInit {

  @ViewChild("carousel", { static: false }) carousel: ElementRef | null = null;
  reviews = reviewsObject;
  active: number = 0;
  flag: false
  constructor() {

  }

  ngOnInit() {
  }
  gotoSenderNext(): any {
    this.active++
    if (this.active === this.reviews.length){ this.active =0 }

  }
  gotoSenderPrev(): any {
    this.active--
    if (this.active === -1){ this.active = this.reviews.length-1 }
  }


}

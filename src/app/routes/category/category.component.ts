import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { categoryObject } from './category-data';

declare var $: any;
declare var require: any;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, AfterViewInit{

  @ViewChild("myCarousel", { static: false }) myCarousel: ElementRef | null = null;

  categoryObject = categoryObject;
  constructor() { }

  name = 'Angular';

  ngAfterViewInit() {
    // console.log('this is carousel________', this.myCarousel)
    // // this.myCarousel.nativeElement.on("slide.bs.carousel", function(e) {
    // $("#myCarousel").on("slide.bs.carousel", function(e) {
    //   var $e = $(e.relatedTarget);
    //   var idx = $e.index();
    //   var itemsPerSlide = 3;
    //   var totalItems = $(".carousel-item").length;

    //   if (idx >= totalItems - (itemsPerSlide - 1)) {
    //     var it = (totalItems - idx*itemsPerSlide);
    //     for (var i = 0; i < it; i++) {
    //       // append slides to end
    //       if (e.direction == "left") {
    //         $(".carousel-item")
    //           .eq(i)
    //           .appendTo(".carousel-inner");
    //       } else {
    //         $(".carousel-item")
    //           .eq(0)
    //           .appendTo($(this).find(".carousel-inner"));
    //       }
    //     }
    //   }
    // });
  }

  ngOnInit() {

  }
  gotoSenderForm(cond: any = 1): any {


      if (this.myCarousel) {
        this.myCarousel.nativeElement.scrollIntoView({
        });
      }

  }

}

import { Component, OnInit } from '@angular/core';
import { categoryObject } from './category-data';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryObject = categoryObject;
  constructor() { }

  ngOnInit() {
  }
  name = 'Angular';

}

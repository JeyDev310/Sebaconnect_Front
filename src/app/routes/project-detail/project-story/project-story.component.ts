import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-story',
  templateUrl: './project-story.component.html',
  styleUrls: ['./project-story.component.scss']
})
export class ProjectStoryComponent implements OnInit {
  @Input() userInfo

  edigFlag: boolean = true
  oldOverView : string
  overView: string = "Flower industry is picking up quite quickly, with peak in online sales"
  overView1: string = "We're back at 90% of our normal volume, says Marco van Zijverden, CEO of Dutch Flower Group (DFG). With 33 individual companies, they supply flowers and plants to all distribution channels, importing wholesalers and the large-scale retail sector all over the world, and when looking at the past, present and future of the COVID-19 crisis, they notice that the flower industry is picking up quite quickly, with a current peak in online floral sales, he explained during the PMA Virtual Town Hall meeting* yesterday"

  constructor() { }

  ngOnInit() {
  }
  onEdit(){
    this.edigFlag = false;
    this.oldOverView = this.overView;
  }
  onCancel(){
    this.edigFlag = true;
    this.overView = this.oldOverView;
  }
  onSave(){
    this.edigFlag = true;
  }
}

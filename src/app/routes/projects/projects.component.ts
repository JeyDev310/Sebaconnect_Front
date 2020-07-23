import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { projectsObject } from './projects-data';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  category: string;
  projectsObject = projectsObject;
  project: any;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category');
    });
    console.log('this is category', this.category);
    projectsObject.forEach(project => {
      if (project.index === this.category){
        this.project = project;
      }
    });
  }

}

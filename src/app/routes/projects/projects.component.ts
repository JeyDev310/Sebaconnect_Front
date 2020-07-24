import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { projectsObject } from './projects-data';
import { AppService } from 'src/app/service/app.service';

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
    private _route: Router,
    private _appService: AppService
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
  onSelectProject(project){
    this._appService.onCurrentProject.next({'project':project, 'user':'client'});
    this._route.navigate(['/project-detail']);
  }

}

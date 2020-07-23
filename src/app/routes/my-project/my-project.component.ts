import { Component, OnInit } from '@angular/core';
import { MyProjectData } from './my-project-data';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/service/app.service';
import { SCProjectModel } from 'src/app/model/project';

@Component({
  selector: 'app-my-project',
  templateUrl: './my-project.component.html',
  styleUrls: ['./my-project.component.scss']
})
export class MyProjectComponent implements OnInit {

  public projects: Array<any> = MyProjectData;
  constructor(
    private _router: Router,
    private _appService: AppService
  ) {}

  ngOnInit() {
  }
  selectProject (project: SCProjectModel){
    this._router.navigate(['/project-detail']);
    this._appService.onCurrentProject.next(project);
  }

}

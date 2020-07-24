import { Component, OnInit } from '@angular/core';
import { AppService} from 'src/app/service/app.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { SCProjectModel } from 'src/app/model/project';
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  project: SCProjectModel
  userInfo: string
  edigFlag: boolean = true
  oldOverView : string
  overView: string
  private _unsubscribeAll: Subject<any>;
  constructor(
    private _appService: AppService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
    this._appService.onCurrentProject
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe(projectData => {
      this.project= projectData.project;
      this.userInfo = projectData.user;
      console.log('this is project!!!!!!!',projectData, this.project);
    });
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

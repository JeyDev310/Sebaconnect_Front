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
  private _unsubscribeAll: Subject<any>;
  constructor(
    private _appService: AppService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
    this._appService.onCurrentProject
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe(project => {
      this.project= project;
      console.log('this is project!!!!!!!', this.project);
    });
  }
}

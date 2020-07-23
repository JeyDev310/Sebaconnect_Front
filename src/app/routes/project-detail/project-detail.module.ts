import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDetailComponent } from './project-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectNavComponent } from './project-nav/project-nav.component';
import { ProjectStoryComponent } from './project-story/project-story.component';
import { ProjectPaymentComponent } from './project-payment/project-payment.component';
import { ProjectFileComponent } from './project-file/project-file.component';
import { ProjectTasksComponent } from './project-tasks/project-tasks.component';
import { ProjectStatusComponent } from './project-status/project-status.component'

const routes: Routes = [
  { path: '', component: ProjectDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    ProjectDetailComponent,
    ProjectNavComponent,
    ProjectStoryComponent,
    ProjectPaymentComponent,
    ProjectFileComponent,
    ProjectTasksComponent,
    ProjectStatusComponent,
  ],
  exports: [
      RouterModule
  ]
})
export class ProjectDetailModule { }

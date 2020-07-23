import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyProjectComponent } from './my-project.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { SharedModule } from 'src/app/shared/shared.module'

const routes: Routes = [
  { path: '', component: MyProjectComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    MyProjectComponent,
    ProjectCardComponent
  ],
  exports: [
      RouterModule
  ],

})
export class MyProjectModule { }

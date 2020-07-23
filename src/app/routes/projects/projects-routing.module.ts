import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  { path: 'technology', component: ProjectsComponent },
  { path: 'retail_store', component: ProjectsComponent },
  { path: 'wholesale', component: ProjectsComponent },
  { path: 'service', component: ProjectsComponent },
  { path: 'education', component: ProjectsComponent },
  { path: 'transportation', component: ProjectsComponent },
  { path: 'agriculture', component: ProjectsComponent },
  { path: 'communication', component: ProjectsComponent },
  { path: 'product', component: ProjectsComponent },
  { path: 'restaurant', component: ProjectsComponent },
  { path: 'tourism', component: ProjectsComponent },
  { path: 'fashion', component: ProjectsComponent },
  { path: 'non_profit_project', component: ProjectsComponent },
  { path: 'funder_projects', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartProjectComponent } from './start-project.component';
import { FundingComponent } from './funding/funding.component';
import { MilestoneComponent } from './milestone/milestone.component';
const routes: Routes = [
  { path: '', component: StartProjectComponent },
  { path: 'funding', component: FundingComponent },
  { path: 'milestone', component: MilestoneComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartProjectRoutingModule { }

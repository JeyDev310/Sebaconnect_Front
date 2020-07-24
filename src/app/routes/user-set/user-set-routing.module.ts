import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSetComponent } from './user-set.component';
const routes: Routes = [
  { path: '', component: UserSetComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSetRoutingModule {



 }

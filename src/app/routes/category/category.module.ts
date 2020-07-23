
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryCardComponent } from './category-card/category-card.component'

const routes: Routes = [
  { path: '', component: CategoryComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [
    CategoryComponent,
    CategoryCardComponent,
  ],
  exports: [
      RouterModule
  ],

})
export class CategoryModule { }

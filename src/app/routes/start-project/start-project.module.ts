import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCropperModule } from 'ng2-img-cropper';
import { FormsModule } from '@angular/forms';
import { StartProjectRoutingModule } from './start-project-routing.module';
import { StartProjectComponent } from './start-project.component';
import { BasicComponent } from './basic/basic.component';
import { CropperComponent } from './cropper/cropper.component';
import { FundingComponent } from './funding/funding.component';
import { MilestoneComponent } from './milestone/milestone.component';
import { MilestoneCardComponent } from './milestone/milestone-card/milestone-card.component';
@NgModule({
  declarations: [
    StartProjectComponent,
    BasicComponent,
    CropperComponent,
    FundingComponent,
    MilestoneComponent,
    MilestoneCardComponent
  ],
  imports: [
    CommonModule,
    StartProjectRoutingModule,
    FormsModule,
    ImageCropperModule
  ]
})
export class StartProjectModule { }

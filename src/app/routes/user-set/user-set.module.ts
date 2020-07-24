import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSetRoutingModule } from './user-set-routing.module';
import { UserSetComponent } from './user-set.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReviewCardComponent } from './profile/review-card/review-card.component';
import { PaymentComponent } from './payment/payment.component';
import { AccountSetComponent } from './account-set/account-set.component';
@NgModule({
  declarations: [UserSetComponent, ProfileComponent, ReviewCardComponent, PaymentComponent, AccountSetComponent],
  imports: [
    CommonModule,
    UserSetRoutingModule,
    SharedModule
  ],

})
export class UserSetModule { }

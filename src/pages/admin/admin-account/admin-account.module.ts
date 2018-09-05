import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminAccountPage } from './admin-account';

@NgModule({
  declarations: [
    AdminAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminAccountPage),
  ],
})
export class AdminAccountPageModule {}

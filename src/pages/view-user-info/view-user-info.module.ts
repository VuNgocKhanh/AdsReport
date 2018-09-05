import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewUserInfoPage } from './view-user-info';

@NgModule({
  declarations: [
    ViewUserInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewUserInfoPage),
  ],
})
export class ViewUserInfoPageModule {}

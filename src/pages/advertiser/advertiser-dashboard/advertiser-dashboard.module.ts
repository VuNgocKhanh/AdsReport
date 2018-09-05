import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdvertiserDashboardPage } from './advertiser-dashboard';

@NgModule({
  declarations: [
    AdvertiserDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(AdvertiserDashboardPage),
  ],
})
export class AdvertiserDashboardPageModule {}

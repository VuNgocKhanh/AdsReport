import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AppModuleProvider } from '../providers/app-module/app-module';
import { ConfigTsProvider } from '../providers/config-ts/config-ts';
import { ConfigProvider } from '../providers/config/config';
import { HttpProvider } from '../providers/http/http';
import { StorageProvider } from '../providers/storage/storage';
import { AppCmdProvider } from '../providers/app-cmd/app-cmd';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppModuleProvider,
    ConfigTsProvider,
    ConfigProvider,
    HttpProvider,
    StorageProvider,
    AppCmdProvider
  ]
})
export class AppModule {}

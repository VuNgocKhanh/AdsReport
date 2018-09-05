import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { DeviceManager } from '../../providers/core/device-manager';
import { AppModuleProvider } from '../../providers/app-module/app-module';
import { Paramskey } from '../../providers/app-cmd/app-paramskey';
import { UserInfo } from '../../providers/app-class/userInfo';
import { ConstantManager, UserRole } from '../../providers/app-module/app-constant';

/**
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

  mUserInfo: UserInfo = new UserInfo();

  constructor(
    public mAppModule: AppModuleProvider,
    public mPlatform: Platform,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.mPlatform.ready().then(() => {
      this.onPlatformReady();
    });
  }

  onPlatformReady() {
    DeviceManager.getInstance().setInMobileDevice(!(this.mPlatform.is('core') || this.mPlatform.is('mobileweb')));
    if (DeviceManager.getInstance().isInMobileDevice()) {
      this.mAppModule.getHttpClient().setUseNativeHttp(true);
      DeviceManager.getInstance().setPlatform(this.mPlatform.is("android") ? 1 : 2);
    }
    this.doLoadAppConfig();
  }

  doLoadAppConfig() {
    this.mAppModule._LoadAppConfig().then(() => {
      this.onLoadAppConfigSucess();
    }).catch((err) => {
      this.mAppModule.log("error" + err);

    })
  }

  onLoadAppConfigSucess() {
    this.mAppModule.getStorageController().getDataFromStorage(Paramskey.USER_INFO).then((data) => {
      if (data) {
        this.mUserInfo.parseJSON(JSON.stringify(data));
        this.mAppModule.getHttpClient().setAccessKey(this.mUserInfo.accessKey);
        this.doLogin();
      } else {
        this.goToLoginPage();
      }
    }).catch((err) => {
      this.mAppModule.log("error" + err);
    })
  }

  goToLoginPage() {
    this.navCtrl.setRoot("LoginPage");
  }

  doLogin() {
    this.mAppModule.getHttpClient().login().then((respone) => {
      if (respone) {
        if (respone[Paramskey.STATUS] == 1) {
          this.onLoginSucess(respone);
        } else {
          this.mAppModule.log("Login error ..." + respone[Paramskey.MESSAGE]);
        }
      }
    }).catch(err => {
      this.mAppModule.log("Login error ..." + err);
    })
  }

  onLoginSucess(respone) {
    this.mAppModule.getUser().parseData(respone);
    this.navCtrl.setRoot(this.mAppModule.getRootPage());
  }

}

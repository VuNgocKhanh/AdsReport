import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppModuleProvider } from '../../providers/app-module/app-module';
import { UserInfo } from '../../providers/app-class/userInfo';
import { Paramskey } from '../../providers/app-cmd/app-paramskey';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string = "";
  password: string = "";

  constructor(
    public mAppModule: AppModuleProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  login() {
    this.mAppModule.getHttpClient().requetGetAccessKey(this.username, this.password).then((respone) => {
      if (respone) {
        this.mAppModule.log("respone get accesskey..." + respone);
        if (respone.status == 1) {
          this.onGetAccessKeySucess(respone);
        } else {
          this.mAppModule.log("respone get accesskey error..." + respone.message);
        }
      }
    }).catch((err) => {
      this.mAppModule.log("error get accesskey ...");
    });
  }

  onGetAccessKeySucess(respone) {
    let newUserInfo = new UserInfo();
    newUserInfo.userName = this.username;
    newUserInfo.password = this.password;
    newUserInfo.accessKey = respone[Paramskey.ACCESS_KEY];
    this.mAppModule.getStorageController().saveDataToStorage(Paramskey.USER_INFO, JSON.stringify(newUserInfo)).then(() => {
      this.onSaveDataSucess();
    }).catch((err) => {
      this.mAppModule.log(err);
    });
  }

  onSaveDataSucess() {
    this.navCtrl.setRoot("LoadingPage");
  }
}

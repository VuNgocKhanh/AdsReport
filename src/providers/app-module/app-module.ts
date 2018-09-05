import { Injectable } from '@angular/core';
import { AppHttpClient } from '../http/app-http-client';
import { Http } from '@angular/http';
import { HTTP } from '@ionic-native/http';
import { Config } from '../config/config';
import { Platform } from 'ionic-angular';
import { StorageController } from '../core/storage';
import { Storage } from '@ionic/storage';
import { User } from '../app-class/user';

/*
  Generated class for the AppModuleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppModuleProvider {

  private mUser: User = new User();

  private mAppHttpClient: AppHttpClient;
  private mAppConfig : Config;
  private mStorageController: StorageController;

  constructor(
    public mStorage: Storage,
    public mPlatform: Platform,
    public mAngularHttp: Http,
    public mNativeHttp: HTTP,
  ) {
    this.mAppHttpClient = new AppHttpClient();
    this.mAppConfig = new Config();
    this.mStorageController.setStorage(this.mStorage);
  }

  public getRootPage(): string{
    if(this.mAppConfig.hasData()){
      if("rootPage" in this.mAppConfig.mData){
        return this.mAppConfig.get("rootPage")[this.mUser.getRole()];
      }
    }
    return "LoadingPage";
  }

  public getUser(): User{
    return this.mUser;
  }

  public getStorageController(): StorageController{
    return this.mStorageController;
  }

  public getAppConfig(): Config{
    return this.mAppConfig;
  }

  public getHttpClient(): AppHttpClient {
    return this.mAppHttpClient;
  }

  public _LoadAppConfig() {
    this.getHttpClient().createClient(this.mAngularHttp, this.mNativeHttp);
    return new Promise((resolve, reject) => {
      if (this.getAppConfig().hasData()) {
        return resolve();
      } else {
        this.getHttpClient().getAngularHttp().request("assets/config/config.json").subscribe(
          response => {
            let dataObject = response.json();
            if (dataObject.config) {
              if (dataObject.config.get_config) {
                this.mPlatform.ready().then(() => {
                  if (this.mPlatform.platforms().indexOf("android") && dataObject.config.android) {
                    this.getHttpClient().getAngularHttp().request(dataObject.config.android).subscribe((androidRes) => {
                      this.onResponseConfig(androidRes.json());
                      return resolve();
                    }, error => {
                      this.onResponseConfig(dataObject);
                      return resolve();
                    })
                  }
                  if (this.mPlatform.platforms().indexOf("ios") && dataObject.config.ios) {
                    this.getHttpClient().getAngularHttp().request(dataObject.config.ios).subscribe((iosRes) => {
                      this.onResponseConfig(iosRes.json());
                      return resolve();
                    }, error => {
                      this.onResponseConfig(dataObject);
                      return resolve();
                    })
                  }
                })
              } else {
                this.onResponseConfig(dataObject);
                return resolve();
              }
            }

          },
          error => {
            return reject();
          }
        );
      }
    });
  }

  onResponseConfig(dataObject){
    this.getHttpClient().setData(dataObject);
  }
  
  log(data){
    console.log(data);
  }
}

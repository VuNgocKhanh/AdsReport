import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppHttpClient } from '../http/app-http-client';

/*
  Generated class for the AppModuleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppModuleProvider {
  mAppHttpClient: AppHttpClient = new AppHttpClient();
  constructor(public http: HttpClient) {

  }

  public getHttpClient(): AppHttpClient {
    return this.mAppHttpClient;
  }
}

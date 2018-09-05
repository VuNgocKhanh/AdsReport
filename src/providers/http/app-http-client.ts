
import { Headers } from "@angular/http";
import { HttpClient } from '../core/http/http-client';
// import { AppParamsKey } from "./app-paramskey";
import { AppCmd } from "../app-cmd/app-cmd";
import { ParamBuilder } from "../core/http/param-builder";
// import { APP_LINK, APP_KEYS } from "../app-constant";
export class AppHttpClient extends HttpClient {
    mUrl = "";
    mClientKey = "8c24516c23b611420defccf253598412";
    mToken: string = "";

    mAccessToken: string = "";

    constructor() {
        super();
    }
    public setData(data) {
        super.setData(data);
        console.log(JSON.stringify(data));
        if (data) {
            if ('host' in data) {
                let host = data[data['host']];
                this.mUrl = host.url;
                this.setDebugEnable(host['debug']);
            }
        }
    }

    public setAdminAccessToken(adminAccessToken: string) {
        this.mAccessToken = adminAccessToken;
    }

    public getAdminAccessToken(): string {
        return this.mAccessToken;
    }

    createHeaders() {
        if (this.mUseNativeHttp) {
            this.mNativeHttp.setHeader(this.mUrl, 'client_key', this.mClientKey);
            this.mNativeHttp.setHeader(this.mUrl, 'Content-type', 'application/json; charset=utf-8');
        } else {
            this.mAngularHeader = new Headers({
                client_key: this.mClientKey,
                content_type: 'application/json; charset=utf-8'
            });
        }
    }


}
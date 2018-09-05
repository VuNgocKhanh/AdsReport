
import { Headers } from "@angular/http";
import { HttpClient } from '../core/http/http-client';
import { AppCmd } from "../app-cmd/app-cmd";
import { ParamBuilder } from "../core/http/param-builder";

// import {Md5} from 'ts-md5/dist/md5';
import {Md5} from "md5-typescript";

export class AppHttpClient extends HttpClient {
    mUrl = "";
    mClientKey = "8c24516c23b611420defccf253598412";
    // mToken: string = "";

    mAccessKey: string = "";

    constructor() {
        super();
    }

    public setAccessKey(accessKey: string) {
        this.mAccessKey = accessKey;
    }

    public getAccessKey(): string{
        return this.mAccessKey;
    }

    public setData(data) {
        super.setData(data);
        console.log(JSON.stringify(data));
        if (data) {
            if ('http' in data) {
                let http = data['http'];
                console.log(http);

                this.mUrl = http[http["api_server"]].host;
                
                this.mClientKey = http["client_key"];
                console.log(this.mClientKey);
                
                this.setDebugEnable(http['debug']);
            }
        }
    }


    createHeaders() {
        if (this.mUseNativeHttp) {
            this.mNativeHttp.setHeader(this.mUrl, 'X-Access-Key', this.mAccessKey);
            this.mNativeHttp.setHeader(this.mUrl, 'client_key', this.mClientKey);
            this.mNativeHttp.setHeader(this.mUrl, 'Content-type', 'application/json; charset=utf-8');
        } else {
            this.mAngularHeader = new Headers({
                x_access_key: this.mAccessKey,
                client_key: this.mClientKey,
                content_type: 'application/json; charset=utf-8'
            });
        }
    }

    public requetGetAccessKey(userName: string, password: string): Promise<any> {
        return this.requestPost(this.mUrl + AppCmd.USER_ACCESSKEY_GET,
            ParamBuilder.builder()
                .add("user_name", userName)
                .add("password", password)
                .add("sign", Md5.init(userName + password + this.mClientKey))
        );
    }

    public login(){
        this.createHeaders();
        return this.requestPost(this.mUrl + AppCmd.USER_LOGIN,
            ParamBuilder.builder()
            .add("sign", this.mAccessKey + this.mClientKey)
        );
    }


}
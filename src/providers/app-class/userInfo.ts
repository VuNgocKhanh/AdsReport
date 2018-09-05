export class UserInfo{
    userName: string = "";
    password: string = "";
    accessKey: string = "";

    constructor(){}

    parseJSON(data){
        if("userName" in data) this.userName = data.userName;
        if("password" in data) this.password = data.password;
        if("accessKey" in data) this.accessKey = data.accessKey;
    }
}
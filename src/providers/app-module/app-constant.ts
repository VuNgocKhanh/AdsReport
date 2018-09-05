export class UserRole {
    public static ROLE_ADMINISTRATOR: string = "ROLE_ADMINISTRATOR";
    public static ROLE_OPERATOR: string = "ROLE_OPERATOR";
    public static ROLE_ADVERTISER: string = "ROLE_ADVERTISER";
    constructor(){}
}

export class ConstantManager {
    public static _instance: ConstantManager = null;

    public static getInstance(): ConstantManager {
        if (this._instance == null) {
            this._instance = new ConstantManager();
        }
        return this._instance;
    }

   
}
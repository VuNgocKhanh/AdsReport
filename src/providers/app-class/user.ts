export class User{
    private userID: number = -1;

    private userName: string = "";

    private fullName: string = "";

    private passWord : string = "";

    private email: string = "";

    private phone: string = "";

    private company: string = "";

    private role: string = "";

    private status : number = -1;

    constructor(data?:any){
        if(data){
            this.parseData(data);
        }
    }
    parseData(data){
        if("id" in data) this.setUserID(data.id);
        if("user_name" in data) this.setUserName(data.user_name);
        if("full_name" in data) this.setFullName(data.full_name);
        if("email" in data) this.setEmail(data.email);
        if("phone" in data) this.setPhone(data.phone);
        if("company" in data) this.setCompany(data.company);
        if("role" in data) this.setRole(data.role);
        if("status" in data) this.setStatus(data.status);
    }

    public getUserID() : number {
        return this.userID;
    }

    public setUserID(userID : number) {
        this.userID = userID;
    }

    public getUserName() : string {
        return this.userName;
    }

    public setUserName(userName : string) {
        this.userName = userName;
    }

    public getFullName() : string {
        return this.fullName;
    }

    public setFullName(fullName : string) {
        this.fullName = fullName;
    }

    public getPassWord() : string {
        return this.passWord;
    }

    public setPassWord(passWord : string) {
        this.passWord = passWord;
    }

    public getEmail() : string {
        return this.email;
    }

    public setEmail(email : string) {
        this.email = email;
    }

    public getPhone() : string {
        return this.phone;
    }

    public setPhone(phone : string) {
        this.phone = phone;
    }

    public getCompany() : string {
        return this.company;
    }

    public setCompany(company : string) {
        this.company = company;
    }

    public getRole() : string {
        return this.role;
    }

    public setRole(role : string) {
        this.role = role;
    }

    public getStatus() : number {
        return this.status;
    }

    public setStatus(status : number) {
        this.status = status;
    }
}
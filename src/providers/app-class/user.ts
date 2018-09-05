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
        if(data.id) this.userID = data.id;
        if(data.user_name) this.userName = data.user_name;
        if(data.full_name) this.fullName = data.full_name;
        if(data.email) this.email = data.email;
        if(data.phone) this.phone = data.phone;
        if(data.company) this.company = data.company;
        if(data.role) this.role = data.role;
        if(data.status) this.status = data.status;
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
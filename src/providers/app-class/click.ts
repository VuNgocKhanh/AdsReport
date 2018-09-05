
class Click {
    private click : number = 0;

    private time : string = "";

    private count : number = 0;

    private status : number = -1;

    constructor(data?: any){
        if(data){
            this.parseData(data);
        }
    }

    parseData(data){
        if(data.click) this.setClick(data.click);
        if(data.time) this.setTime(data.time);
        if(data.count) this.setCount(data.count);
        if(data.status) this.setStatus(data.status);
    }

    public getClick() : number {
        return this.click;
    }

    public setClick(click : number) {
        this.click = click;
    }

    public getTime() : string {
        return this.time;
    }

    public setTime(time : string) {
        this.time = time;
    }

    public getCount() : number {
        return this.count;
    }

    public setCount(count : number) {
        this.count = count;
    }

    public getStatus() : number {
        return this.status;
    }

    public setStatus(status : number) {
        this.status = status;
    }
}
Click["__class"] = "Click";




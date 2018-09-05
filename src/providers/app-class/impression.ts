
class Impression {
    private impression : number = 0;

    private time : string = "";

    private count : number = 0;

    private status : number = -1;

    constructor(data?: any){
        if(data){
            this.parseData(data);
        }
    }

    parseData(data){
        if("impression" in data) this.setImpression(data.impression);
        if("time" in data) this.setTime(data.time);
        if("count" in data) this.setCount(data.count);
        if("status" in data) this.setStatus(data.status);
    }

    public getImpression() : number {
        return this.impression;
    }

    public setImpression(impression : number) {
        this.impression = impression;
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





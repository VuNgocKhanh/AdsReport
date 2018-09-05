
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
        if(data.impression) this.setImpression(data.impression);
        if(data.time) this.setTime(data.time);
        if(data.count) this.setCount(data.count);
        if(data.status) this.setStatus(data.status);
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





export class AppDetail {
    private appID : number = -1;

    private name : string = "";

    private description : string = "";

    private link : string = "";

    private time : string = "";

    private status : number = -1;

    private runningCampaign : number = -1;

    private totalCampaign : number = -1;

    constructor(data?: any){
        this.parseData(data);
    }

    parseData(data){
        if("id" in data) this.setAppID(data.id);
        if("name" in data) this.setName(data.name);
        if("des" in data) this.setDescription(data.des);
        if("link" in data) this.setLink(data.link);
        if("time" in data) this.setTime(data.time);
        if("running_campaign" in data) this.setRunningCampaign(data.running_campaign);
        if("total_campaign" in data) this.setTotalCampaign(data.total_campaign);
        if("status" in data) this.setStatus(data.status);
    }

    public getAppID() : number {
        return this.appID;
    }

    public setAppID(appID : number) {
        this.appID = appID;
    }

    public getName() : string {
        return this.name;
    }

    public setName(name : string) {
        this.name = name;
    }

    public getDescription() : string {
        return this.description;
    }

    public setDescription(description : string) {
        this.description = description;
    }

    public getLink() : string {
        return this.link;
    }

    public setLink(link : string) {
        this.link = link;
    }

    public getTime() : string {
        return this.time;
    }

    public setTime(time : string) {
        this.time = time;
    }

    public getStatus() : number {
        return this.status;
    }

    public setStatus(status : number) {
        this.status = status;
    }

    public getRunningCampaign() : number {
        return this.runningCampaign;
    }

    public setRunningCampaign(runningCampaign : number) {
        this.runningCampaign = runningCampaign;
    }

    public getTotalCampaign() : number {
        return this.totalCampaign;
    }

    public setTotalCampaign(totalCampaign : number) {
        this.totalCampaign = totalCampaign;
    }
}
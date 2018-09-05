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
        if(data.id) this.setAppID(data.id);
        if(data.name) this.setName(data.name);
        if(data.des) this.setDescription(data.des);
        if(data.link) this.setLink(data.link);
        if(data.time) this.setTime(data.time);
        if(data.running_campaign) this.setRunningCampaign(data.running_campaign);
        if(data.total_campaign) this.setTotalCampaign(data.total_campaign);
        if(data.status) this.setStatus(data.status);
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
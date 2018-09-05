
class Campaign {
    private campaignID : number = -1;

    private appId : number = -1;

    private name : string = "";

    private impressions : number = 0;

    private clicks : number = 0;

    private priority : number = -1;

    private weight : number = -1;

    private targetImpressions : number = -1;

    private targetClicks : number = -1;

    private updateTime : string = "";

    private block : number = -1;

    private comments : string = "";

    private status : number = -1;

    private activeTime : string = "";

    private expireTime : string = "";

    private type : number = -1;

    private location : string = "";

    constructor(data?: any){
        if(data){
            this.parseData(data);
        }
    }

    parseData(data){
        if("id" in data) this.setCampaignID(data.id);
        if("app_id" in data) this.setAppId(data.app_id);
        if("name" in data) this.setName(data.name);
        if("impressions" in data) this.setImpressions(data.impressions);
        if("clicks" in data) this.setClicks(data.clicks);
        if("priority" in data) this.setPriority(data.priority);
        if("weight" in data) this.setWeight(data.weight);
        if("target_impression" in data) this.setTargetImpressions(data.target_impression);
        if("target_click" in data) this.setTargetClicks(data.target_click);
        if("updated_time" in data) this.setUpdateTime(data.updated_time);
        if("block" in data) this.setBlock(data.block);
        if("comments" in data) this.setComments(data.comments);
        if("status" in data) this.setStatus(data.status);
        if("activate_time" in data) this.setActiveTime(data.activate_time);
        if("expireTime" in data) this.setExpireTime(data.expireTime);
        if("location" in data) this.setLocation(data.location);
        if("type" in data) this.setType(data.type);
    }

    public getCampaignID() : number {
        return this.campaignID;
    }

    public setCampaignID(campaignID : number) {
        this.campaignID = campaignID;
    }

    public getAppId() : number {
        return this.appId;
    }

    public setAppId(appId : number) {
        this.appId = appId;
    }

    public getName() : string {
        return this.name;
    }

    public setName(name : string) {
        this.name = name;
    }

    public getImpressions() : number {
        return this.impressions;
    }

    public setImpressions(impressions : number) {
        this.impressions = impressions;
    }

    public getClicks() : number {
        return this.clicks;
    }

    public setClicks(clicks : number) {
        this.clicks = clicks;
    }

    public getPriority() : number {
        return this.priority;
    }

    public setPriority(priority : number) {
        this.priority = priority;
    }

    public getWeight() : number {
        return this.weight;
    }

    public setWeight(weight : number) {
        this.weight = weight;
    }

    public getTargetImpressions() : number {
        return this.targetImpressions;
    }

    public setTargetImpressions(targetImpressions : number) {
        this.targetImpressions = targetImpressions;
    }

    public getTargetClicks() : number {
        return this.targetClicks;
    }

    public setTargetClicks(targetClicks : number) {
        this.targetClicks = targetClicks;
    }

    public getUpdateTime() : string {
        return this.updateTime;
    }

    public setUpdateTime(updateTime : string) {
        this.updateTime = updateTime;
    }

    public getBlock() : number {
        return this.block;
    }

    public setBlock(block : number) {
        this.block = block;
    }

    public getComments() : string {
        return this.comments;
    }

    public setComments(comments : string) {
        this.comments = comments;
    }

    public getStatus() : number {
        return this.status;
    }

    public setStatus(status : number) {
        this.status = status;
    }

    public getActiveTime() : string {
        return this.activeTime;
    }

    public setActiveTime(activeTime : string) {
        this.activeTime = activeTime;
    }

    public getExpireTime() : string {
        return this.expireTime;
    }

    public setExpireTime(expireTime : string) {
        this.expireTime = expireTime;
    }

    public getType() : number {
        return this.type;
    }

    public setType(type : number) {
        this.type = type;
    }

    public getLocation() : string {
        return this.location;
    }

    public setLocation(location : string) {
        this.location = location;
    }
}

export class CampaignInApp extends Campaign{
    private appName : string = "";
    constructor(data?:any){
        super();
        if(data.app_name) this.setAppName(data.app_name);
    }

    public getAppName(): string{
        return this.appName;
    }

    public setAppName(appName: string){
        this.appName = appName;
    }
}




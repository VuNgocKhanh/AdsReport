class Unit {
    private id : number = -1;

    private title : string = "";

    private bannerType : string = "";

    private platform : string = "";

    private location : string = "";

    private advName : string = "";

    private advProtext1 : string = "";

    private advProtext2 : string = "";

    private url : string = "";

    private timeStart : string = "";

    private status : number = -1;

    constructor(data?:any){
        if(data){
            this.parseData(data);
        }
    }

    parseData(data){
        if(data.id) this.setId(data.id);
        if(data.title) this.setTitle(data.title);
        if(data.banner_type) this.setBannerType(data.banner_type);
        if(data.status) this.setStatus(data.status);
        if(data.platform) this.setPlatform(data.platform);
        if(data.location) this.setLocation(data.location);
        if(data.adv_name) this.setAdvName(data.adv_name);
        if(data.adv_protext_1) this.setAdvProtext1(data.adv_protext_1);
        if(data.adv_protext_2) this.setAdvProtext2(data.adv_protext_2);
        if(data.url) this.setUrl(data.url);
        if(data.time_start) this.setTimeStart(data.time_start);
    }

    public getId() : number {
        return this.id;
    }

    public setId(id : number) {
        this.id = id;
    }

    public getTitle() : string {
        return this.title;
    }

    public setTitle(title : string) {
        this.title = title;
    }

    public getBannerType() : string {
        return this.bannerType;
    }

    public setBannerType(bannerType : string) {
        this.bannerType = bannerType;
    }

    public getPlatform() : string {
        return this.platform;
    }

    public setPlatform(platform : string) {
        this.platform = platform;
    }

    public getLocation() : string {
        return this.location;
    }

    public setLocation(location : string) {
        this.location = location;
    }

    public getAdvName() : string {
        return this.advName;
    }

    public setAdvName(advName : string) {
        this.advName = advName;
    }

    public getAdvProtext1() : string {
        return this.advProtext1;
    }

    public setAdvProtext1(advProtext1 : string) {
        this.advProtext1 = advProtext1;
    }

    public getAdvProtext2() : string {
        return this.advProtext2;
    }

    public setAdvProtext2(advProtext2 : string) {
        this.advProtext2 = advProtext2;
    }

    public getUrl() : string {
        return this.url;
    }

    public setUrl(url : string) {
        this.url = url;
    }

    public getTimeStart() : string {
        return this.timeStart;
    }

    public setTimeStart(timeStart : string) {
        this.timeStart = timeStart;
    }

    public getStatus() : number {
        return this.status;
    }

    public setStatus(status : number) {
        this.status = status;
    }
}
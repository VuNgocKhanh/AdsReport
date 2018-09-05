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
        if("id" in data) this.setId(data.id);
        if("title" in data) this.setTitle(data.title);
        if("banner_type" in data) this.setBannerType(data.banner_type);
        if("status" in data) this.setStatus(data.status);
        if("platform" in data) this.setPlatform(data.platform);
        if("location" in data) this.setLocation(data.location);
        if("adv_name" in data) this.setAdvName(data.adv_name);
        if("adv_protext_1" in data) this.setAdvProtext1(data.adv_protext_1);
        if("adv_protext_2" in data) this.setAdvProtext2(data.adv_protext_2);
        if("url" in data) this.setUrl(data.url);
        if("time_start" in data) this.setTimeStart(data.time_start);
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
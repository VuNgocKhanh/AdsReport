
class Media {
    private mediaID : number = -1;

    private contentType : string = "";

    private storageType : string = "";

    private url : string = "";

    private link : string = "";

    private elementType : number = -1;

    private status : number = -1;

    constructor(data?: any){
        if(data){
            this.parseData(data);
        }
    }

    parseData(data){
        if("id" in data) this.setMediaID(data.id);
        if("content_type" in data) this.setContentType(data.content_type);
        if("storage_type" in data) this.setStorageType(data.storage_type);
        if("url" in data) this.setUrl(data.url);
        if("link" in data) this.setLink(data.link);
        if("element_type" in data) this.setElementType(data.element_type);
        if("status" in data) this.setStatus(data.status);
    }

    public getMediaID() : number {
        return this.mediaID;
    }

    public setMediaID(mediaID : number) {
        this.mediaID = mediaID;
    }

    public getContentType() : string {
        return this.contentType;
    }

    public setContentType(contentType : string) {
        this.contentType = contentType;
    }

    public getStorageType() : string {
        return this.storageType;
    }

    public setStorageType(storageType : string) {
        this.storageType = storageType;
    }

    public getUrl() : string {
        return this.url;
    }

    public setUrl(url : string) {
        this.url = url;
    }

    public getLink() : string {
        return this.link;
    }

    public setLink(link : string) {
        this.link = link;
    }

    public getElementType() : number {
        return this.elementType;
    }

    public setElementType(elementType : number) {
        this.elementType = elementType;
    }

    public getStatus() : number {
        return this.status;
    }

    public setStatus(status : number) {
        this.status = status;
    }
}

export class MediaInUnit extends Media{
    private unitID : number = -1; 
    constructor(){
        super();
    }

    public getUnitId() : number {
        return this.unitID;
    }

    public setUnitId(unitID : number) {
        this.unitID = unitID;
    }
}





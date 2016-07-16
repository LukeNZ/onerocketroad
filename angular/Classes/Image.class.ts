export class Image {
    public id: number;
    public filename: string;
    public thumbname: string;
    public summary: string;
    public attribution: string;
    public size: number;
    public color: string;
    public createdAt: Date;
    public updatedAt: Date;


    constructor(id: number, filename: string, thumbname: string, summary: string, attribution: string,
                size: number, color: string, createdAt: Date, updatedAt: Date) {
        this.id = id;
        this.filename = filename;
        this.thumbname = thumbname;
        this.summary = summary;
        this.attribution = attribution;
        this.size = size;
        this.color = color;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public getFileUrl() : string {
        return '/uploads/' + this.filename;
    }

    public getThumbUrl() : string {
        return '/uploads/' + this.thumbname;
    }

    public humanReadableSize() : string {
        return "";
    }

    public colorAsHex() : string {
        return "";
    }
}
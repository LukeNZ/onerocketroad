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

    /**
     * Static helper method to create an image instance from a plain object.
     *
     * @param model
     * @returns {Image}
     */
    public static create(model?: any) {
        if (model != null) {
            return new Image(model.id, model.filename, model.thumbname, model.summary, model.attribution, model.size,
                model.color, model.createdAt, model.updatedAt);
        }
        return new Image();
    }

    constructor() {}

    /**
     * Image constructor.
     *
     * @param id
     * @param filename
     * @param thumbname
     * @param summary
     * @param attribution
     * @param size
     * @param color
     * @param createdAt
     * @param updatedAt
     */
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

    /**
     * Returns the filename as a URL pointing to an accessible location.
     *
     * @returns {string}
     */
    public getUrl() : string {
        return '/uploads/' + this.filename;
    }

    /**
     * Returns the thumbnail as a URL pointing to an accessible location.
     *
     * @returns {string}
     */
    public getThumbUrl() : string {
        return '/uploads/' + this.thumbname;
    }

    public humanReadableFileSize() : string {
        return "";
    }

    public colorAsHex() : string {
        return "";
    }
}
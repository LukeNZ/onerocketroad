import {User, Image} from "../classes";

export class Draft {
    public id: number;
    public title: string;
    public body: string;
    public author: User;
    public authorName: string;
    public heroId: number;
    public hero: Image;
    public dueAt: Date;
    public createdAt: Date;
    public updatedAt: Date;

    constructor(id : number, title: string, body: string, author: User, authorName: string,
                heroId: number, hero : Image, dueAt: Date, createdAt : Date, updatedAt : Date) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.author = author;
        this.authorName = authorName;
        this.heroId = heroId;
        this.hero = hero;
        this.dueAt = dueAt;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    /**
     * Calculates and returns number of words present within the draft.
     *
     * @returns {number}
     */
    public wordCount() : number {
        var matches = this.body.match(/[\w\d]+/gi);
        return matches ? matches.length : 0;
    }

    public isPublishable() : boolean {
        return this.title != null && this.body != null
            && this.title.length > 0 && this.body.length > 0
            && this.hero != null;
    }
}
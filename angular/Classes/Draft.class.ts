import {User} from "./User.class";
import {Image} from "./Image.class";
import {Tag} from "./Tag.class";

export class Draft {
    public id: number;
    public title: string;
    public body: string;
    public author: User;
    public authorName: string;
    public heroId: number;
    public hero: Image;
    public tags: Tag[];
    public dueAt: Date;
    public createdAt: Date;
    public updatedAt: Date;

    /**
     * Static helper method to create a draft instance from a plain object.
     *
     * @param model
     * @returns {Draft}
     */
    public static create(model?: any): Draft {
        if (model != null) {
            return new Draft(model.id, model.title, model.body, model.author, model.authorName,
                model.heroId, Image.create(model.hero), model.tags, model.dueAt, model.createdAt, model.updatedAt);
        }
        return new Draft();
    }

    constructor();
    constructor(id : number, title: string, body: string, author: User, authorName: string,
                heroId: number, hero : Image, tags: Tag[], dueAt: Date, createdAt : Date, updatedAt : Date);

    /**
     * Draft constructor
     *
     * @param id
     * @param title
     * @param body
     * @param author
     * @param authorName
     * @param heroId
     * @param hero
     * @param tags
     * @param dueAt
     * @param createdAt
     * @param updatedAt
     */
    constructor(id?: number, title?: string, body?: string, author?: User, authorName?: string,
                heroId?: number, hero?: Image, tags?: Tag[], dueAt?: Date, createdAt?: Date, updatedAt?: Date) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.author = author;
        this.authorName = authorName;
        this.heroId = heroId;
        this.hero = hero;
        this.tags = tags == null ? [] : tags;
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

    /**
     * Determines if the draft is in a publishable state for it to be converted into an Article.
     *
     * @returns {boolean}
     */
    public isPublishable() : boolean {
        return this.title != null && this.body != null
            && this.title.length > 0 && this.body.length > 0
            && this.hero != null;
    }
}
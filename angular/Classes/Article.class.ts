import {Draft} from "./Draft.class";
import * as moment from "moment";

export class Article {
    public id: number;
    public title: string;
    public body: string;
    public authorName: string;
    public createdAt: Date;
    public updatedAt: Date;

    public static createFromDraft(draft: Draft) : Article {
        let now = moment().utc().toDate();
        return new Article(draft.id, draft.title, draft.body, draft.authorName, now, now);
    }

    constructor(id: number, title: string, body: string, authorName: string, createdAt: Date, updatedAt: Date) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.authorName = authorName;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public publicationYear() : string {
        return moment(this.createdAt).utc().format("YYYY");
    }

    public publicationMonth() : string {
        return moment(this.createdAt).utc().format("MM");
    }

    public publicationDay() : string {
        return moment(this.createdAt).utc().format("DD");
    }

    public slug() : string {
        return this.title.toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, ''); // Trim - from end of text
    }
}
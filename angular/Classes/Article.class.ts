import {Draft} from "./Draft.class";

export class Article {
    public id: number;
    public title: string;
    public body: string;
    public authorName: string;
    public publishedAt: Date;
    public createdAt: Date;
    public updatedAt: Date;

    public static createFromDraft(draft: Draft, publishedAt: Date) : Article {
        let now = new Date();
        return new Article(draft.id, draft.title, draft.body, draft.authorName, now, now, now);
    }

    constructor(id: number, title: string, body: string, authorName: string, publishedAt: Date, createdAt: Date, updatedAt: Date) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.authorName = authorName;
        this.publishedAt = publishedAt;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
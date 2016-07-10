import {User} from "./User.class";

export class Draft {
    public id: number;
    public title: string;
    public body: string;
    public author: User;
    public authorName: string;
    public dueAt: Date;
    public createdAt: Date;
    public updatedAt: Date;

    constructor(id : number, title: string, body: string, author: User, authorName: string,
                dueAt: Date, createdAt : Date, updatedAt : Date) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.author = author;
        this.authorName = authorName;
        this.dueAt = dueAt;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    
    public wordCount() : number {
        return this.body ? this.body.split(" ").length : 0;
    }

    public isPublishable() {
        return this.title != null && this.body != null && this.title.length > 0 && this.body.length > 0;
    }
}
import {User} from "./User.class";

export class Draft {
    public id: number;
    public title: string;
    public body: string;
    public author: User;
    public author_name: string;
    public due_at: Date;
    public created_at: Date;
    public updated_at: Date;

    constructor() {}

    public chars() : number {
        return this.body ? this.body.length : 0;
    }
}
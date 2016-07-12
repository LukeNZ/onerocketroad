import {Article} from '../classes';

export class Home {
    public articles: Article[];

    constructor(articles: Article[]) {
        this.articles = articles;
    }
}
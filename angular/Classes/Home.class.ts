import {Article} from './Article.class';

export class Home {
    public articles: Article[];

    constructor(articles: Article[]) {
        this.articles = articles;
    }
}
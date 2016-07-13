import {Article} from '../classes';

interface MidTierArticleLayout {
    first : Article;
    second : Article;
}

interface MoreArticleLayout {
    first : Article;
    second : Article;
    third: Article;
}

export class Home {
    public articles: Article[];
    public leadArticle: Article;
    public midTierArticles: MidTierArticleLayout;
    public moreArticles: MoreArticleLayout;

    constructor(articles: Article[]) {
        this.articles = articles;

        if (articles.length >= 1) {
            this.leadArticle = articles[0];
        }

        if (articles.length >= 3) {
            this.midTierArticles = { first: articles[1], second: articles[2] };
        }

        if (articles.length >= 6) {
            this.moreArticles =  {
                first: articles[3],
                second: articles[4],
                third: articles[5]
            }
        }
    }
}
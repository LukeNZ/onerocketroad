import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {Article} from "../Classes/Article.class";
import {ArticleService} from "../Services/ArticleService.service";

@Component({
    selector: 'articles',
    templateUrl: '/angular/views/articles.template.html'
})
export class ArticlesComponent {
    public cursor: number = 0;
    public hasMoreArticles: boolean = true;
    public articles: Article[] = [];

    constructor(private articleService: ArticleService,
                private titleService: Title,
                private route : ActivatedRoute,
                private router : Router) {
        this.titleService.setTitle("One Rocket Road | Articles");
    }

    ngOnInit() : void {
        this.getMoreArticles();
    }

    /**
     * Get more recent articles from the article service, and add them to the component
     * article array, and increment the component cursor value. If the number of returned
     * articles is less than 10, we can safely assume the server is out of articles, and hide
     * the button to load more articles.
     */
    public getMoreArticles() : void {
        this.articleService.getRecentArticles(this.cursor).subscribe(articles => {
            this.cursor += articles.length;
            this.articles.push.apply(this.articles, articles);

            if (articles.length < 10) {
                this.hasMoreArticles = false;
            }
        });
    }
}
import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Article} from "../Classes/Article.class";
import {ArticleService} from "../Services/ArticleService.service";
import {ActivatedRoute, Router, ROUTER_DIRECTIVES} from "@angular/router";
import {MarkdownPipe} from "../Pipes/MarkdownPipe.pipe";

@Component({
    selector: 'articles',
    templateUrl: '/angular/views/articles.template.html',
    pipes: [MarkdownPipe],
    directives: [ROUTER_DIRECTIVES],
    providers: [ArticleService]
})
export class ArticlesComponent {
    public cursor: number = 0;
    public articles: Article[] = [];

    constructor(private articleService: ArticleService,
                private titleService: Title,
                private route : ActivatedRoute,
                private router : Router) {
        this.titleService.setTitle("One Rocket Road | Articles");
    }

    ngOnInit() {
        this.articleService.getRecentArticles().subscribe(articles => {
            this.articles.push.apply(this.articles, articles);
            console.log(articles);
            console.log(this.articles);
        });
    }
}
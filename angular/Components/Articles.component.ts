import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Article} from "../Classes/Article.class";
import {ArticleService} from "../Services/ArticleService.service";


@Component({
    selector: 'articles',
    templateUrl: '/angular/views/articles.template.html'
})
export class ArticlesComponent {
    public articles: Article[] = [];

    constructor(private articleService: ArticleService, private titleService: Title) {
        this.titleService.setTitle("One Rocket Road | Articles");
    }

    ngOnInit() {
        this.articleService
    }
}
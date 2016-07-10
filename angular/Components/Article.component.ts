import {Component, OnInit} from "@angular/core";
import {ArticleService} from "../Services/ArticleService.service";
import {MarkdownPipe} from "../Pipes/MarkdownPipe.pipe";
import {Article} from "../Classes/Article.class";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'article',
    templateUrl: '/angular/views/article.template.html',
    providers: [ArticleService],
    pipes: [MarkdownPipe]
})
export class ArticleComponent implements OnInit {
    public article: Article;

    constructor(private articleService: ArticleService, private titleService: Title) {}

    ngOnInit() {
        
    }
}
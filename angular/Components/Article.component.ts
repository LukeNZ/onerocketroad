import {Component} from "@angular/core";
import {ArticleService} from "../Services/ArticleService.service";
import {MarkdownPipe} from "../Pipes/MarkdownPipe.pipe";
import {Article} from "../Classes/Article.class";

@Component({
    selector: 'article',
    templateUrl: '/angular/views/article.template.html',
    providers: [ArticleService],
    pipes: [MarkdownPipe]
})
export class ArticleComponent {
    public article: Article;
}
import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {Article} from "../Classes/Article.class";
import {ArticleService} from "../Services/ArticleService.service";

@Component({
    selector: 'orr-article',
    templateUrl: '/angular/views/article.template.html',
})
export class ArticleComponent implements OnInit {
    public article: Article;

    constructor(private articleService: ArticleService,
                private titleService: Title,
                private route : ActivatedRoute,
                private router : Router) {}

    ngOnInit(): void {
        // Grab router params
        let year = this.route.snapshot.params['year'];
        let month = this.route.snapshot.params['month'];
        let day = this.route.snapshot.params['day'];
        let slug = this.route.snapshot.params['slug'];

        // Make server request
        this.articleService.getArticle(year, month, day, slug)
            .subscribe(article => {
                // Fetch the article and set the title
                this.article = article;
                this.titleService.setTitle("One Rocket Road | " + article.title);
            }, error => {
                this.router.navigate(['/articles']);
            });
    }
}
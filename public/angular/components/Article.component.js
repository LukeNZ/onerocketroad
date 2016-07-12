"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var services_1 = require("../services");
var pipes_1 = require("../pipes");
var ArticleComponent = (function () {
    function ArticleComponent(articleService, titleService, route, router) {
        this.articleService = articleService;
        this.titleService = titleService;
        this.route = route;
        this.router = router;
    }
    ArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Grab router params
        var year = this.route.snapshot.params['year'];
        var month = this.route.snapshot.params['month'];
        var day = this.route.snapshot.params['day'];
        var slug = this.route.snapshot.params['slug'];
        // Make server request
        this.articleService.getArticle(year, month, day, slug)
            .subscribe(function (article) {
            // Fetch the article and set the title
            _this.article = article;
            _this.titleService.setTitle("One Rocket Road | " + article.title);
        }, function (error) {
            _this.router.navigate(['/articles']);
        });
    };
    ArticleComponent = __decorate([
        core_1.Component({
            selector: 'article',
            templateUrl: '/angular/views/article.template.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [services_1.ArticleService],
            pipes: [pipes_1.MarkdownPipe]
        }), 
        __metadata('design:paramtypes', [services_1.ArticleService, platform_browser_1.Title, router_1.ActivatedRoute, router_1.Router])
    ], ArticleComponent);
    return ArticleComponent;
}());
exports.ArticleComponent = ArticleComponent;

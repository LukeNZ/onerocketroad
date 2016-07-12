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
var core_1 = require('@angular/core');
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var services_1 = require("../services");
var pipes_1 = require("../pipes");
var directives_1 = require("../directives");
var ArticlesComponent = (function () {
    function ArticlesComponent(articleService, titleService, route, router) {
        this.articleService = articleService;
        this.titleService = titleService;
        this.route = route;
        this.router = router;
        this.cursor = 0;
        this.hasMoreArticles = true;
        this.articles = [];
        this.titleService.setTitle("One Rocket Road | Articles");
    }
    ArticlesComponent.prototype.ngOnInit = function () {
        this.getMoreArticles();
    };
    /**
     * Get more recent articles from the article service, and add them to the component
     * article array, and increment the component cursor value. If the number of returned
     * articles is less than 10, we can safely assume the server is out of articles, and hide
     * the button to load more articles.
     */
    ArticlesComponent.prototype.getMoreArticles = function () {
        var _this = this;
        this.articleService.getRecentArticles(this.cursor).subscribe(function (articles) {
            _this.cursor += articles.length;
            _this.articles.push.apply(_this.articles, articles);
            if (articles.length < 10) {
                _this.hasMoreArticles = false;
            }
        });
    };
    ArticlesComponent = __decorate([
        core_1.Component({
            selector: 'articles',
            templateUrl: '/angular/views/articles.template.html',
            pipes: [pipes_1.MarkdownPipe],
            directives: [directives_1.ArticleRouterLinkDirective],
            providers: [services_1.ArticleService]
        }), 
        __metadata('design:paramtypes', [services_1.ArticleService, platform_browser_1.Title, router_1.ActivatedRoute, router_1.Router])
    ], ArticlesComponent);
    return ArticlesComponent;
}());
exports.ArticlesComponent = ArticlesComponent;

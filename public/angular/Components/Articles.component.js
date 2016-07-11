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
var ArticleService_service_1 = require("../Services/ArticleService.service");
var router_1 = require("@angular/router");
var MarkdownPipe_pipe_1 = require("../Pipes/MarkdownPipe.pipe");
var ArticlesComponent = (function () {
    function ArticlesComponent(articleService, titleService, route, router) {
        this.articleService = articleService;
        this.titleService = titleService;
        this.route = route;
        this.router = router;
        this.cursor = 0;
        this.articles = [];
        this.titleService.setTitle("One Rocket Road | Articles");
    }
    ArticlesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.getRecentArticles().subscribe(function (articles) {
            _this.articles.push.apply(_this.articles, articles);
            console.log(articles);
            console.log(_this.articles);
        });
    };
    ArticlesComponent = __decorate([
        core_1.Component({
            selector: 'articles',
            templateUrl: '/angular/views/articles.template.html',
            pipes: [MarkdownPipe_pipe_1.MarkdownPipe],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [ArticleService_service_1.ArticleService]
        }), 
        __metadata('design:paramtypes', [ArticleService_service_1.ArticleService, platform_browser_1.Title, router_1.ActivatedRoute, router_1.Router])
    ], ArticlesComponent);
    return ArticlesComponent;
}());
exports.ArticlesComponent = ArticlesComponent;

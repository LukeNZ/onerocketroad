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
var ArticleService_service_1 = require("../Services/ArticleService.service");
var MarkdownPipe_pipe_1 = require("../Pipes/MarkdownPipe.pipe");
var platform_browser_1 = require("@angular/platform-browser");
var ArticleComponent = (function () {
    function ArticleComponent(articleService, titleService) {
        this.articleService = articleService;
        this.titleService = titleService;
    }
    ArticleComponent.prototype.ngOnInit = function () {
    };
    ArticleComponent = __decorate([
        core_1.Component({
            selector: 'article',
            templateUrl: '/angular/views/article.template.html',
            providers: [ArticleService_service_1.ArticleService],
            pipes: [MarkdownPipe_pipe_1.MarkdownPipe]
        }), 
        __metadata('design:paramtypes', [ArticleService_service_1.ArticleService, platform_browser_1.Title])
    ], ArticleComponent);
    return ArticleComponent;
}());
exports.ArticleComponent = ArticleComponent;
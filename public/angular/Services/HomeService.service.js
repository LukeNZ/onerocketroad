"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var http_1 = require("@angular/http");
var AbstractService_service_1 = require("./AbstractService.service");
var Home_class_1 = require("../Classes/Home.class");
var Article_class_1 = require("../Classes/Article.class");
var HomeService = (function (_super) {
    __extends(HomeService, _super);
    function HomeService(http) {
        _super.call(this);
        this.http = http;
    }
    HomeService.prototype.getHome = function () {
        return this.http.get('/api/home/get').map(function (res) {
            var articles = res.json().map(function (article) {
                return new Article_class_1.Article(article.id, article.title, article.body, article.authorName, article.createdAt, article.updatedAt);
            });
            return new Home_class_1.Home(articles);
        });
    };
    HomeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HomeService);
    return HomeService;
}(AbstractService_service_1.AbstractService));
exports.HomeService = HomeService;

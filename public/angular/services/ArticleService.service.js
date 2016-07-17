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
var services_1 = require("../services");
var classes_1 = require("../classes");
var Observable_1 = require("rxjs/Observable");
var ArticleService = (function (_super) {
    __extends(ArticleService, _super);
    function ArticleService(http) {
        _super.call(this);
        this.http = http;
    }
    ArticleService.prototype.getArticles = function () {
        return null;
    };
    /**
     * Get the next 10 articles from a predefined offset cursor, sorted in descending
     * order by publication date.
     *
     * @param cursor    An optional parameter defining the offset for where to start
     *  retrieving articles from. If optional, cursor will default to 0.
     * @returns {Observable<Article[]>}
     */
    ArticleService.prototype.getRecentArticles = function (cursor) {
        cursor = cursor == null ? 0 : cursor;
        return this.http.get('/api/articles/getrecent/' + cursor)
            .map(function (response) { return response.json(); })
            .map(function (models) {
            return models.map(function (model) {
                return new classes_1.Article(model.id, model.title, model.body, model.authorName, model.createdAt, model.updatedAt);
            });
        })
            .catch(this.handleError);
    };
    /**
     * Get an article by its year, month, & day of publication, as well as its slug. All three are
     * needed to correctly fetch the article.
     * GET: /api/articles/get/:year/:month/:day/:slug
     *
     * @param year      The year of article publication.
     * @param month     The month of article publication.
     * @param day       The day of article publication.
     * @param slug      The slugged title of the article.
     * @returns {Observable<Article>}   The article specified by the above parameters.
     */
    ArticleService.prototype.getArticle = function (year, month, day, slug) {
        var _this = this;
        return this.http.get('/api/articles/get/' + year + '/' + month + '/' + day + "/" + slug)
            .map(function (response) { return response.json(); })
            .map(function (model) {
            return new classes_1.Article(model.id, model.title, model.body, model.authorName, model.createdAt, model.updatedAt);
        })
            .catch(function (response) {
            if (response.status == 404) {
                return Observable_1.Observable.throw("Article not found");
            }
            return _this.handleError(response);
        });
    };
    ArticleService.prototype.getNeighbourArticles = function () {
        return null;
    };
    /**
     * Creates (and therefore publishes) an article on the server.
     * PUT: /api/articles/create.
     *
     * @param article   The article to be created on the server.
     * @returns {Observable<Article>}   The article returned from the server.
     */
    ArticleService.prototype.createArticle = function (article) {
        return this.http.put('/api/articles/create', article)
            .map(function (response) { return response.json(); })
            .map(function (model) {
            return new classes_1.Article(model.id, model.title, model.body, model.authorName, model.createdAt, model.updatedAt);
        })
            .catch(this.handleError);
    };
    ArticleService.prototype.updateArticle = function (article) {
        return null;
    };
    ArticleService.prototype.deleteArticle = function (article) {
        return null;
    };
    ArticleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ArticleService);
    return ArticleService;
}(services_1.AbstractService));
exports.ArticleService = ArticleService;

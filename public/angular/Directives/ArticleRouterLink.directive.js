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
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var Article_class_1 = require("../Classes/Article.class");
var ArticleRouterLinkDirective = (function (_super) {
    __extends(ArticleRouterLinkDirective, _super);
    function ArticleRouterLinkDirective(router, route) {
        this.router = router;
        this.route = route;
    }
    ArticleRouterLinkDirective.prototype.onClick = function () {
        this.router.navigate([this.model.slug()]);
        this.router.
        ;
        return false;
    };
    __decorate([
        core_1.Input('articleRouterLink'), 
        __metadata('design:type', Article_class_1.Article)
    ], ArticleRouterLinkDirective.prototype, "model", void 0);
    __decorate([
        core_1.HostBinding(), 
        __metadata('design:type', String)
    ], ArticleRouterLinkDirective.prototype, "href", void 0);
    __decorate([
        core_1.HostListener('click', ['$event.button', '$event.ctrlKey', '$event.metaKey']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ArticleRouterLinkDirective.prototype, "onClick", null);
    ArticleRouterLinkDirective = __decorate([
        core_1.Directive({
            selector: 'a[articleRouterLink]',
            host: {
                'click': 'onClick()'
            }
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
    ], ArticleRouterLinkDirective);
    return ArticleRouterLinkDirective;
}(router_1.RouterLinkWithHref));
exports.ArticleRouterLinkDirective = ArticleRouterLinkDirective;

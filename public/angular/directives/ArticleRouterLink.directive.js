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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var classes_1 = require("../classes");
var ArticleRouterLinkDirective = (function () {
    function ArticleRouterLinkDirective(router, route, locationStrategy) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.locationStrategy = locationStrategy;
        this.commands = [];
        this.subscription = router.events.subscribe(function (s) {
            if (s instanceof router_1.NavigationEnd) {
                _this.updateTargetUrlAndHref();
            }
        });
    }
    Object.defineProperty(ArticleRouterLinkDirective.prototype, "articleRouterLink", {
        set: function (article) {
            if (article != null) {
                this.commands = ['/article', article.publicationYear(), article.publicationMonth(), article.publicationDay(), article.slug()];
            }
        },
        enumerable: true,
        configurable: true
    });
    ArticleRouterLinkDirective.prototype.ngOnChanges = function (changes) { this.updateTargetUrlAndHref(); };
    ArticleRouterLinkDirective.prototype.ngOnDestroy = function () { this.subscription.unsubscribe(); };
    ArticleRouterLinkDirective.prototype.onClick = function (button, ctrlKey, metaKey) {
        if (button !== 0 || ctrlKey || metaKey) {
            return true;
        }
        if (this.model instanceof classes_1.Article === false) {
            return true;
        }
        this.router.navigateByUrl(this.urlTree);
        return false;
    };
    ArticleRouterLinkDirective.prototype.updateTargetUrlAndHref = function () {
        this.urlTree = this.router.createUrlTree(this.commands);
        if (this.urlTree) {
            this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree));
        }
    };
    __decorate([
        core_1.Input('articleRouterLink'), 
        __metadata('design:type', classes_1.Article)
    ], ArticleRouterLinkDirective.prototype, "model", void 0);
    __decorate([
        core_1.HostBinding(), 
        __metadata('design:type', String)
    ], ArticleRouterLinkDirective.prototype, "href", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', classes_1.Article), 
        __metadata('design:paramtypes', [classes_1.Article])
    ], ArticleRouterLinkDirective.prototype, "articleRouterLink", null);
    __decorate([
        core_1.HostListener('click', ['$event.button', '$event.ctrlKey', '$event.metaKey']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Number, Boolean, Boolean]), 
        __metadata('design:returntype', Boolean)
    ], ArticleRouterLinkDirective.prototype, "onClick", null);
    ArticleRouterLinkDirective = __decorate([
        core_1.Directive({
            selector: 'a[articleRouterLink]',
            host: {
                'click': 'onClick()'
            }
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, common_1.LocationStrategy])
    ], ArticleRouterLinkDirective);
    return ArticleRouterLinkDirective;
}());
exports.ArticleRouterLinkDirective = ArticleRouterLinkDirective;

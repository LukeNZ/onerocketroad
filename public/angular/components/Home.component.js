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
var platform_browser_1 = require("@angular/platform-browser");
var services_1 = require("../services");
var directives_1 = require("../directives");
var HomeComponent = (function () {
    function HomeComponent(homeService, route, router, titleService) {
        this.homeService = homeService;
        this.route = route;
        this.router = router;
        this.titleService = titleService;
        this.titleService.setTitle("One Rocket Road");
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.homeService.getHome().subscribe(function (home) {
            _this.home = home;
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: '/angular/views/home.template.html',
            directives: [router_1.ROUTER_DIRECTIVES, directives_1.ArticleRouterLinkDirective],
            providers: [services_1.HomeService]
        }), 
        __metadata('design:paramtypes', [services_1.HomeService, router_1.ActivatedRoute, router_1.Router, platform_browser_1.Title])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

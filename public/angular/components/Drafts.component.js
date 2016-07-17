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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var classes_1 = require("../classes");
var services_1 = require("../services");
var directives_1 = require("../directives");
var Observable_1 = require("rxjs/Observable");
var DraftsComponent = (function () {
    function DraftsComponent(draftService, articleService, route, router, titleService) {
        this.draftService = draftService;
        this.articleService = articleService;
        this.route = route;
        this.router = router;
        this.titleService = titleService;
        this.newDraftModel = new classes_1.Draft(null, "", "", null, null, null, null, null, null, null);
        this.isCreatingDraft = false;
        this.drafts = [];
        this.articles = [];
        this.titleService.setTitle("One Rocket Road | Drafts");
    }
    DraftsComponent.prototype.ngOnInit = function () {
        var _this = this;
        Observable_1.Observable.forkJoin(this.draftService.getAllDrafts(), this.articleService.getRecentArticles()).subscribe(function (data) {
            console.log(data[0]);
            _this.drafts = data[0];
            _this.articles = data[1];
        }, function (err) { return console.log(err); });
    };
    /**
     * Creates a draft for an article, rendering only the title and the author.
     */
    DraftsComponent.prototype.createDraft = function () {
        var _this = this;
        this.isCreatingDraft = true;
        this.draftService.createDraft(this.newDraftModel).subscribe(function (draft) {
            _this.router.navigate(['draft', draft.id]);
        }, function (error) { return console.log(error); });
    };
    /**
     * Deletes a draft permanently.
     *
     * @param draft
     */
    DraftsComponent.prototype.deleteDraft = function (draft) {
        var _this = this;
        this.draftService.deleteDraft(draft).subscribe(function () {
            _this.drafts.splice(_this.drafts.indexOf(draft), 1);
        });
    };
    DraftsComponent = __decorate([
        core_1.Component({
            selector: 'drafts',
            templateUrl: '/angular/views/drafts.template.html',
            directives: [router_1.ROUTER_DIRECTIVES, directives_1.DraggableDirective, directives_1.DroppableDirective],
            providers: [services_1.DraftService, services_1.ArticleService],
        }), 
        __metadata('design:paramtypes', [services_1.DraftService, services_1.ArticleService, router_1.ActivatedRoute, router_1.Router, platform_browser_1.Title])
    ], DraftsComponent);
    return DraftsComponent;
}());
exports.DraftsComponent = DraftsComponent;

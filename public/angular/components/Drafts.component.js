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
var DraftsComponent = (function () {
    function DraftsComponent(draftService, titleService) {
        this.draftService = draftService;
        this.titleService = titleService;
        this.newDraftModel = new classes_1.Draft(null, "", "", null, null, null, null, null);
        this.isCreatingDraft = false;
        this.drafts = [];
        this.titleService.setTitle("One Rocket Road | Drafts");
    }
    DraftsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.draftService.getAllDrafts().subscribe(function (drafts) { return _this.drafts = drafts; }, function (error) { return console.log(error); });
    };
    /**
     * Creates a draft for an article, rendering only the title and the author.
     */
    DraftsComponent.prototype.createDraft = function () {
        var _this = this;
        this.isCreatingDraft = true;
        this.draftService.createDraft(this.newDraftModel).subscribe(function (draft) {
            _this.drafts.push(draft);
            _this.isCreatingDraft = false;
        }, function (error) { return console.log(error); });
    };
    DraftsComponent = __decorate([
        core_1.Component({
            selector: 'drafts',
            templateUrl: '/angular/views/drafts.template.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [services_1.DraftService],
        }), 
        __metadata('design:paramtypes', [services_1.DraftService, platform_browser_1.Title])
    ], DraftsComponent);
    return DraftsComponent;
}());
exports.DraftsComponent = DraftsComponent;

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
var Draft_class_1 = require("../Classes/Draft.class");
var DraftService_service_1 = require("../Services/DraftService.service");
var DraftsComponent = (function () {
    function DraftsComponent(draftService) {
        this.draftService = draftService;
        this.newDraftModel = new Draft_class_1.Draft();
        this.isCreatingDraft = false;
        this.drafts = [];
    }
    DraftsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.draftService.getAllDrafts().then(function (drafts) {
            _this.drafts = drafts;
        });
    };
    /**
     * Creates a draft for an article, rendering only the title and the author.
     */
    DraftsComponent.prototype.createDraft = function () {
        var _this = this;
        this.isCreatingDraft = true;
        this.draftService.createDraft(this.newDraftModel).then(function (draft) {
            _this.drafts.push(draft);
            _this.isCreatingDraft = false;
        }).catch(function (err) {
            // do nothing
        });
    };
    DraftsComponent = __decorate([
        core_1.Component({
            selector: 'drafts',
            templateUrl: '/angular/views/drafts.template.html',
            providers: [DraftService_service_1.DraftService]
        }), 
        __metadata('design:paramtypes', [DraftService_service_1.DraftService])
    ], DraftsComponent);
    return DraftsComponent;
}());
exports.DraftsComponent = DraftsComponent;

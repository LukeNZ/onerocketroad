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
var Rx_1 = require("rxjs/Rx");
var DraftService_service_1 = require("../Services/DraftService.service");
var DraftStateStore = (function () {
    function DraftStateStore(draftService) {
        this.draftService = draftService;
        this._draft = new Rx_1.BehaviorSubject(null);
    }
    Object.defineProperty(DraftStateStore.prototype, "draft", {
        get: function () {
            return this._draft.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    DraftStateStore.prototype.getDraft = function (draftId) {
        var _this = this;
        this.draftService.getDraft(draftId).subscribe(function (draft) {
            _this._draft.next(draft);
        });
    };
    DraftStateStore.prototype.autosave = function () {
    };
    DraftStateStore = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [DraftService_service_1.DraftService])
    ], DraftStateStore);
    return DraftStateStore;
}());
exports.DraftStateStore = DraftStateStore;

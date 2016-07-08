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
var DraftService_service_1 = require("../Services/DraftService.service");
var router_1 = require("@angular/router");
var DraftComponent = (function () {
    function DraftComponent(draftService, route, router) {
        this.draftService = draftService;
        this.route = route;
        this.router = router;
    }
    DraftComponent.prototype.ngOnInit = function () {
        // Could either fetch data from the server again or simply pass data from the parent component?
        // http://stackoverflow.com/questions/33308340/how-to-inject-data-into-angular2-component-created-from-a-router
    };
    DraftComponent.prototype.ngOnDestroy = function () {
    };
    DraftComponent = __decorate([
        core_1.Component({
            selector: 'draft',
            templateUrl: '/angular/views/draft.template.html',
            providers: [DraftService_service_1.DraftService]
        }), 
        __metadata('design:paramtypes', [DraftService_service_1.DraftService, router_1.ActivatedRoute, router_1.Router])
    ], DraftComponent);
    return DraftComponent;
}());
exports.DraftComponent = DraftComponent;

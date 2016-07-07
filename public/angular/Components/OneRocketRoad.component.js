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
var router_1 = require('@angular/router');
var Articles_component_1 = require('./Articles.component');
var Drafts_component_1 = require('./Drafts.component');
var OneRocketRoadComponent = (function () {
    function OneRocketRoadComponent() {
    }
    OneRocketRoadComponent = __decorate([
        core_1.Component({
            selector: 'one-rocket-road',
            templateUrl: '/angular/views/onerocketroad.template.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            precompile: [Drafts_component_1.DraftsComponent, Articles_component_1.ArticlesComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], OneRocketRoadComponent);
    return OneRocketRoadComponent;
}());
exports.OneRocketRoadComponent = OneRocketRoadComponent;

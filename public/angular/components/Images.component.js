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
var platform_browser_1 = require("@angular/platform-browser");
var classes_1 = require("../classes");
var services_1 = require("../services");
var ImagesComponent = (function () {
    function ImagesComponent(imageService, titleService) {
        this.imageService = imageService;
        this.titleService = titleService;
        this.imageToUpload = new classes_1.Image(null, null);
        this.images = [];
        this.titleService.setTitle("One Rocket Road | Images");
    }
    ImagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imageService.getImages().subscribe(function (images) {
            _this.images = images;
        });
    };
    ImagesComponent = __decorate([
        core_1.Component({
            selector: 'images',
            templateUrl: '/angular/views/images.template.html',
            providers: [services_1.ImageService]
        }), 
        __metadata('design:paramtypes', [services_1.ImageService, platform_browser_1.Title])
    ], ImagesComponent);
    return ImagesComponent;
}());
exports.ImagesComponent = ImagesComponent;

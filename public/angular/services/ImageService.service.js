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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var services_1 = require("../services");
var classes_1 = require("../classes");
var ImageService = (function (_super) {
    __extends(ImageService, _super);
    function ImageService(http) {
        _super.call(this);
        this.http = http;
    }
    ImageService.prototype.getImages = function () {
        return this.http.get('/api/images/all')
            .map(function (response) { return response.json(); })
            .map(function (models) {
            return models.map(function (model) {
                return new classes_1.Image(model.id, model.filename, model.thumbname, model.summary, model.attribution, model.size, model.color, model.createdAt, model.updatedAt);
            });
        })
            .catch(this.handleError);
    };
    ImageService.prototype.getImage = function () {
        return null;
    };
    ImageService.prototype.deleteImage = function () {
        return null;
    };
    ImageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ImageService);
    return ImageService;
}(services_1.AbstractService));
exports.ImageService = ImageService;

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
var Dropzone = require('dropzone');
var DropzoneComponent = (function () {
    function DropzoneComponent(el) {
        this.el = el;
    }
    DropzoneComponent.prototype.ngOnInit = function () {
        this.el.nativeElement.id = "ng2-dropzone";
        this.el.nativeElement.style.display = "block";
        var dropzone = new Dropzone(this.el.nativeElement, {
            url: '/api/images/create',
            method: "put",
            maxFilesize: 32,
            maxFiles: 1,
            acceptedFiles: '.jpg,.jpeg,.png,.gif'
        });
    };
    DropzoneComponent = __decorate([
        core_1.Component({
            selector: 'dropzone',
            template: ''
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], DropzoneComponent);
    return DropzoneComponent;
}());
exports.DropzoneComponent = DropzoneComponent;

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
var ContentEditableDirective = (function () {
    function ContentEditableDirective(el) {
        this.el = el;
        this.update = new core_1.EventEmitter();
        el.nativeElement.setAttribute("contenteditable", "");
        el.nativeElement.textContent = this.model;
    }
    ContentEditableDirective.prototype.ngOnChanges = function (changes) {
        this.el.nativeElement.textContent = this.model;
        this.lastModel = this.model;
    };
    ContentEditableDirective.prototype.onBlur = function () {
        var value = this.el.nativeElement.textContent;
        this.lastModel = value;
        this.update.emit(value);
    };
    __decorate([
        core_1.Input('contentEditableModel'), 
        __metadata('design:type', Object)
    ], ContentEditableDirective.prototype, "model", void 0);
    __decorate([
        core_1.Output('contentEditableModelChange'), 
        __metadata('design:type', Object)
    ], ContentEditableDirective.prototype, "update", void 0);
    __decorate([
        core_1.HostListener('onblur'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ContentEditableDirective.prototype, "onBlur", null);
    ContentEditableDirective = __decorate([
        core_1.Directive({
            selector: '[contentEditableModel]',
            host: {
                '(blur)': 'onBlur()'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ContentEditableDirective);
    return ContentEditableDirective;
}());
exports.ContentEditableDirective = ContentEditableDirective;

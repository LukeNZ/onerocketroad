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
var DroppableDirective = (function () {
    function DroppableDirective(el) {
        this.el = el;
        this.dropped = new core_1.EventEmitter();
    }
    DroppableDirective.prototype.onDragEnter = function (event) {
        this.el.nativeElement.classList.add("being-dropped");
    };
    DroppableDirective.prototype.onDragLeave = function (event) {
        this.el.nativeElement.classList.remove("being-dropped");
    };
    DroppableDirective.prototype.onDragOver = function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
    };
    DroppableDirective.prototype.onDrop = function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        this.el.nativeElement.classList.remove("being-dropped");
        var data = JSON.parse(event.dataTransfer.getData("text"));
        console.log(data);
        this.dropped.emit(data);
        return false;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DroppableDirective.prototype, "dropped", void 0);
    __decorate([
        core_1.HostListener('dragenter', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DroppableDirective.prototype, "onDragEnter", null);
    __decorate([
        core_1.HostListener('dragleave', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DroppableDirective.prototype, "onDragLeave", null);
    __decorate([
        core_1.HostListener('dragover', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DroppableDirective.prototype, "onDragOver", null);
    __decorate([
        core_1.HostListener('drop', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DroppableDirective.prototype, "onDrop", null);
    DroppableDirective = __decorate([
        core_1.Directive({
            selector: '[isDroppable]',
            host: {
                '(dragenter)': 'onDragEnter()',
                '(dragleave)': 'onDragLeave()',
                '(dragover)': 'onDragOver()',
                '(drop)': 'onDrop()'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], DroppableDirective);
    return DroppableDirective;
}());
exports.DroppableDirective = DroppableDirective;

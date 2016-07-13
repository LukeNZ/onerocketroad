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
var DraggableDirective = (function () {
    function DraggableDirective(el) {
        this.el = el;
        this.el.nativeElement.setAttribute('draggable', 'true');
    }
    DraggableDirective.prototype.onDragStart = function (event) {
        this.el.nativeElement.classList.add("being-dragged");
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text", JSON.stringify(this.data));
    };
    DraggableDirective.prototype.onDragEnd = function (event) {
        this.el.nativeElement.classList.remove("being-dragged");
    };
    __decorate([
        core_1.Input('isDraggable'), 
        __metadata('design:type', Object)
    ], DraggableDirective.prototype, "data", void 0);
    __decorate([
        core_1.HostListener('dragstart', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DraggableDirective.prototype, "onDragStart", null);
    __decorate([
        core_1.HostListener('dragend', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DraggableDirective.prototype, "onDragEnd", null);
    DraggableDirective = __decorate([
        core_1.Directive({
            selector: '[isDraggable]',
            host: {
                '(dragstart)': 'onDragStart()',
                '(dragend)': 'onDragEnd()'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], DraggableDirective);
    return DraggableDirective;
}());
exports.DraggableDirective = DraggableDirective;

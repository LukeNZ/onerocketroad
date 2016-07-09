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
var router_1 = require("@angular/router");
var forms_1 = require('@angular/forms');
var DraftService_service_1 = require("../Services/DraftService.service");
var Draft_class_1 = require("../Classes/Draft.class");
var ContentEditable_directive_1 = require("../Directives/ContentEditable.directive");
var DraftViewState_enum_1 = require("../Enums/DraftViewState.enum");
var MarkdownPipe_pipe_1 = require("../Pipes/MarkdownPipe.pipe");
var DraftComponent = (function () {
    function DraftComponent(draftService, route, router) {
        this.draftService = draftService;
        this.route = route;
        this.router = router;
        this.draft = new Draft_class_1.Draft(); // initialize to an empty draft
        this.isSaving = false;
        this.isPublishing = false;
        this.draftViewState = DraftViewState_enum_1.DraftViewState;
        this.viewState = DraftViewState_enum_1.DraftViewState.Edit;
        this.bodyFormControl = new forms_1.FormControl();
    }
    DraftComponent.prototype.ngOnInit = function () {
        // Could either fetch data from the server again or simply pass data from the parent component?
        // http://stackoverflow.com/questions/33308340/how-to-inject-data-into-angular2-component-created-from-a-router
        // No way in router 3.0.0-beta.2 to pass data across components. Possibly best to refetch as data passed through
        // may be outdated by the time it is used.
        var _this = this;
        var id = +this.route.snapshot.params['id'];
        this.draftService.getDraft(id).subscribe(function (draft) {
            _this.draft = draft;
            // This is a poor substitute for object change detection. Ideally, we would see if any changes
            // have been made to the draft property, and debounce and subscribe to that. This does not appear
            // to be possible, so we subscribe to changes off the form control for the body only.
            _this.bodyFormControl
                .valueChanges
                .debounceTime(3000)
                .subscribe(function () {
                _this.isSaving = true;
                _this.draftService.updateDraft(_this.draft).subscribe(function () { return _this.isSaving = false; });
            });
        }, function (error) { return console.log(error); });
    };
    DraftComponent.prototype.setViewState = function (state) {
        this.viewState = state;
    };
    DraftComponent.prototype.save = function () {
    };
    DraftComponent.prototype.publish = function () {
    };
    DraftComponent.prototype.delete = function () {
    };
    DraftComponent = __decorate([
        core_1.Component({
            selector: 'draft',
            templateUrl: '/angular/views/draft.template.html',
            directives: [ContentEditable_directive_1.ContentEditableDirective, router_1.ROUTER_DIRECTIVES, forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES],
            providers: [DraftService_service_1.DraftService],
            pipes: [MarkdownPipe_pipe_1.MarkdownPipe]
        }), 
        __metadata('design:paramtypes', [DraftService_service_1.DraftService, router_1.ActivatedRoute, router_1.Router])
    ], DraftComponent);
    return DraftComponent;
}());
exports.DraftComponent = DraftComponent;

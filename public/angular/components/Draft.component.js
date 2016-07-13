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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require("@angular/router");
var forms_1 = require('@angular/forms');
var services_1 = require("../services");
var classes_1 = require("../classes");
var directives_1 = require("../directives");
var enums_1 = require("../enums");
var pipes_1 = require("../pipes");
var Rx_1 = require("rxjs/Rx");
var DraftComponent = (function () {
    function DraftComponent(draftService, articleService, titleService, route, router) {
        this.draftService = draftService;
        this.articleService = articleService;
        this.titleService = titleService;
        this.route = route;
        this.router = router;
        this.isSaving = false;
        this.isPublishing = false;
        this.draftViewState = enums_1.DraftViewState;
        this.viewState = enums_1.DraftViewState.Edit;
        this.bodyFormControl = new forms_1.FormControl();
        this.draftSubject = new Rx_1.Subject();
        this.draftStream = this.draftSubject.asObservable();
    }
    Object.defineProperty(DraftComponent.prototype, "draft", {
        get: function () {
            return this._draft;
        },
        set: function (draft) {
            this._draft = draft;
            this.draftSubject.next(draft);
        },
        enumerable: true,
        configurable: true
    });
    DraftComponent.prototype.ngOnInit = function () {
        // Could either fetch data from the server again or simply pass data from the parent component?
        // http://stackoverflow.com/questions/33308340/how-to-inject-data-into-angular2-component-created-from-a-router
        // No way in router 3.0.0-beta.2 to pass data across components. Possibly best to refetch as data passed through
        // may be outdated by the time it is used.
        var _this = this;
        var id = +this.route.snapshot.params['id'];
        this.draftService.getDraft(id).subscribe(function (draft) {
            _this.draft = draft;
            _this.titleService.setTitle("One Rocket Road | Draft: " + draft.title);
            // Subscribe to changes and autosave when changes are detected after debouncing
            _this.draftSubscription = _this.draftStream
                .debounceTime(1000)
                .subscribe(function () { return _this.autosave(); });
        }, function (error) { return console.log(error); });
    };
    /**
     * Sets the view state on the draft component. Is either one of DraftViewState.Edit or
     * DraftViewState.View.
     *
     * @param state The state to set.
     */
    DraftComponent.prototype.setViewState = function (state) {
        this.viewState = state;
    };
    /**
     * If the body of the draft is less than 200 words, highlight the word count tracker in
     * red to represent an extremely short draft (less than approximately 3 paragraphs).
     *
     * @returns {string} The color the word count should be highlighted in.
     */
    DraftComponent.prototype.showWordCountWarning = function () {
        return this.draft.wordCount() > 200 ? "black" : "red";
    };
    /**
     *
     * @returns {string}
     */
    DraftComponent.prototype.wordCountStatement = function () {
        var wordCount = this.draft.wordCount();
        if (wordCount == 1) {
            return "1 word";
        }
        return wordCount + " words";
    };
    /**
     *
     */
    DraftComponent.prototype.autosave = function () {
        var _this = this;
        this.isSaving = true;
        this.draftService.updateDraft(this.draft).subscribe(function () { return _this.isSaving = false; });
    };
    /**
     * Publishes a draft as an article. This creates an article from the draft, puts the article on the server,
     * then once complete, deletes the original draft and redirects to the newly created article.
     */
    DraftComponent.prototype.publishDraft = function () {
        var _this = this;
        this.isPublishing = true;
        var article = classes_1.Article.createFromDraft(this.draft);
        // In turn, create the article, then delete the draft.
        this.articleService.createArticle(article)
            .subscribe(function (articleFromServer) {
            // Only attempt to delete the draft once we are sure the article was created successfully.
            _this.draftSubscription.unsubscribe();
            _this.draftService.deleteDraft(_this.draft).subscribe(function () {
                // Everything succeeded. Navigate away to the newly created article.
                article = articleFromServer;
                _this.router.navigate(['article', article.publicationYear(),
                    article.publicationMonth(), article.publicationDay(), article.slug()]);
            });
        });
    };
    /**
     * Deletes a draft on the server, and navigates back to the drafts listing page.
     */
    DraftComponent.prototype.deleteDraft = function () {
        var _this = this;
        // Unsubscribe before we delete the draft because there may be debounced changes waiting to
        // take place, causing a race condition. If we are deleting we don't care about those changes anyway.
        this.draftSubscription.unsubscribe();
        this.draftService.deleteDraft(this.draft).subscribe(function (response) {
            _this.router.navigate(['drafts']);
        });
    };
    DraftComponent.prototype.autosaveDraftBody = function (body) {
        this.draft = new classes_1.Draft(this.draft.id, this.draft.title, body, this.draft.author, this.draft.authorName, this.draft.dueAt, this.draft.createdAt, this.draft.updatedAt);
    };
    DraftComponent.prototype.autosaveDraftTitle = function (title) {
        this.draft = new classes_1.Draft(this.draft.id, title, this.draft.body, this.draft.author, this.draft.authorName, this.draft.dueAt, this.draft.createdAt, this.draft.updatedAt);
    };
    DraftComponent = __decorate([
        core_1.Component({
            selector: 'draft',
            templateUrl: '/angular/views/draft.template.html',
            directives: [directives_1.ContentEditableDirective, router_1.ROUTER_DIRECTIVES, forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES],
            providers: [services_1.DraftService, services_1.ArticleService],
            pipes: [pipes_1.MarkdownPipe]
        }), 
        __metadata('design:paramtypes', [services_1.DraftService, services_1.ArticleService, platform_browser_1.Title, router_1.ActivatedRoute, router_1.Router])
    ], DraftComponent);
    return DraftComponent;
}());
exports.DraftComponent = DraftComponent;

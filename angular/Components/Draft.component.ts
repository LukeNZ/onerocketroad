import {Component, OnInit} from "@angular/core";
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router, ROUTER_DIRECTIVES} from "@angular/router";
import {FORM_DIRECTIVES, FormControl, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';
import {DraftService, ArticleService} from "../services";
import {Draft, Article} from "../classes";
import {ContentEditableDirective} from "../directives";
import {DraftViewState} from "../enums";
import {MarkdownPipe} from "../pipes";

import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

@Component({
    selector: 'draft',
    templateUrl: '/angular/views/draft.template.html',
    directives: [ContentEditableDirective, ROUTER_DIRECTIVES, FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
    providers: [DraftService, ArticleService],
    pipes: [MarkdownPipe]
})
export class DraftComponent implements OnInit {
    private _draft: Draft;
    public isSaving: boolean = false;
    public isPublishing: boolean = false;
    public draftViewState = DraftViewState;
    public viewState: DraftViewState = DraftViewState.Edit;

    public bodyFormControl = new FormControl();

    public draftSubject : Subject<Draft> = new Subject<Draft>();
    public draftStream : Observable<Draft> = this.draftSubject.asObservable();
    public draftSubscription : Subscription;

    /**
     * Getter for the private variable draft. Used to enable draft entity autosaving.
     *
     * @returns {Draft}
     */
    get draft() : Draft {
        return this._draft;
    }

    /**
     * Setter for the private field draft. Used as a hook to enable debounced draft entity autosaving.
     *
     * @param draft
     */
    set draft(draft: Draft) {
        this._draft = draft;
        this.draftSubject.next(draft);
    }

    constructor(
        private draftService: DraftService, private articleService: ArticleService, private titleService: Title,
        private route : ActivatedRoute, private router : Router) {}

    ngOnInit() {
        // Could either fetch data from the server again or simply pass data from the parent component?
        // http://stackoverflow.com/questions/33308340/how-to-inject-data-into-angular2-component-created-from-a-router
        // No way in router 3.0.0-beta.2 to pass data across components. Possibly best to refetch as data passed through
        // may be outdated by the time it is used.
        let id = +this.route.snapshot.params['id'];
        this.draftService.getDraft(id).subscribe(
            draft => {
                this.draft = draft;
                this.titleService.setTitle("One Rocket Road | Draft: " + draft.title);

                // Subscribe to changes and autosave when changes are detected after debouncing
                this.draftSubscription = this.draftStream
                    .debounceTime(1000)
                    .subscribe(() => this.autosave());
            },
            error => console.log(error)
        );
    }

    /**
     * Sets the view state on the draft component. Is either one of DraftViewState.Edit or
     * DraftViewState.View.
     *
     * @param state The state to set.
     */
    public setViewState(state : DraftViewState) {
        this.viewState = state;
    }

    public setDraftHero(value: number) {
        if (value != Number.NaN && value > 0) {
            this.draft.heroId = value;
            this.draftService.updateDraft(this.draft).subscribe(draft => {
                this.draft = draft;
            }, error => {
                this.draft.heroId = null;
                this.draft.hero = null;
            });
        }
    }

    /**
     * If the body of the draft is less than 200 words, highlight the word count tracker in
     * red to represent an extremely short draft (less than approximately 3 paragraphs).
     *
     * @returns {string} The color the word count should be highlighted in.
     */
    public showWordCountWarning() : string {
        return this.draft.wordCount() > 200 ? "black" : "red";
    }

    /**
     * A human-readable statement representing the current wordcount of the draft body. Mainly
     * used to enable pluralization when dealing with not one word.
     *
     * @returns {string}
     */
    public wordCountStatement() : string {
        let wordCount = this.draft.wordCount();
        if (wordCount == 1) {
            return "1 word";
        }
        return wordCount + " words";
    }

    /**
     *
     */
    public autosave() {
        this.isSaving = true;
        this.draftService.updateDraft(this.draft).subscribe(() => this.isSaving = false);
    }

    /**
     * Publishes a draft as an article. This creates an article from the draft, puts the article on the server,
     * then once complete, deletes the original draft and redirects to the newly created article.
     */
    public publishDraft() : void {
        this.isPublishing = true;
        let article = Article.createFromDraft(this.draft);

        // In turn, create the article, then delete the draft.
        this.articleService.createArticle(article)
            .subscribe(articleFromServer => {
                // Only attempt to delete the draft once we are sure the article was created successfully.
                this.draftSubscription.unsubscribe();
                this.draftService.deleteDraft(this.draft).subscribe(() => {
                    // Everything succeeded. Navigate away to the newly created article.
                    article = articleFromServer;
                    this.router.navigate(['article', article.publicationYear(),
                        article.publicationMonth(), article.publicationDay(), article.slug()])
                });
            });
    }

    /**
     * Deletes a draft on the server, and navigates back to the drafts listing page.
     */
    public deleteDraft() : void {
        // Unsubscribe before we delete the draft because there may be debounced changes waiting to
        // take place, causing a race condition. If we are deleting we don't care about those changes anyway.
        this.draftSubscription.unsubscribe();
        this.draftService.deleteDraft(this.draft).subscribe(response => {
            this.router.navigate(['drafts']);
        });
    }

    /**
     * Called on ngModelChange of the draft body.
     *
     * @param body
     */
    public autosaveDraftBody(body: string) {
        this.draft = new Draft(this.draft.id, this.draft.title, body, this.draft.author, this.draft.authorName,
            this.draft.heroId, this.draft.hero, this.draft.dueAt, this.draft.createdAt, this.draft.updatedAt);
    }

    public autosaveDraftTitle(title: string) {
        this.draft = new Draft(this.draft.id, title, this.draft.body, this.draft.author, this.draft.authorName,
            this.draft.heroId, this.draft.hero, this.draft.dueAt, this.draft.createdAt, this.draft.updatedAt);
    }
}
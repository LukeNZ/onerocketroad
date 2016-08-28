import {Component, OnInit} from "@angular/core";
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router, ROUTER_DIRECTIVES} from "@angular/router";
import {FORM_DIRECTIVES, FormControl, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';
import {DraftService, ArticleService, TaggableService} from "../services";
import {Draft, Article, Tag} from "../classes";
import {ContentEditableDirective, DraggableDirective, DroppableDirective} from "../directives";
import {DraftViewState} from "../enums";
import {MarkdownPipe} from "../pipes";

import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

@Component({
    selector: 'draft',
    templateUrl: '/angular/views/draft.template.html',
    directives: [ContentEditableDirective, DraggableDirective, DroppableDirective,
        ROUTER_DIRECTIVES, FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
    providers: [DraftService, ArticleService, TaggableService],
    pipes: [MarkdownPipe]
})
export class DraftComponent implements OnInit {
    private _draft: Draft;
    public isSaving: boolean = false;
    public isPublishing: boolean = false;
    public draftViewState = DraftViewState;
    public viewState: DraftViewState = DraftViewState.Edit;

    public bodyFormControl = new FormControl();

    public draftSubject: Subject<Draft> = new Subject<Draft>();
    public draftStream: Observable<Draft> = this.draftSubject.asObservable();
    public draftSubscription: Subscription;

    public transientTagValue: string;

    /**
     * Getter for the private variable draft. Used to enable draft entity autosaving.
     *
     * @returns {Draft}
     */
    get draft():Draft {
        return this._draft;
    }

    /**
     * Setter for the private field draft. Used as a hook to enable debounced draft entity autosaving.
     *
     * @param draft
     */
    set draft(draft:Draft) {
        this._draft = draft;
        this.draftSubject.next(draft);
    }

    /**
     * Constructor to instantiate a DraftComponent.
     *
     * @param draftService
     * @param articleService
     * @param titleService
     * @param route
     * @param router
     */
    constructor(private draftService:DraftService, private articleService:ArticleService, private titleService:Title,
                private route:ActivatedRoute, private router:Router) {
    }

    /**
     *
     */
    ngOnInit() {
        // http://stackoverflow.com/questions/33308340/how-to-inject-data-into-angular2-component-created-from-a-router
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
    public setViewState(state:DraftViewState) {
        this.viewState = state;
    }

    /**
     * Sets the draft hero image. Immediately sets it for responsiveness, then sends a request to
     * store the change. If the image id is acceptable, return a new draft; if not, restore the hero
     * and hero id's to their defauls.
     *
     * @param value     The id of the image to set as the hero image for the draft.
     */
    public setDraftHero(value:number) {
        let originalHeroId = this.draft.heroId;
        let originalHero = this.draft.hero;

        // Validate
        if (value != Number.NaN && value > 0) {
            // Set temporary new value
            this.draft.heroId = value;
            // Update draft
            this.draftService.updateDraft(this.draft).subscribe(draft => {
                // Value was acceptable, permanently store the change.
                this.draft = draft;
            }, error => {
                // Values were not acceptable, restore to original - no changes made.
                this.draft.heroId = originalHeroId;
                this.draft.hero = originalHero;
            });
        }
    }

    public addTag(event: KeyboardEvent) : void {
        if (event.key === "Enter") {
            let tag = Tag.create();
            tag.value = this.transientTagValue;
            // TaggableService.addTagToDraft

            // clear input
        }
        // push a tag onto the draft
        // TaggableService.addTagToDraft
        // replace tag
    }

    public deleteTag(value: any) : void {

    }

    /**
     * If the body of the draft is less than 200 words, highlight the word count tracker in
     * red to represent an extremely short draft (less than approximately 3 paragraphs).
     *
     * @returns {string} The color the word count should be highlighted in.
     */
    public showWordCountWarning(): string {
        return this.draft.wordCount() > 200 ? "black" : "red";
    }

    /**
     * A human-readable statement representing the current wordcount of the draft body. Mainly
     * used to enable pluralization when dealing with not one word.
     *
     * @returns {string}
     */
    public wordCountStatement(): string {
        let wordCount = this.draft.wordCount();
        if (wordCount == 1) {
            return "1 word";
        }
        return wordCount + " words";
    }

    /**
     *  When called, with autosave the article, and toggle the state of the `isSaving` property.
     */
    public autosave() {
        this.isSaving = true;
        this.draftService.updateDraft(this.draft).subscribe(() => this.isSaving = false);
    }

    /**
     * Publishes a draft as an article. This creates an article from the draft, puts the article on the server,
     * then once complete, deletes the original draft and redirects to the newly created article.
     */
    public publishDraft(): void {
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
    public deleteDraft():void {
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
    public autosaveDraftBody(body: string): void {
        let newDraft = Draft.create(this.draft);
        newDraft.body = body;
        this.draft = newDraft;
    }

    /**
     * Called on ngModelChange of the draft title.
     *
     * @param title
     */
    public autosaveDraftTitle(title: string): void {
        let newDraft = Draft.create(this.draft);
        newDraft.title = title;
        this.draft = newDraft;
    }
}
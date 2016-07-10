import {Component, OnInit} from "@angular/core";
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router, ROUTER_DIRECTIVES} from "@angular/router";
import {FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {DraftService} from "../Services/DraftService.service";
import {Draft} from "../Classes/Draft.class";
import {ContentEditableDirective} from "../Directives/ContentEditable.directive";
import {DraftViewState} from "../Enums/DraftViewState.enum";
import {MarkdownPipe} from "../Pipes/MarkdownPipe.pipe";
import {Article} from "../Classes/Article.class";
import {ArticleService} from "../Services/ArticleService.service";

import {Subscription, Observable} from "rxjs/Rx";

@Component({
    selector: 'draft',
    templateUrl: '/angular/views/draft.template.html',
    directives: [ContentEditableDirective, ROUTER_DIRECTIVES, FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
    providers: [DraftService, ArticleService],
    pipes: [MarkdownPipe]
})
export class DraftComponent implements OnInit {
    public draft: Draft;
    public isSaving: boolean = false;
    public isPublishing: boolean = false;
    public draftViewState = DraftViewState;
    public viewState: DraftViewState = DraftViewState.Edit;

    public bodyFormControl = new FormControl();
    public draftSubscription: Subscription;

    constructor(
        private draftService: DraftService,
        private articleService: ArticleService,
        private titleService: Title,
        private route : ActivatedRoute,
        private router : Router) {
    }

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

                // This is a poor substitute for object change detection. Ideally, we would see if any changes
                // have been made to the draft property, and debounce and subscribe to that. This does not appear
                // to be possible, so we subscribe to changes off the form control for the body only.
                this.draftSubscription = this.bodyFormControl
                    .valueChanges
                    .debounceTime(3000)
                    .subscribe(() => {
                        this.autosave();
                    });
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
    public publishDraft() {
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
    public deleteDraft() {
        // Unsubscribe before we delete the draft because there may be debounced changes waiting to
        // take place, causing a race condition. If we are deleting we don't care about those changes anyway.
        this.draftSubscription.unsubscribe();
        this.draftService.deleteDraft(this.draft).subscribe(response => {
            this.router.navigate(['drafts']);
        });
    }
}
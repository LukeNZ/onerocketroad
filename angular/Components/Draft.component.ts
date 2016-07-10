import {Component, OnInit} from "@angular/core";
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router, ROUTER_DIRECTIVES} from "@angular/router";
import {
    FORM_DIRECTIVES,
    REACTIVE_FORM_DIRECTIVES,
    FormBuilder,
    FormGroup,
    FormControl
} from '@angular/forms';
import {DraftService} from "../Services/DraftService.service";
import {Draft} from "../Classes/Draft.class";
import {ContentEditableDirective} from "../Directives/ContentEditable.directive";
import {DraftViewState} from "../Enums/DraftViewState.enum";
import {MarkdownPipe} from "../Pipes/MarkdownPipe.pipe";

@Component({
    selector: 'draft',
    templateUrl: '/angular/views/draft.template.html',
    directives: [ContentEditableDirective, ROUTER_DIRECTIVES, FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
    providers: [DraftService],
    pipes: [MarkdownPipe]
})
export class DraftComponent implements OnInit {
    public draft: Draft;
    public isSaving: boolean = false;
    public isPublishing: boolean = false;
    public draftViewState = DraftViewState;
    public viewState: DraftViewState = DraftViewState.Edit;

    public bodyFormControl = new FormControl();

    constructor(
        private draftService: DraftService,
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
                this.bodyFormControl
                    .valueChanges
                    .debounceTime(3000)
                    .subscribe(() => {
                        this.autosave();
                    });
            },
            error => console.log(error)
        );
    }

    /***
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
     * @returns {string}
     */
    public showWordCountWarning() {
        return this.draft.wordCount() > 200 ? "black" : "red";
    }

    /**
     *
     */
    public autosave() {
        this.isSaving = true;
        this.draftService.updateDraft(this.draft).subscribe(() => this.isSaving = false);
    }

    public publishDraft() {
        this.isPublishing = true;
    }

    public deleteDraft() {

    }
}
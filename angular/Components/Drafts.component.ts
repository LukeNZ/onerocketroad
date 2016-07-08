import {Component, OnInit} from '@angular/core';
import {Draft} from "../Classes/Draft.class";
import {DraftService} from "../Services/DraftService.service";

@Component({
    selector: 'drafts',
    templateUrl: '/angular/views/drafts.template.html',
    providers: [DraftService]
})

/**
 * Represents the component which handles multiple Draft instances.
 */
export class DraftsComponent implements OnInit {
    public newDraftModel : Draft = new Draft();
    public isCreatingDraft : boolean = false;
    public drafts : Draft[] = [];

    constructor(private draftService: DraftService) {
    }

    ngOnInit() {
        this.draftService.getAllDrafts().then(drafts => {
            this.drafts = drafts;
        })
    }

    /**
     * Creates a draft for an article, rendering only the title.
     */
    public createDraft() {
        this.isCreatingDraft = true;
        this.draftService.createDraft(this.newDraftModel).then(draft => {
            this.drafts.push(draft);
            this.isCreatingDraft = false;
        });
    }
}
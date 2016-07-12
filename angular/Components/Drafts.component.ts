import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {Draft} from "../classes";
import {DraftService} from "../services";

@Component({
    selector: 'drafts',
    templateUrl: '/angular/views/drafts.template.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [DraftService],
})

/**
 * Represents the component which handles multiple Draft instances.
 */
export class DraftsComponent implements OnInit {
    public newDraftModel : Draft = new Draft(null, "", "", null, null, null, null, null);
    public isCreatingDraft : boolean = false;
    public drafts : Draft[] = [];

    constructor(private draftService: DraftService,
                private titleService: Title) {
        this.titleService.setTitle("One Rocket Road | Drafts");
    }

    ngOnInit() {
        this.draftService.getAllDrafts().subscribe(
            drafts => this.drafts = drafts,
            error => console.log(error)
        );
    }

    /**
     * Creates a draft for an article, rendering only the title and the author.
     */
    public createDraft() : void {
        this.isCreatingDraft = true;
        this.draftService.createDraft(this.newDraftModel).subscribe(draft => {
            this.drafts.push(draft);
            this.isCreatingDraft = false;
        }, error => console.log(error));
    }
}
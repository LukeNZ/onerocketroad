import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ROUTER_DIRECTIVES, Router, ActivatedRoute} from '@angular/router';
import {Draft, Article} from "../classes";
import {DraftService, ArticleService} from "../services";
import {DraggableDirective, DroppableDirective} from "../directives";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/forkJoin';

@Component({
    selector: 'drafts',
    templateUrl: '/angular/views/drafts.template.html',
    directives: [ROUTER_DIRECTIVES, DraggableDirective, DroppableDirective],
    providers: [DraftService, ArticleService],
})

/**
 * Represents the component which handles multiple Draft instances.
 */
export class DraftsComponent implements OnInit {
    public newDraftModel : Draft = Draft.create();
    public isCreatingDraft : boolean = false;
    public drafts : Draft[] = [];
    public articles : Article[] = [];

    constructor(private draftService: DraftService,
                private articleService: ArticleService,
                private route : ActivatedRoute,
                private router : Router,
                private titleService: Title) {
        this.titleService.setTitle("One Rocket Road | Drafts");
    }

    /**
     * On DraftsComponent angular initialization, fetch recent articles and all drafts
     * from the backing store and assign them to their respective component properties.
     */
    ngOnInit() {
        Observable.forkJoin(
            this.draftService.getAllDrafts(),
            this.articleService.getRecentArticles()
        ).subscribe(data => {
            this.drafts = data[0];
            this.articles = data[1];
        },
        err => console.log(err));
    }

    /**
     * Creates a draft for an article, rendering only the title and the author.
     */
    public createDraft() : void {
        this.isCreatingDraft = true;
        this.draftService.createDraft(this.newDraftModel).subscribe(draft => {
            this.router.navigate(['draft', draft.id]);
        }, error => console.log(error));
    }

    /**
     * Deletes a draft permanently.
     *
     * @param draft The draft to delete.
     */
    public deleteDraft(draft: Draft) : void {
        this.draftService.deleteDraft(draft).subscribe(() => {
            this.drafts.splice(this.drafts.indexOf(draft), 1);
        });
    }
}
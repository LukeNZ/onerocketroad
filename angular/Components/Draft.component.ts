import {Component, OnInit} from "@angular/core";
import {DraftService} from "../Services/DraftService.service";
import {Draft} from "../Classes/Draft.class";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'draft',
    templateUrl: '/angular/views/draft.template.html',
    providers: [DraftService]
})
export class DraftComponent implements OnInit {
    public draft: Observable<Draft> = new Draft(); // initialize to an empty draft
    public isSaving: boolean = false;
    public isPublishing: boolean = false;

    constructor(
        private draftService: DraftService,
        private route : ActivatedRoute,
        private router : Router) {}

    ngOnInit() {
        // Could either fetch data from the server again or simply pass data from the parent component?
        // http://stackoverflow.com/questions/33308340/how-to-inject-data-into-angular2-component-created-from-a-router
        // No way in router 3.0.0-beta.2 to pass data across components. Possibly best to refetch as data passed through
        // may be outdated by the time it is used.

        let id = +this.route.snapshot.params['id'];
        this.draftService.getDraft(id).then(draft => {
            this.draft = draft;
        }).catch(err => {
            // do nothing
        });
    }
}
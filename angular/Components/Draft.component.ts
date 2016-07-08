import {Component, OnInit, OnDestroy} from "@angular/core";
import {DraftService} from "../Services/DraftService.service";
import {Draft} from "../Classes/Draft.class";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'draft',
    templateUrl: '/angular/views/draft.template.html',
    providers: [DraftService]
})
export class DraftComponent implements OnInit, OnDestroy {
    public draft: Draft;

    constructor(
        private draftService: DraftService,
        private route : ActivatedRoute,
        private router : Router) {}

    ngOnInit() {
        // Could either fetch data from the server again or simply pass data from the parent component?
        // http://stackoverflow.com/questions/33308340/how-to-inject-data-into-angular2-component-created-from-a-router
    }

    ngOnDestroy() {

    }
}
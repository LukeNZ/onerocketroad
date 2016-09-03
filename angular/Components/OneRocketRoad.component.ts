import {Component} from '@angular/core';
import {AuthenticationService} from "../Services/AuthenticationService.service";

@Component({
    selector: 'body',
    templateUrl: '/angular/views/onerocketroad.template.html'
})
export class OneRocketRoadComponent {

    public isArticle = false;

    constructor(private authenticationService: AuthenticationService) {}

    public onActivate(event: any): void {
        this.isArticle = event.route && (event.route.component.name == "DraftComponent"
            || event.route.component.name == "ArticleComponent");
    }
}
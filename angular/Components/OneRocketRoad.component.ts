import {Component, Type} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {AuthenticationService} from '../services';

@Component({
    selector: 'body',
    templateUrl: '/angular/views/onerocketroad.template.html',
    directives: [ROUTER_DIRECTIVES]
})
export class OneRocketRoadComponent {

    public isArticle = false;

    constructor(private authenticationService: AuthenticationService) {}

    public onActivate(event: any): void {
        this.isArticle = event.route && (event.route.component.name == "DraftComponent" || event.route.component.name == "ArticleComponent");
    }
}
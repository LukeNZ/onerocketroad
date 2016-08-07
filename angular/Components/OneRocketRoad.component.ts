import {Component, Type} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {AuthenticationService} from '../services';

@Component({
    selector: 'one-rocket-road',
    templateUrl: '/angular/views/onerocketroad.template.html',
    directives: [ROUTER_DIRECTIVES]
})
export class OneRocketRoadComponent {
    constructor(private authenticationService: AuthenticationService) {}
}
import {Component} from '@angular/core';
import {ActivatedRoute, Router, ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'home',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: '/angular/views/home.template.html'
})
export class HomeComponent {
    constructor(
        private route : ActivatedRoute,
        private router : Router) {}
}
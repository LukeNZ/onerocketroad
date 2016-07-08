import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {ArticlesComponent} from './Articles.component';
import {DraftsComponent} from './Drafts.component';

@Component({
    selector: 'one-rocket-road',
    templateUrl: '/angular/views/onerocketroad.template.html',
    directives: [ROUTER_DIRECTIVES],
    precompile: [DraftsComponent, ArticlesComponent]
})
export class OneRocketRoadComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
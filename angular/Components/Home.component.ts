import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ROUTER_DIRECTIVES} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {HomeService} from "../services";
import {Home} from "../classes";
import {ArticleRouterLinkDirective} from "../directives";

@Component({
    selector: 'home',
    templateUrl: '/angular/views/home.template.html',
    directives: [ROUTER_DIRECTIVES, ArticleRouterLinkDirective],
    providers: [HomeService]
})
export class HomeComponent implements OnInit {
    public home: Home;

    constructor(
        private homeService: HomeService,
        private route : ActivatedRoute,
        private router : Router,
        private titleService: Title) {
        this.titleService.setTitle("One Rocket Road");
    }
    
    ngOnInit() {
        this.homeService.getHome().subscribe(home => {
            this.home = home;
        });
    }
}
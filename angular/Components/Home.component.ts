import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HomeService} from "../services";
import {Home} from "../classes";

@Component({
    selector: 'home',
    templateUrl: '/angular/views/home.template.html',
    providers: [HomeService]
})
export class HomeComponent implements OnInit {
    public home: Home;

    constructor(
        private homeService: HomeService,
        private route : ActivatedRoute,
        private router : Router) {}
    
    ngOnInit() {
        this.homeService.getHome().subscribe(home => {
            this.home = home;
        });
    }
}
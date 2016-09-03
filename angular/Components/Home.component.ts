import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {Home} from "../Classes/Home.class";
import {HomeService} from "../Services/HomeService.service";

@Component({
    selector: 'home',
    templateUrl: '/angular/views/home.template.html'
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
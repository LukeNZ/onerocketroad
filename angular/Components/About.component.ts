import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'about',
    templateUrl: '/angular/views/about.template.html'
})
export class AboutComponent {

    constructor(private titleService: Title) {
        this.titleService.setTitle("One Rocket Road | About");
    }
}
import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'login',
    templateUrl: '/angular/views/login.template.html',
})
export class LoginComponent {

    constructor(private titleService: Title) {
        this.titleService.setTitle("One Rocket Road | Login");
    }

    ngOnInit() {
    }
}
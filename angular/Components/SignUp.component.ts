import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'sign-up',
    templateUrl: '/angular/views/sign-up.template.html',
})
export class SignUpComponent {

    constructor(private titleService: Title) {
        this.titleService.setTitle("One Rocket Road | Sign Up");
    }

    ngOnInit() {
    }
}
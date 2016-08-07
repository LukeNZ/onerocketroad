import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {AuthenticationService} from "../services";
import {Router} from "@angular/router";

@Component({
    selector: 'signup',
    templateUrl: '/angular/views/signup.template.html'
})
export class SignUpComponent {
    private isSigningUp: boolean = false;

    constructor(private titleService: Title,
                private authenticationService: AuthenticationService, private router: Router) {
        this.titleService.setTitle("One Rocket Road | Sign Up");
    }

    public signUp(email, password) : void {
        this.isSigningUp = true;
        this.authenticationService.signUp(email, password)
            .subscribe(outcome => {
                if (outcome) {
                    this.router.navigate(['auth', 'login']);
                } else {
                    this.isSigningUp = false;
                }
            });
    }
}
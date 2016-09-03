import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {AuthenticationService} from "../Services/AuthenticationService.service";

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

    public signUp(email, fullname, password) : void {
        this.isSigningUp = true;
        this.authenticationService.signUp(email, fullname, password)
            .subscribe(outcome => {
                this.router.navigate(['auth', 'login']);
            }, error => {
                this.isSigningUp = false;
            });
    }
}
import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {AuthenticationService} from "../services";
import {Router} from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: '/angular/views/login.template.html'
})
export class LoginComponent {
    private isLoggingIn: boolean = false;

    constructor(private authenticationService: AuthenticationService,
                private titleService: Title, private router:Router) {
        this.titleService.setTitle("One Rocket Road | Login");
    }

    /**
     * Attempt to log a user in via their email and password. If successful, navigate them away
     * to the home page. If unsuccessful, let them reattempt to login.
     *
     * @param email
     * @param password
     */
    public login(email, password) : void {
        this.isLoggingIn = true;
        this.authenticationService.login(email, password)
            .subscribe(outcome => {
                if (outcome) {
                    this.router.navigate(['']);
                } else {
                    this.isLoggingIn = false;
                }
            }, error => {
                this.isLoggingIn = false;
            });
    }
}
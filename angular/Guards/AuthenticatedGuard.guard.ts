import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthenticationService} from '../services';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
    constructor(private authenticationService: AuthenticationService) {}

    public canActivate() : boolean {
        return this.authenticationService.isLoggedIn;
    }
}
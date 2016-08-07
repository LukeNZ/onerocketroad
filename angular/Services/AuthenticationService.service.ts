import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {AbstractService} from "../services";
import {Observable} from "rxjs/Rx";

@Injectable()
export class AuthenticationService extends AbstractService {
    private _isLoggedIn: boolean = false;

    /**
     * Retrieves whether the user is logged in or not.
     *
     * @returns {boolean}   Is the user logged in or not?
     */
    get isLoggedIn() : boolean {
        return this._isLoggedIn;
    }

    /**
     * Construct the ser
     *
     * @param http
     */
    constructor(private http: Http) {
        super();
        this._isLoggedIn = !!localStorage.getItem('authtoken');
    }

    /**
     * Attempts to log the claimed identity of a user in. If successful, sets a token in the client,
     * if not; allows another attempt.
     *
     * @param email
     * @param password
     * @returns {Observable<boolean>}
     */
    public login(email, password) : Observable<boolean> {
        return this.http.post('/api/auth/login', { email: email, password: password })
            .map(this.parseJson)
            .map((model: any) => {
                if (model.success) {
                    this._isLoggedIn = true;
                    localStorage.setItem('authtoken', model.authtoken);
                    // TODO: Figure out why PHPStorm does not like model.authtoken ("unresolved variable")
                }
                return model.success;
            })
            .catch(this.handleError);
    }

    /**
     * Log the user out of the application. Remove their localstorage token, and set the
     * application state isLoggedIn property to false.
     */
    public logout() : void {
        localStorage.removeItem('authtoken');
        this._isLoggedIn = false;
    }

    public signUp(email, password) : Observable<boolean> {
        return this.http.post('/api/auth/signup', { email: email, password: password })
            .map(this.parseJson)
            .map((model: any) => {
                return true;
            });
    }
}
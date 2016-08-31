import {Observable} from "rxjs/Observable";
import {Headers} from "@angular/http";

export abstract class AbstractService {

    /**
     * We will always want to parse the reponse body from the server, but response.json()
     * will return an error if no content (204) is present. In this case, just return an empty object.
     *
     * @param response
     * @returns any
     */
    protected parseJson(response: any) {
        if (response.status != 204) {
            return response.json();
        }
        return null;
    }

    /**
     * Handles any 400 or 500-level server responses by logging their details to the console.
     *
     * @param error
     * @returns {ErrorObservable}
     */
    protected handleError(error: any) : Observable<any> {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    /**
     * Creates a default headers object for use on each request that ensures any server marks it as an AJAX request.
     *
     * TODO: Uncomment Content-Type header entry after this is fixed: https://github.com/angular/angular/commit/7cd4741fcbbea6d58281b3055d1ae7691de1662b
     *
     * @returns {Headers}
     */
    private headerFactory() : Headers {
        let headers = new Headers();
        headers.append('X-Requested-With', 'XMLHttpRequest');
        //headers.append('Content-Type', 'application/json');
        return headers;
    }

    /**
     * Creates an object of Headers with an auth token.
     *
     * @returns {{headers: Headers}}
     */
    protected headersWithAuth() : { headers: Headers } {
        let headers = this.headerFactory();

        let authToken = localStorage.getItem('authtoken');

        if (authToken != null) {
            headers.append('Authorization', `bearer ${authToken}`);
        }

        return { headers };
    }

    /**
     * Creates an object of Headers without an auth token.
     *
     * @returns {{headers: Headers}}
     */
    protected headersNoAuth() : { headers: Headers } {
        let headers = this.headerFactory();
        return { headers };
    }
}
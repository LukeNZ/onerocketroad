import {Observable} from "rxjs/Observable";

export abstract class AbstractService {

    /**
     * We will always want to parse the reponse body from the server, but response.json()
     * will return an error if no content (204) is present. In this case, just return an empty object.
     *
     * @param response
     * @returns {Observable<any>}
     */
    protected parseJson(response: any) : Observable<any> {
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
    protected handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
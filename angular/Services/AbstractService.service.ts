import {Observable} from "rxjs/Rx";

export abstract class AbstractService {

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
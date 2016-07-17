import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {AbstractService} from "../services";
import {Tag} from "../classes";
import {Observable} from "rxjs/Rx";

@Injectable()
export class TaggableService extends AbstractService {
    constructor(private http: Http) {
        super();
    }
}

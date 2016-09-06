import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {AbstractService} from "./AbstractService.service";

@Injectable()
export class StyleGuideService extends AbstractService {
    constructor(private http: Http) {
        super();
    }

    public getStyleGuide() : Observable<string> {
        return this.http.get('/angular/views/markdownelementreference.md').map(response => response.text());
    }
}

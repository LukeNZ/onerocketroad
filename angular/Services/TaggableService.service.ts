import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {AbstractService} from "./AbstractService.service";

@Injectable()
export class TaggableService extends AbstractService {
    constructor(private http: Http) {
        super();
    }

    /*public addTagToDraft(draft: Draft, tag: Tag) : Observable<Draft> {
        return this.http.patch('/taggables/add', { draft: draft, tag: tag}, this.authToken())
            .map(this.parseJson)
            .map(response => {

            });
    }

    public deleteTagFromDraft(draft: Draft, tag: Tag) : Observable<number> {
        return this.http.patch('/taggables/delete', { draft: draft, tag: tag }, this.authToken())
            .map(this.parseJson)
            .map(response => {

            });
    }*/
}

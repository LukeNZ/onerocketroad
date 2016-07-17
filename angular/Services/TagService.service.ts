import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {AbstractService} from "../services";
import {Tag} from "../classes";
import {Observable} from "rxjs/Rx";

@Injectable()
export class TagService extends AbstractService {
    constructor(private http: Http) {
        super();
    }

    public getAllTags() : Observable<Tag[]> {
        return null;
    }

    public getTag(tagId: number) : Observable<Tag> {
        return null;
    }

    public createTag(tag: Tag) : Observable<Tag> {
        return null;
    }

    public updateTag(tag: Tag) : Observable<Tag> {
        return null;
    }

    public deleteTag(tag: Tag) : Observable<number> {
        return null;
    }
}

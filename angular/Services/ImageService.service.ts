import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import {AbstractService} from "../services";
import {Image} from "../classes";

import {Observable} from "rxjs/Rx";

@Injectable()
export class ImageService extends AbstractService {

    constructor(private http: Http) {
        super();
    }

    public getImages() : Observable<Image[]> {
        return this.http.get('/api/images/get/all')
    }

    public getImage() : Observable<Image[]> {
        return null;
    }

    public uploadImage() : Observable<any> {
        return null;
    }

    public deleteImage() : Observable<any> {
        return null;
    }
}
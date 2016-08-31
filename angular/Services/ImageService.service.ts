import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {AbstractService} from "../services";
import {Image} from "../classes";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ImageService extends AbstractService {

    constructor(private http: Http) {
        super();
    }

    /**
     * Get all images from the server.
     * GET: /api/images/all
     *
     * @returns {Observable<Image[]>}   All images from the server.
     */
    public getImages() : Observable<Image[]> {
        return this.http.get('/api/images/all', this.headersWithAuth())
            .map(this.parseJson)
            .map(models => {
                return models.map(model => {
                    return Image.create(model);
                });
            })
            .catch(this.handleError);
    }

    /**
     * Get an image by its id from the server.
     * GET: /api/images/get/:id
     *
     * @param id    The id of the image to be fetched
     * @returns {Observable<Image>}     The image specified by the id.
     */
    public getImage(id: number) : Observable<Image> {
        return this.http.get('/api/images/get/' + id, this.headersWithAuth())
            .map(this.parseJson)
            .map(model => {
                return Image.create(model);
            })
            .catch(this.handleError);
    }

    public deleteImage() : Observable<any> {
        return null;
    }
}
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import {Observable} from "rxjs/Observable";
import {AbstractService} from "./AbstractService.service";
import {Home} from "../Classes/Home.class";
import {Article} from "../Classes/Article.class";

@Injectable()
export class HomeService extends AbstractService {
    
    constructor(private http: Http) {
        super();
    }

    /**
     * Fetches homepage data from the server before constructing and returning a Home object.
     * GET: /api/home/get
     *
     * @returns {Observable<Home>}
     */
    public getHome() : Observable<Home> {
        return this.http.get('/api/home/get', this.headersNoAuth())
            .map(response => response.json())
            .map(models => {
                if (models != null) {
                    let articles = models.map(model => {
                        return Article.create(model);
                    });
                    return new Home(articles);
                }
                return new Home([]);
            })
            .catch(this.handleError);
    }
}
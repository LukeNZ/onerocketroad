import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import {AbstractService} from "../services";
import {Home, Article} from "../classes";

import {Observable} from "rxjs/Observable";

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
        return this.http.get('/api/home/get')
            .map(response => {
                let articles = response.json().map(article => {
                    return new Article(article.id, article.title, article.body, article.authorName,
                        article.createdAt, article.updatedAt);
                });
                return new Home(articles);
            })
            .catch(this.handleError);
    }
}
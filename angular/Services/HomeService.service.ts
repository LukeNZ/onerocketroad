import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import {AbstractService} from "./AbstractService.service";
import {Home} from "../Classes/Home.class";
import {Article} from "../Classes/Article.class";

import {Observable} from "rxjs/Rx";

@Injectable()
export class HomeService extends AbstractService {
    constructor(private http: Http) {
        super();
    }

    public getHome() : Observable<Home> {
        return this.http.get('/api/home/get').map(res => {
            let articles = res.json().map(article => {
                return new Article(article.id, article.title, article.body, article.authorName,
                    article.createdAt, article.updatedAt);
            });
            return new Home(articles);
        });
    }
}
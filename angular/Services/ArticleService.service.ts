import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import {AbstractService} from "./AbstractService.service";
import {Article} from "../Classes/Article.class";

import {Observable} from "rxjs/Rx";

@Injectable()
export class ArticleService extends AbstractService {
    constructor(private http: Http) {
        super();
    }

    public getArticle() : Observable<Article> {
        return null;
    }

    public createArticle(article : Article) : Observable<Article> {
        return null;
    }

    public updateArticle(article : Article) : Observable<number> {
        return null;
    }

    public deleteArticle(article: Article) : Observable<number> {
        return null;
    }
}
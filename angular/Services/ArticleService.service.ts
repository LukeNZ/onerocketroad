import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {AbstractService} from "../services";
import {Article} from "../classes";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ArticleService extends AbstractService {
    constructor(private http: Http) {
        super();
    }

    public getArticles() : Observable<Article[]> {
        return null;
    }

    /**
     * Get the next 10 articles from a predefined offset cursor, sorted in descending
     * order by publication date.
     *
     * @param cursor    An optional parameter defining the offset for where to start
     *  retrieving articles from. If optional, cursor will default to 0.
     * @returns {Observable<Article[]>}
     */
    public getRecentArticles(cursor?: number) : Observable<Article[]> {
        cursor = cursor == null ? 0 : cursor;

        return this.http.get('/api/articles/getrecent/' + cursor)
            .map(this.parseJson)
            .map(models => {
                if (models != null) {
                    return models.map(this.createArticleModel);
                }
                return [];
            })
            .catch(this.handleError);
    }

    /**
     * Get an article by its year, month, & day of publication, as well as its slug. All three are
     * needed to correctly fetch the article.
     * GET: /api/articles/get/:year/:month/:day/:slug
     *
     * @param year      The year of article publication.
     * @param month     The month of article publication.
     * @param day       The day of article publication.
     * @param slug      The slugged title of the article.
     * @returns {Observable<Article>}   The article specified by the above parameters.
     */
    public getArticle(year: string, month: string, day: string, slug: string) : Observable<Article> {
        return this.http.get('/api/articles/get/' + year + '/' + month + '/' + day + "/" + slug)
            .map(this.parseJson)
            .map(this.createArticleModel)
            .catch(response => {
                if (response.status == 404) {
                    return Observable.throw("Article not found");
                }
                return this.handleError(response);
            });
    }

    public getNeighbourArticles() : Observable<Article[]> {
        return null;
    }

    /**
     * Creates (and therefore publishes) an article on the server.
     * PUT: /api/articles/create.
     * 
     * @param article   The article to be created on the server.
     * @returns {Observable<Article>}   The article returned from the server.
     */
    public createArticle(article : Article) : Observable<Article> {
        return this.http.put('/api/articles/create', article, this.authToken())
            .map(this.parseJson)
            .map(this.createArticleModel)
            .catch(this.handleError);
    }

    public updateArticle(article : Article) : Observable<number> {
        return null;
    }
    
    public deleteArticle(article: Article) : Observable<number> {
        return null;
    }

    /**
     * Creates an article model from data on the server.
     *
     * @private
     * @param model
     * @returns {Article}
     */
    private createArticleModel(model: any) {
        return Article.create(model);
    }
}
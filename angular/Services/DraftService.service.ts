import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Draft} from "../Classes/Draft.class";

@Injectable()
export class DraftService {

    constructor(private http: Http) {}

    /**
     * GET: /api/drafts/all;
     */
    public getAllDrafts() : Promise<Draft[]> {
        return this.http.get('/api/drafts/all')
            .toPromise()
            .then(res => res.json());
    }

    /**
     * Create an initial draft on the server.
     * PUT: /api/drafts/create.
     *
     * @param draft The draft to be created on the server.
     * @returns {Promise<Draft>}    The draft returned from the server, as a promise.
     */
    public createDraft(draft : Draft) : Promise<Draft> {
        return this.http.put('/api/drafts/create', draft)
            .toPromise()
            .then(res => res.json());
    }

    /**
     * PATCH: /api/drafts/update.
     *
     * @param draft
     * @returns {Observable<Response>}
     */
    public updateDraft(draft : Draft) : Promise<number> {
        return this.http.patch('/api/drafts/update', draft)
            .toPromise()
            .then(res => res.status);
    }

    /**
     * DELETE: /api/drafts/delete.
     *
     * @param draft
     */
    public deleteDraft(draft: Draft) : void {

    }

    /**
     * POST: /api/drafts/publish.
     *
     * @param draft
     */
    public publishDraft(draft: Draft) : void {

    }
}
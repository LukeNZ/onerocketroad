import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Draft} from "../Classes/Draft.class";

@Injectable()
export class DraftService {

    constructor(private http: Http) {}

    /**
     * Get all drafts from the server.
     * GET: /api/drafts/all;
     *
     * @returns {Promise<Draft[]>}  All drafts from the server.
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
     * Update an existing draft with new information.
     * PATCH: /api/drafts/update.
     *
     * @param draft The draft to update.
     * @returns {Promise<number>}   A status code indicating the outcome of the operation.
     */
    public updateDraft(draft : Draft) : Promise<number> {
        return this.http.patch('/api/drafts/update', draft)
            .toPromise()
            .then(res => res.status);
    }

    /**
     * Delete a draft from the server with the given id.
     * DELETE: /api/drafts/delete/:id.
     *
     * @param draft
     * @returns {Promise<number>}   A status code indicating the outcome of the operation.
     */
    public deleteDraft(draft: Draft) : Promise<number> {
        return this.http.delete('/api/drafts/delete/' + draft.id)
            .toPromise()
            .then(res => res.status);
    }

    /**
     * Publish a draft, creating an article.
     * POST: /api/drafts/publish.
     *
     * @param draft
     */
    public publishDraft(draft: Draft) : Promise<number> {
        return this.http.post('/api/drafts/publish', draft)
            .toPromise()
            .then(res => res.status);
    }
}
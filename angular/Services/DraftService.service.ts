import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {AbstractService} from '../Services/AbstractService.service';
import {Draft} from "../Classes/Draft.class";
import {Observable} from "rxjs/Rx";

@Injectable()
export class DraftService extends AbstractService {

    constructor(private http: Http) {
        super();
    }

    /**
     * Get all drafts from the server.
     * GET: /api/drafts/all;
     *
     * @returns {Observable<Draft[]>}  All drafts from the server.
     */
    public getAllDrafts() : Observable<Draft[]> {
        return this.http.get('/api/drafts/all')
            .map(res => res.json())
            .catch(this.handleError);
    }

    /**
     * Get a draft by its ID from the server.
     * GET: /api/drafts/get/:id
     *
     * @param draftId   The id of the draft to be fetched.
     * @returns {Observable<Draft>}    The draft specified by the id.
     */
    public getDraft(draftId : number) : Observable<Draft> {
        return this.http.get('/api/drafts/get/' + draftId)
            .map(res => {
                let model = res.json();
                return new Draft(model.id, model.title, model.body, null, model.authorName,
                    model.dueAt, model.createdAt, model.updatedAt);
            })
            .catch(this.handleError);
    }

    /**
     * Create an initial draft on the server.
     * PUT: /api/drafts/create.
     *
     * @param draft The draft to be created on the server.
     * @returns {Observable<Draft>}    The draft returned from the server, as a promise.
     */
    public createDraft(draft : Draft) : Observable<Draft> {
        return this.http.put('/api/drafts/create', draft)
            .map(res => res.json())
            .catch(this.handleError);
    }

    /**
     * Update an existing draft with new information.
     * PATCH: /api/drafts/update.
     *
     * @param draft The draft to update.
     * @returns {Observable<number>}   A status code indicating the outcome of the operation.
     */
    public updateDraft(draft : Draft) : Observable<number> {
        return this.http.patch('/api/drafts/update', draft)
            .map(res => res.status)
            .catch(this.handleError);
    }

    /**
     * Delete a draft from the server with the given id.
     * DELETE: /api/drafts/delete/:id.
     *
     * @param draft The draft to delete.
     * @returns {Observable<number>}   A status code indicating the outcome of the operation.
     */
    public deleteDraft(draft: Draft) : Observable<number> {
        return this.http.delete('/api/drafts/delete/' + draft.id)
            .map(res => res.status)
            .catch(this.handleError);
    }

    /**
     * Publish a draft, creating an article.
     * POST: /api/drafts/publish.
     *
     * @param draft The draft to publish.
     * @return {Observable<string>} The
     */
    public publishDraft(draft: Draft) : Observable<string> {
        return this.http.post('/api/drafts/publish', draft)
            .map(res => res.json())
            .catch(this.handleError);
    }
}
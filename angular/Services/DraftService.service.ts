import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {AbstractService} from '../services';
import {Draft} from "../classes";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DraftService extends AbstractService {

    constructor(private http: Http) {
        super();
    }

    /**
     * Get all drafts from the server.
     * GET: /api/drafts/all
     *
     * @returns {Observable<Draft[]>}  All drafts from the server.
     */
    public getAllDrafts() : Observable<Draft[]> {
        return this.http.get('/api/drafts/all')
            .map(this.parseJson)
            .map(models => {
                if (models != null) {
                    return models.map(model => this.createDraftModel(model));
                }
                return [];
            })
            .catch(this.handleError);
    }

    /**
     * Get a draft by its id from the server.
     * GET: /api/drafts/get/:id
     *
     * @param draftId   The id of the draft to be fetched.
     * @returns {Observable<Draft>}    The draft specified by the id.
     */
    public getDraft(draftId : number) : Observable<Draft> {
        return this.http.get('/api/drafts/get/' + draftId)
            .map(this.parseJson)
            .map(this.createDraftModel)
            .catch(this.handleError);
    }

    /**
     * Create an initial draft on the server.
     * PUT: /api/drafts/create
     *
     * @param draft The draft to be created on the server.
     * @returns {Observable<Draft>}    The draft returned from the server.
     */
    public createDraft(draft : Draft) : Observable<Draft> {
        return this.http.put('/api/drafts/create', draft)
            .map(this.parseJson)
            .map(this.createDraftModel)
            .catch(this.handleError);
    }

    /**
     * Update an existing draft with new information.
     * PATCH: /api/drafts/update
     *
     * @param draft The draft to update.
     * @returns {Observable<Draft>}   The draft returned from the server.
     */
    public updateDraft(draft : Draft) : Observable<Draft> {
        return this.http.patch('/api/drafts/update', draft)
            .map(this.parseJson)
            .map(this.createDraftModel)
            .catch(this.handleError);
    }

    /**
     * Delete a draft from the server with the given id.
     * DELETE: /api/drafts/delete/:id
     *
     * @param draft The draft to delete.
     * @returns {Observable<number>}   A status code indicating the outcome of the operation.
     */
    public deleteDraft(draft: Draft) : Observable<number> {
        return this.http.delete('/api/drafts/delete/' + draft.id)
            .map(response => response.status)
            .catch(this.handleError);
    }

    /**
     * Creates a draft model from data on the server.
     *
     * @private
     * @param model
     * @returns {Draft}
     */
    private createDraftModel(model: any) {
        return Draft.create(model);
    }
}
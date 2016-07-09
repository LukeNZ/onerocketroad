"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var AbstractService_service_1 = require('../Services/AbstractService.service');
var DraftService = (function (_super) {
    __extends(DraftService, _super);
    function DraftService(http) {
        _super.call(this);
        this.http = http;
    }
    /**
     * Get all drafts from the server.
     * GET: /api/drafts/all;
     *
     * @returns {Promise<Draft[]>}  All drafts from the server.
     */
    DraftService.prototype.getAllDrafts = function () {
        return this.http.get('/api/drafts/all')
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    /**
     * Get a draft by its ID from the server.
     * GET: /api/drafts/get/:id
     *
     * @param draftId   The id of the draft to be fetched.
     * @returns {Promise<Draft>}    The draft specified by the id.
     */
    DraftService.prototype.getDraft = function (draftId) {
        return this.http.get('/api/drafts/get/' + draftId)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    /**
     * Create an initial draft on the server.
     * PUT: /api/drafts/create.
     *
     * @param draft The draft to be created on the server.
     * @returns {Promise<Draft>}    The draft returned from the server, as a promise.
     */
    DraftService.prototype.createDraft = function (draft) {
        return this.http.put('/api/drafts/create', draft)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    /**
     * Update an existing draft with new information.
     * PATCH: /api/drafts/update.
     *
     * @param draft The draft to update.
     * @returns {Promise<number>}   A status code indicating the outcome of the operation.
     */
    DraftService.prototype.updateDraft = function (draft) {
        return this.http.patch('/api/drafts/update', draft)
            .toPromise()
            .then(function (res) { return res.status; })
            .catch(this.handleError);
    };
    /**
     * Delete a draft from the server with the given id.
     * DELETE: /api/drafts/delete/:id.
     *
     * @param draft
     * @returns {Promise<number>}   A status code indicating the outcome of the operation.
     */
    DraftService.prototype.deleteDraft = function (draft) {
        return this.http.delete('/api/drafts/delete/' + draft.id)
            .toPromise()
            .then(function (res) { return res.status; })
            .catch(this.handleError);
    };
    /**
     * Publish a draft, creating an article.
     * POST: /api/drafts/publish.
     *
     * @param draft
     */
    DraftService.prototype.publishDraft = function (draft) {
        return this.http.post('/api/drafts/publish', draft)
            .toPromise()
            .then(function (res) { return res.status; })
            .catch(this.handleError);
    };
    DraftService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DraftService);
    return DraftService;
}(AbstractService_service_1.AbstractService));
exports.DraftService = DraftService;

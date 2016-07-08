"use strict";
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
var DraftService = (function () {
    function DraftService(http) {
        this.http = http;
    }
    /**
     * GET: /api/drafts/all;
     */
    DraftService.prototype.getAllDrafts = function () {
        return this.http.get('/api/drafts/all')
            .toPromise()
            .then(function (res) { return res.json(); });
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
            .then(function (res) { return res.json(); });
    };
    /**
     * PATCH: /api/drafts/update.
     *
     * @param draft
     * @returns {Observable<Response>}
     */
    DraftService.prototype.updateDraft = function (draft) {
        return this.http.patch('/api/drafts/update', draft)
            .toPromise()
            .then(function (res) { return res.status; });
    };
    /**
     * DELETE: /api/drafts/delete.
     *
     * @param draft
     */
    DraftService.prototype.deleteDraft = function (draft) {
    };
    /**
     * POST: /api/drafts/publish.
     *
     * @param draft
     */
    DraftService.prototype.publishDraft = function (draft) {
    };
    DraftService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DraftService);
    return DraftService;
}());
exports.DraftService = DraftService;

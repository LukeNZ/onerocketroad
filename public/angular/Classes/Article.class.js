"use strict";
var moment = require("moment");
var Article = (function () {
    function Article(id, title, body, authorName, createdAt, updatedAt) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.authorName = authorName;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    Article.createFromDraft = function (draft) {
        var now = moment().utc().toDate();
        return new Article(draft.id, draft.title, draft.body, draft.authorName, now, now);
    };
    Article.prototype.publicationYear = function () {
        return moment(this.createdAt).utc().format("YYYY");
    };
    Article.prototype.publicationMonth = function () {
        return moment(this.createdAt).utc().format("MM");
    };
    Article.prototype.publicationDay = function () {
        return moment(this.createdAt).utc().format("DD");
    };
    Article.prototype.slug = function () {
        return this.title.toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(/[^\w\-]+/g, '') // Remove all non-word chars
            .replace(/\-\-+/g, '-') // Replace multiple - with single -
            .replace(/^-+/, '') // Trim - from start of text
            .replace(/-+$/, ''); // Trim - from end of text
    };
    return Article;
}());
exports.Article = Article;

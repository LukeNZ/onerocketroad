"use strict";
var Article = (function () {
    function Article(id, title, body, authorName, publishedAt, createdAt, updatedAt) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.authorName = authorName;
        this.publishedAt = publishedAt;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    Article.createFromDraft = function (draft, publishedAt) {
        var now = new Date();
        return new Article(draft.id, draft.title, draft.body, draft.authorName, now, now, now);
    };
    return Article;
}());
exports.Article = Article;

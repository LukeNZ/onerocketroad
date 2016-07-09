"use strict";
var Draft = (function () {
    function Draft(id, title, body, author, authorName, dueAt, createdAt, updatedAt) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.author = author;
        this.authorName = authorName;
        this.dueAt = dueAt;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    Draft.prototype.wordCount = function () {
        return this.body ? this.body.split(" ").length : 0;
    };
    Draft.prototype.isPublishable = function () {
        return this.title != null && this.body != null && this.title.length > 0 && this.body.length > 0;
    };
    return Draft;
}());
exports.Draft = Draft;

"use strict";
var Draft = (function () {
    function Draft(id, title, body, author, authorName, heroId, hero, dueAt, createdAt, updatedAt) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.author = author;
        this.authorName = authorName;
        this.heroId = heroId;
        this.hero = hero;
        this.dueAt = dueAt;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    /**
     * Calculates and returns number of words present within the draft.
     *
     * @returns {number}
     */
    Draft.prototype.wordCount = function () {
        var matches = this.body.match(/[\w\d]+/gi);
        return matches ? matches.length : 0;
    };
    Draft.prototype.isPublishable = function () {
        return this.title != null && this.body != null
            && this.title.length > 0 && this.body.length > 0
            && this.hero != null;
    };
    return Draft;
}());
exports.Draft = Draft;

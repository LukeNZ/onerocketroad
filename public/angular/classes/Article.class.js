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
        return moment.utc(this.createdAt).format("YYYY");
    };
    Article.prototype.publicationMonth = function () {
        return moment.utc(this.createdAt).format("MM");
    };
    Article.prototype.publicationDay = function () {
        return moment.utc(this.createdAt).format("DD");
    };
    /**
     * Produces a snippet of the article from the first 25 words of the article's body;
     * then depending on whether the snippet ends with a period, may append an ellipsis to
     * the snippet.
     *
     * @returns {string}
     */
    Article.prototype.snippet = function () {
        var wordsToTake = 25;
        var snippet = this.body.split(" ").slice(0, wordsToTake).join(" ");
        if (snippet.slice(-1) == ".") {
            return snippet;
        }
        return snippet + "...";
    };
    /**
     * Calculates and returns the number of acronyms present within the article.
     *
     * @returns {number}
     */
    Article.prototype.acronymCount = function () {
        var matches = this.body.match(/[A-Z]{2,}/g);
        return matches ? matches.length : 0;
    };
    /**
     * Calculates and returns number of words present within the article.
     *
     * @returns {number}
     */
    Article.prototype.wordCount = function () {
        var matches = this.body.match(/[\w\d]+/gi);
        return matches ? matches.length : 0;
    };
    /**
     * Estimates the average time it will take to read this article.
     *
     * @returns {string}
     */
    Article.prototype.readingLength = function () {
        var lowerBoundedWordsPerMinute = 200;
        var higherBoundedWordsPerMinute = 250;
        var wordCount = this.wordCount();
        if (wordCount / higherBoundedWordsPerMinute < 2) {
            return "Less than 2 minutes";
        }
        else {
            var lowerBoundedLength = Math.floor(wordCount / lowerBoundedWordsPerMinute);
            var higherBoundedLength = Math.ceil(wordCount / higherBoundedWordsPerMinute);
            return "About " + lowerBoundedLength + " to " + higherBoundedLength + " minutes";
        }
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

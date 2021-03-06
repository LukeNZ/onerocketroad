import * as moment from "moment";
import {Draft} from "./Draft.class";
import {Image} from "./Image.class";

export class Article {
    public id: number;
    public title: string;
    public body: string;
    public authorName: string;
    public hero: Image;
    public createdAt: Date;
    public updatedAt: Date;

    /**
     * Static helper method to create an article instance from a draft object.
     *
     * @param draft
     * @returns {Article}
     */
    public static createFromDraft(draft: Draft) : Article {
        let now = moment().utc().toDate();
        return new Article(draft.id, draft.title, draft.body, draft.authorName, draft.hero, now, now);
    }

    /**
     * Static helper method to create an article instance from a plain object.
     *
     * @param model
     * @returns {Article}
     */
    public static create(model?: any) : Article {
        return new Article(model.id, model.title, model.body, model.authorName, Image.create(model.hero),
            model.createdAt, model.updatedAt)
    }

    constructor();
    constructor(id: number, title: string, body: string, authorName: string, hero: Image, createdAt: Date, updatedAt: Date);

    /**
     * Article constructor.
     *
     * @param id
     * @param title
     * @param body
     * @param authorName
     * @param createdAt
     * @param updatedAt
     */
    constructor(id?: number, title?: string, body?: string, authorName?: string, hero?: Image, createdAt?: Date, updatedAt?: Date) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.authorName = authorName;
        this.hero = hero;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    /**
     * Returns the publication year of the article in UTC, formatted as a string.
     *
     * @returns {string}
     */
    public publicationYear() : string {
        return moment.utc(this.createdAt).format("YYYY");
    }

    /**
     * Returns the publication month of the article in UTC, formatted as a number with a leading
     * zero if required.
     *
     * @returns {string}
     */
    public publicationMonth() : string {
        return moment.utc(this.createdAt).format("MM");
    }

    /**
     * Returns the publication day of the article in UTC, formatted as a date with a leading
     * zero if required.
     *
     * @returns {string}
     */
    public publicationDay() : string {
        return moment.utc(this.createdAt).format("DD");
    }

    /**
     * Produces a snippet of the article from the first 25 words of the article's body;
     * then depending on whether the snippet ends with a period, may append an ellipsis to
     * the snippet.
     * 
     * @returns {string}
     */
    public snippet() : string {
        let wordsToTake = 25;
        let snippet = this.body.split(" ").slice(0, wordsToTake).join(" ");

        if (snippet.slice(-1) == ".") {
            return snippet;
        }
        return snippet + "...";
    }

    /**
     * Calculates and returns the number of acronyms present within the article.
     * 
     * @returns {number}
     */
    public acronymCount() : number {
        var matches = this.body.match(/[A-Z]{2,}/g);
        return matches ? matches.length : 0;
    }

    /**
     * Calculates and returns number of words present within the article.
     *
     * @returns {number}
     */
    public wordCount() : number {
        var matches = this.body.match(/[\w\d]+/gi);
        return matches ? matches.length : 0;
    }

    /**
     * Estimates the average time it will take to read this article.
     *
     * @returns {string}
     */
    public readingLength() : string {
        let lowerBoundedWordsPerMinute = 200;
        let higherBoundedWordsPerMinute = 250;
        let wordCount = this.wordCount();

        if (wordCount / higherBoundedWordsPerMinute < 2) {
            return "Less than 2 minutes";
        } else {
            let lowerBoundedLength = Math.floor(wordCount / lowerBoundedWordsPerMinute);
            let higherBoundedLength = Math.ceil(wordCount / higherBoundedWordsPerMinute);
            return "About " + lowerBoundedLength + " to " + higherBoundedLength + " minutes";
        }
    }

    public slug() : string {
        return this.title.toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, ''); // Trim - from end of text
    }
}
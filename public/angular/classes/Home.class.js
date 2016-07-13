"use strict";
var Home = (function () {
    function Home(articles) {
        this.articles = articles;
        if (articles.length >= 1) {
            this.leadArticle = articles[0];
        }
        if (articles.length >= 3) {
            this.midTierArticles = { first: articles[1], second: articles[2] };
        }
        if (articles.length >= 6) {
            this.moreArticles = {
                first: articles[3],
                second: articles[4],
                third: articles[5]
            };
        }
    }
    return Home;
}());
exports.Home = Home;

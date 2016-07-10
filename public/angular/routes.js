"use strict";
var router_1 = require('@angular/router');
var Drafts_component_1 = require('./components/Drafts.component');
var Draft_component_1 = require('./components/Draft.component');
var Articles_component_1 = require('./components/Articles.component');
var Home_component_1 = require("./Components/Home.component");
var Article_component_1 = require("./Components/Article.component");
// At a future release, we should hopefully be able to specify routes
exports.routes = [
    { path: '', component: Home_component_1.HomeComponent },
    { path: 'drafts', component: Drafts_component_1.DraftsComponent },
    { path: 'draft/:id', component: Draft_component_1.DraftComponent },
    { path: 'articles', component: Articles_component_1.ArticlesComponent },
    { path: 'article/:year/:month/:day/:slug', component: Article_component_1.ArticleComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];

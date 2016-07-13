"use strict";
var router_1 = require('@angular/router');
var components_1 = require("./components");
// At a future release, we should hopefully be able to specify routes
exports.routes = [
    { path: '', component: components_1.HomeComponent },
    { path: 'drafts', component: components_1.DraftsComponent },
    { path: 'draft/:id', component: components_1.DraftComponent },
    { path: 'articles', component: components_1.ArticlesComponent },
    { path: 'article/:year/:month/:day/:slug', component: components_1.ArticleComponent },
    { path: 'images', component: components_1.ImagesComponent },
    { path: 'about', component: components_1.AboutComponent },
    { path: 'signup', component: components_1.SignUpComponent },
    { path: 'login', component: components_1.LoginComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];

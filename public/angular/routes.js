"use strict";
var router_1 = require('@angular/router');
var Drafts_component_1 = require('./components/Drafts.component');
var Articles_component_1 = require('./components/Articles.component');
var OneRocketRoad_component_1 = require("./Components/OneRocketRoad.component");
exports.routes = [
    { path: '', component: OneRocketRoad_component_1.OneRocketRoadComponent },
    { path: 'drafts', component: Drafts_component_1.DraftsComponent },
    { path: 'articles', component: Articles_component_1.ArticlesComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];

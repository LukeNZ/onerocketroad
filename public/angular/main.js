"use strict";
///<reference path="../typings/index.d.ts"/>
// Angular provided-dependencies
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var routes_1 = require('./routes');
// Rx.js
require('rxjs/add/observable/throw');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/map');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/toPromise');
// Root component
var OneRocketRoad_component_1 = require('./Components/OneRocketRoad.component');
platform_browser_dynamic_1.bootstrap(OneRocketRoad_component_1.OneRocketRoadComponent, [
    routes_1.APP_ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    platform_browser_1.Title,
]).catch(function (err) { return console.error(err); });

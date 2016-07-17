"use strict";
///<reference path="../typings/index.d.ts"/>
// Angular provided-dependencies
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var routes_1 = require('./routes');
// Root component
var components_1 = require('./components');
platform_browser_dynamic_1.bootstrap(components_1.OneRocketRoadComponent, [
    routes_1.APP_ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    platform_browser_1.Title,
]).catch(function (err) { return console.error(err); });

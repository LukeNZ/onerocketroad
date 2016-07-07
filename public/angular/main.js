///<reference path="../typings/index.d.ts"/>
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var routes_1 = require('./routes');
var OneRocketRoad_component_1 = require('./Components/OneRocketRoad.component');
platform_browser_dynamic_1.bootstrap(OneRocketRoad_component_1.OneRocketRoadComponent, [
    routes_1.APP_ROUTER_PROVIDERS
]);

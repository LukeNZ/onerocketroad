///<reference path="../typings/index.d.ts"/>

import {bootstrap}    from '@angular/platform-browser-dynamic';
import {APP_ROUTER_PROVIDERS} from './routes';
import {OneRocketRoadComponent} from './Components/OneRocketRoad.component';


bootstrap(OneRocketRoadComponent, [
   APP_ROUTER_PROVIDERS
]);
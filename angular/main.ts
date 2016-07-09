///<reference path="../typings/index.d.ts"/>
// Angular provided-dependencies
import {bootstrap}    from '@angular/platform-browser-dynamic';
import {APP_ROUTER_PROVIDERS} from './routes';
import {HTTP_PROVIDERS} from '@angular/http';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

// Rx.js
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';


// Root component
import {OneRocketRoadComponent} from './Components/OneRocketRoad.component';

bootstrap(OneRocketRoadComponent, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    disableDeprecatedForms(),
    provideForms()
]).catch((err: any) => console.error(err));
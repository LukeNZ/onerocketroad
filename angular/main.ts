///<reference path="../typings/index.d.ts"/>
// Angular provided-dependencies
import {bootstrap}    from '@angular/platform-browser-dynamic';
import {Title} from '@angular/platform-browser';
import {HTTP_PROVIDERS} from '@angular/http';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {APP_ROUTER_PROVIDERS} from './routes';

// Root component
import {OneRocketRoadComponent} from './components';

bootstrap(OneRocketRoadComponent, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    disableDeprecatedForms(),
    provideForms(),
    Title,
]).catch((err: any) => console.error(err));
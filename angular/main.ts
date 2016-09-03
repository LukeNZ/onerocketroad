///<reference path="../typings/index.d.ts"/>
// Angular provided-dependencies
/*import {bootstrap}    from '@angular/platform-browser-dynamic';
import {Title} from '@angular/platform-browser';
import {HTTP_PROVIDERS} from '@angular/http';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {APP_ROUTER_PROVIDERS} from './routes';

// Root component
import {OneRocketRoadComponent} from './components';
import {AuthenticatedGuard} from "./guards";
import {AuthenticationService} from "./services";

bootstrap(OneRocketRoadComponent, [
    disableDeprecatedForms(),
    provideForms(),
    Title,
    AuthenticatedGuard,
    AuthenticationService
]).catch((err: any) => console.error(err));*/

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));
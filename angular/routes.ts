import {provideRouter, RouterConfig} from '@angular/router';
import {DraftsComponent} from './components/Drafts.component';
import {DraftComponent} from './components/Draft.component';
import {ArticlesComponent} from './components/Articles.component';
import {OneRocketRoadComponent} from "./Components/OneRocketRoad.component";

export const routes: RouterConfig = [
    { path: '', component: OneRocketRoadComponent },
    { path: 'drafts', component: DraftsComponent },
    { path: 'draft/:id', component: DraftComponent },
    { path: 'articles', component: ArticlesComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
import {provideRouter, RouterConfig} from '@angular/router';
import {DraftComponent, DraftsComponent, ArticleComponent, ArticlesComponent,
    HomeComponent, SignUpComponent, LoginComponent} from "./components";

// At a future release, we should hopefully be able to specify routes
export const routes: RouterConfig = [
    { path: '', component: HomeComponent },
    { path: 'drafts', component: DraftsComponent },
    { path: 'draft/:id', component: DraftComponent },
    { path: 'articles', component: ArticlesComponent },
    { path: 'article/:year/:month/:day/:slug', component: ArticleComponent},
    { path: 'signup', component: SignUpComponent },
    { path: 'login', component: LoginComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
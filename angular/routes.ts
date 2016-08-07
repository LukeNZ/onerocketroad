import {provideRouter, RouterConfig} from '@angular/router';
import {DraftComponent, DraftsComponent, ArticleComponent, ArticlesComponent,
    HomeComponent, AboutComponent, ImagesComponent, SignUpComponent, LoginComponent,
    StyleGuideComponent} from "./components";
import {AuthenticatedGuard} from "./guards";

// At a future release, we should hopefully be able to specify routes
export const routes: RouterConfig = [
    //  Public routes
    { path: '', component: HomeComponent },
    { path: 'articles', component: ArticlesComponent },
    { path: 'article/:year/:month/:day/:slug', component: ArticleComponent},
    { path: 'about', component: AboutComponent },

    // Private routes
    { path: 'drafts', component: DraftsComponent, canActivate: [AuthenticatedGuard] },
    { path: 'draft/:id', component: DraftComponent, canActivate: [AuthenticatedGuard] },
    { path: 'images', component: ImagesComponent, canActivate: [AuthenticatedGuard] },
    { path: 'auth/signup', component: SignUpComponent },
    { path: 'auth/login', component: LoginComponent },
    { path: 'styleguide', component: StyleGuideComponent, canActivate: [AuthenticatedGuard] }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
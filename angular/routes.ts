import {provideRouter, RouterConfig} from '@angular/router';
import {DraftsComponent} from './components/Drafts.component';
import {DraftComponent} from './components/Draft.component';
import {ArticlesComponent} from './components/Articles.component';
import {HomeComponent} from "./Components/Home.component";
import {ArticleComponent} from "./Components/Article.component";
import {SignUpComponent} from "./Components/SignUp.component";
import {LoginComponent} from "./Components/Login.component";

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
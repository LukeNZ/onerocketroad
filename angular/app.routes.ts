import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthenticatedGuard} from "./Guards/AuthenticatedGuard.guard";
import {HomeComponent} from "./Components/Home.component";
import {ArticlesComponent} from "./Components/Articles.component";
import {ArticleComponent} from "./Components/Article.component";
import {AboutComponent} from "./Components/About.component";
import {DraftsComponent} from "./Components/Drafts.component";
import {DraftComponent} from "./Components/Draft.component";
import {ImagesComponent} from "./Components/Images.component";
import {SignUpComponent} from "./Components/SignUp.component";
import {LoginComponent} from "./Components/Login.component";
import {StyleGuideComponent} from "./Components/StyleGuide.component";

const appRoutes: Routes = [
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

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

export const routedComponents = [HomeComponent, ArticlesComponent, ArticleComponent, AboutComponent, DraftComponent, DraftsComponent,
ImagesComponent, SignUpComponent, LoginComponent, StyleGuideComponent];
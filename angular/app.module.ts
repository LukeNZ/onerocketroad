import { NgModule }       from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {OneRocketRoadComponent} from "./Components/OneRocketRoad.component";
import {routing, routedComponents} from "./app.routes";
import {MarkdownPipe} from "./Pipes/MarkdownPipe.pipe";
import {DropzoneComponent} from "./Components/Dropzone.component";
import {AuthenticatedGuard} from "./Guards/AuthenticatedGuard.guard";
import {ArticleRouterLinkDirective} from "./Directives/ArticleRouterLink.directive";
import {ContentEditableDirective} from "./Directives/ContentEditable.directive";
import {DraggableDirective} from "./Directives/Draggable.directive";
import {DroppableDirective} from "./Directives/Droppable.directive";
import {HeroDirective} from "./Directives/Hero.directive";
import {HighlightOnClickDirective} from "./Directives/HighlightOnClick.directive";
import {ArticleService} from "./Services/ArticleService.service";
import {AuthenticationService} from "./Services/AuthenticationService.service";
import {DraftService} from "./Services/DraftService.service";
import {HomeService} from "./Services/HomeService.service";
import {ImageService} from "./Services/ImageService.service";
import {TaggableService} from "./Services/TaggableService.service";
import {TagService} from "./Services/TagService.service";

@NgModule({
    declarations: [
        // Components
        OneRocketRoadComponent, DropzoneComponent, routedComponents,
        // Pipes
        MarkdownPipe,
        // Directives
        ArticleRouterLinkDirective, ContentEditableDirective, DraggableDirective, DroppableDirective, HeroDirective, HighlightOnClickDirective
    ],
    imports:      [FormsModule, ReactiveFormsModule, HttpModule, BrowserModule, routing],
    providers:    [AuthenticatedGuard, ArticleService, AuthenticationService, DraftService, HomeService, ImageService, TaggableService, TagService, Title],
    bootstrap:    [OneRocketRoadComponent]
})
export class AppModule {}
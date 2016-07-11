import {Directive, Input, HostListener, HostBinding} from '@angular/core';
import {RouterLink, ActivatedRoute, Router, RouterLinkWithHref} from "@angular/router";
import {Article} from "../Classes/Article.class";

@Directive({
    selector: 'a[articleRouterLink]',
    host: {
        'click': 'onClick()'
    }
})
export class ArticleRouterLinkDirective extends RouterLinkWithHref {
    @Input('articleRouterLink') model : Article;
    @HostBinding() href: string;

    constructor(private router: Router,
                private route: ActivatedRoute) {
    }



    @HostListener('click', ['$event.button', '$event.ctrlKey', '$event.metaKey'])
    onClick() {
        this.router.navigate([this.model.slug()]);
        this.router.
        return false;
    }
}
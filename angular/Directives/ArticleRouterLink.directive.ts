import {Directive, Input, HostListener, HostBinding, OnChanges, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router, UrlTree, NavigationEnd} from "@angular/router";
import {LocationStrategy} from "@angular/common";
import {Article} from "../classes";
import {Subscription} from "rxjs/Subscription";

@Directive({
    selector: 'a[articleRouterLink]',
    host: {
        'click': 'onClick()'
    }
})

/**
 * Special routerLink directive to bind an article to a link. Although we would extend
 * routerLinkWithHref (https://github.com/angular/angular/blob/master/modules/%40angular/router/src/directives/router_link.ts)
 * this does not appear to be possible as of 2.0.0-rc.4.
 */
export class ArticleRouterLinkDirective implements OnChanges, OnDestroy {
    @Input('articleRouterLink') model : Article;
    private commands: any[] = [];
    private subscription: Subscription;

    @HostBinding() href: string;

    urlTree: UrlTree;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private locationStrategy: LocationStrategy) {
        this.subscription = router.events.subscribe(s => {
            if (s instanceof NavigationEnd) {
                this.updateTargetUrlAndHref();
            }
        });
    }

    @Input()
    set articleRouterLink(article: Article) {
        if (article != null) {
            this.commands = ['/article', article.publicationYear(), article.publicationMonth(), article.publicationDay(), article.slug()];
        }
    }

    ngOnChanges(changes: {}): any { this.updateTargetUrlAndHref(); }
    ngOnDestroy(): any { this.subscription.unsubscribe(); }

    @HostListener('click', ['$event.button', '$event.ctrlKey', '$event.metaKey'])
    onClick(button: number, ctrlKey: boolean, metaKey: boolean): boolean {
        if (button !== 0 || ctrlKey || metaKey) {
            return true;
        }

        if (this.model instanceof Article === false) {
            return true;
        }

        this.router.navigateByUrl(this.urlTree);
        return false;
    }

    private updateTargetUrlAndHref(): void {
        this.urlTree = this.router.createUrlTree(this.commands);

        if (this.urlTree) {
            this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree));
        }
    }
}
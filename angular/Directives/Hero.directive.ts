import {Directive, Input, ElementRef, OnInit} from "@angular/core";
@Directive({
    selector: '[heroImage]'
})
export class HeroDirective implements OnInit {
    @Input('heroImage') data : any;

    constructor(private el : ElementRef) {}

    ngOnInit() {
        this.el.nativeElement.style.backgroundImage = "url(" + this.data + ")";
    }
}
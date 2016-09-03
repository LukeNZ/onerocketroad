import {Directive, Input, ElementRef, OnInit} from "@angular/core";
@Directive({
    selector: 'hero[image]'
})
export class HeroDirective implements OnInit {
    @Input('image') data : any;

    constructor(private el : ElementRef) {}

    ngOnInit() {
        this.el.nativeElement.style.backgroundImage = "url(" + this.data + ")";
    }
}
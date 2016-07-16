import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[highlightOnClick]',
    host: {
        '(click)': 'onClick()'
    }
})
export class HighlightOnClickDirective {
    @Input('highlightOnClick') model : any;

    constructor(private el: ElementRef) {}

    @HostListener('onclick')
    public onClick() {
        this.el.nativeElement.select();
    }
}
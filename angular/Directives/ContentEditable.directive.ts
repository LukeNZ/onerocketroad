import {Directive, ElementRef, Input, Output, EventEmitter, HostListener, OnChanges} from '@angular/core';

@Directive({
    selector: '[contentEditableModel]',
    host: {
        '(blur)': 'onBlur()'
    }
})
export class ContentEditableDirective implements OnChanges {
    @Input('contentEditableModel') model : any;
    @Output('contentEditableModelChange') update = new EventEmitter();

    private lastModel : any;

    constructor(private el: ElementRef) {
        el.nativeElement.setAttribute("contenteditable", "");
        el.nativeElement.textContent = this.model;
    }

    ngOnChanges(changes) {
        this.el.nativeElement.textContent = this.model;
        this.lastModel = this.model;
    }

    @HostListener('onblur')
    public onBlur() {
        let value = this.el.nativeElement.textContent;
        this.lastModel = value;
        this.update.emit(value);
    }
}
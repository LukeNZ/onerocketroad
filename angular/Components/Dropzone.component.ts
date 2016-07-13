import {Component, ElementRef} from '@angular/core';

@Component({
    selector: 'dropzone',
    templateUrl: '/angular/views/dropzone.template.html'
})
export class DropzoneComponent {
    constructor(private el: ElementRef) {
        this.el.nativeElement.id = "ng2-dropzone";

        let dropzone = new Dropzone(this.el.nativeElement, {
            method: "put",
            maxFilesize: 32,
            maxFiles: 1,
            acceptedFiles: '.jpg,.jpeg,.png,.gif'
        });
    }
}
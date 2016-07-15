import {Component, ElementRef, OnInit} from '@angular/core';
import Dropzone = require('dropzone');

@Component({
    selector: 'dropzone',
    template: ''
})
export class DropzoneComponent implements OnInit {
    constructor(private el: ElementRef) {}

    ngOnInit() {
        this.el.nativeElement.id = "ng2-dropzone";
        this.el.nativeElement.style.display = "block";

        let dropzone = new Dropzone(this.el.nativeElement, {
            url: '/api/images/create',
            method: "put",
            maxFilesize: 32,
            maxFiles: 1,
            acceptedFiles: '.jpg,.jpeg,.png,.gif'
        });
    }
}
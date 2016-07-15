import {Component, ElementRef, OnInit} from '@angular/core';
import Dropzone = require('dropzone');
import {Observable} from "rxjs/Rx";
import 'rxjs/add/observable/fromEvent';

interface UploadDetail {
    label: string;
    result: any;
}

@Component({
    selector: 'dropzone',
    template: ''
})
export class DropzoneComponent implements OnInit {
    public dropzone : Dropzone;

    constructor(private el: ElementRef) {}

    ngOnInit() {
        this.el.nativeElement.id = "ng2-dropzone";
        this.el.nativeElement.style.display = "block";

        this.dropzone = new Dropzone(this.el.nativeElement, {
            url: '/api/images/create',
            method: "post",
            maxFilesize: 32,
            uploadMultiple: false,
            acceptedFiles: '.jpg,.jpeg,.png,.gif',
            autoProcessQueue: false,
            headers: {
                "X-XSRF-TOKEN": this.getXSRFToken()
            }
        });
    }

    /**
     * Uploads a file using formdata, appending any extra details that are specified. Returns an observable
     * which resolves when upload is completed.
     *
     * @param detailsToAdd  Any additional details that could be appended with this request. Each key on the
     * object is sent through as an extra form data entry.
     *
     * @returns Observable<any>
     */
    public upload(detailsToAdd: {}) : Observable<any> {
        this.dropzone.on("sending", (file, xhr, formData: FormData) => {
            Object.keys(detailsToAdd).forEach(key => {
                formData.append(key, detailsToAdd[key]);
            })
        });
        this.dropzone.processQueue();
        return Observable.fromEvent(this.dropzone, "complete");
    }

    /**
     * Although Angular 2 automatically handles resending an X-XSRF-TOKEN header to the server,
     * Dropzone does not; so we must grab the cookie with the XSRF token outselves.
     *
     * @returns string  The XSRF token retrieved from the cookie.
     */
    private getXSRFToken() : string {
        let value = "; " + document.cookie;
        let parts = value.split("; " + "XSRF-TOKEN" + "=");
        if (parts.length == 2) {
            return decodeURIComponent(parts.pop().split(";").shift());
        }
        return null;
    }
}
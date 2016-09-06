import {Component, ElementRef, OnInit} from '@angular/core';
import Dropzone = require('dropzone');
var ColorThief = require('color-thief');
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';

interface ImageBitmap {
    height: number;
    width: number;
}

interface Window {
    createImageBitmap(file: File) : Promise<ImageBitmap>;
}

@Component({
    selector: 'orr-dropzone',
    template: ''
})
export class DropzoneComponent implements OnInit {
    public dropzone : Dropzone;

    public file: File;

    constructor(private el: ElementRef) {}

    /**
     * On component initializtion, apply an ID of "ng2-dropzone" and style the element as a block.
     * Create a new Dropzone out of the element, specifying various parameters about how entities
     * should be uploaded.
     */
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
                "X-XSRF-TOKEN": this.getXSRFToken(),
                "Authorization": this.getAuthToken()
            }
        });

        this.dropzone.on("thumbnail", (file, dataUrl) => {
            this.file = file;
        });
    }

    /**
     * Uploads a file using formdata, appending any extra details that are specified. Returns an observable
     * of the XMLHttpRequest which resolves when upload is completed.
     *
     * @param detailsToAdd  Any additional details that could be appended with this request. Each key on the
     * object is sent through as an extra form data entry.
     *
     * @returns Observable<any>
     */
    public upload(detailsToAdd: {}) : Observable<XMLHttpRequest> {
        (<any>window).createImageBitmap(this.file).then(img => {

            let colorThief = new ColorThief();
            let colors = colorThief.getColor(img);
            console.log(colors);

            this.dropzone.on("sending", (file, xhr, formData: FormData) => {
                Object.keys(detailsToAdd).forEach(key => {
                    formData.append(key, detailsToAdd[key]);
                });
                formData.append("color", `rgb(${colors[0]},${colors[1]},${colors[2]})`);
            });

            this.dropzone.processQueue();
        });

        return Observable.fromEvent(this.dropzone, "complete").map((response: any) => {
            return response.xhr;
        });
    }

    public clear() {
        this.dropzone.removeAllFiles();
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

    /**
     * BAD CODE
     * @returns {string}
     */
    private getAuthToken(): string {
        let authToken = localStorage.getItem('authtoken');
        return `bearer ${authToken}`;
    }
}
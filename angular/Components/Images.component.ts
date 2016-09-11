import {Component, OnInit, ViewChild, ChangeDetectorRef} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {DropzoneComponent} from "./Dropzone.component";
import {Image} from "../Classes/Image.class";
import {ImageService} from "../Services/ImageService.service";

@Component({
    selector: 'orr-images',
    templateUrl: '/angular/views/images.template.html'
})
export class ImagesComponent implements OnInit {

    @ViewChild(DropzoneComponent)
    private dropzoneComponent : DropzoneComponent;

    public imageToUpload: Image = Image.create();
    public images: Image[] = [];
    public isSubmitting: boolean = false;

    constructor(private imageService: ImageService, private titleService: Title, private change: ChangeDetectorRef) {
        this.titleService.setTitle("One Rocket Road | Images");
    }

    ngOnInit() {
        this.imageService.getImages().subscribe(images => {
            this.images = images;
        });
    }

    /**
     * Sends a command to upload a new image.
     */
    public uploadNewImage() {
        this.isSubmitting = true;
        this.dropzoneComponent.upload(this.imageToUpload);
    }

    public createImage(data: any) : void {
        let image = JSON.parse(data.xhr.response);

        // Reset the upload form.
        this.imageToUpload = Image.create();
        this.isSubmitting = false;

        // push the newly created image onto the images array.
        this.images.push(Image.create(image));

        // Clear the Dropzone.
        this.dropzoneComponent.clear();

        // We have to detect changes for some reason here.
        // TODO: Figure out how to fix.
        this.change.detectChanges();
    }
}
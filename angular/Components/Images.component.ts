import {Component, OnInit, ViewChild} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {DropzoneComponent} from "./Dropzone.component";
import {Image} from "../Classes/Image.class";
import {ImageService} from "../Services/ImageService.service";

@Component({
    selector: 'images',
    templateUrl: '/angular/views/images.template.html'
})
export class ImagesComponent implements OnInit {

    @ViewChild(DropzoneComponent)
    private dropzoneComponent : DropzoneComponent;

    public imageToUpload: Image = Image.create();
    public images: Image[] = [];
    public isSubmitting: boolean = false;

    constructor(private imageService: ImageService, private titleService: Title) {
        this.titleService.setTitle("One Rocket Road | Images");
    }

    ngOnInit() {
        this.imageService.getImages().subscribe(images => {
            this.images = images;
        });
    }

    /**
     * Uploads a new image, storing it on the server, before clearing the upload form and
     * adding the newly-created image to the images array.
     */
    public uploadNewImage() {
        this.isSubmitting = true;
        this.dropzoneComponent.upload(this.imageToUpload).subscribe(xmlHttpRequest => {

            // Allow easier access to the image from the xhr.
            let image = JSON.parse(xmlHttpRequest.response);

            // Reset the upload form.
            this.imageToUpload = Image.create();
            this.isSubmitting = false;

            // push the newly created image onto the images array.
            this.images.push(Image.create(image));

            // Clear the Dropzone.
            this.dropzoneComponent.clear();
        });
    }
}
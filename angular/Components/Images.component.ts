import {Component, OnInit, ViewChild} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Image} from "../classes";
import {DropzoneComponent} from "../components";
import {ImageService} from "../services";

@Component({
    selector: 'images',
    templateUrl: '/angular/views/images.template.html',
    providers: [ImageService],
    directives: [DropzoneComponent]
})
export class ImagesComponent implements OnInit {

    @ViewChild(DropzoneComponent)
    private dropzoneComponent : DropzoneComponent;

    public imageToUpload: Image = new Image(null, null, null, null, null, null, null, null, null);
    public images: Image[] = [];
    public isSubmitting: boolean = false;

    constructor(private imageService: ImageService, private titleService: Title) {
        this.titleService.setTitle("One Rocket Road | Images");
    }

    ngOnInit() {
        this.imageService.getImages().subscribe(images => {
            this.images = images;
            console.log (this.images);
        });
    }

    /**
     * Uploads a new image, storing it on the server, before clearing the upload form and
     * adding the newly-created image to the images array.
     */
    public uploadNewImage() {
        this.dropzoneComponent.upload(this.imageToUpload).subscribe(xmlHttpRequest => {

            // Allow easier access to the image from the xhr.
            let image = JSON.parse(xmlHttpRequest.response);

            // Reset the image to upload form.
            this.imageToUpload = new Image(null, null, null, null, null, null, null, null, null);

            // push the newly created image onto the images array.
            this.images.push(new Image(image.id, image.filename, image.thumbname, image.summary,
                image.attribution, image.size, image.color, image.createdAt, image.updatedAt));

            // Clear the Dropzone.
            this.dropzoneComponent.clear();
        });
    }
}
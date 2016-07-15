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

    public imageToUpload: Image = new Image(null, null);
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
    
    public uploadNewImage() {
        this.dropzoneComponent.upload(this.imageToUpload).subscribe(response => {
            console.log(response);
        });
    }
}
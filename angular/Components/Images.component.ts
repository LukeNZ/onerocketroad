import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Image} from "../classes";
import {ImageService} from "../services";

@Component({
    selector: 'images',
    templateUrl: '/angular/views/images.template.html',
    providers: [ImageService]
})
export class ImagesComponent implements OnInit {
    public imageToUpload: Image;
    public images: Image[] = [];

    constructor(private imageService: ImageService, private titleService: Title) {
        this.titleService.setTitle("One Rocket Road | Images");
    }

    ngOnInit() {
        this.imageService.getImages().subscribe(images => {
            this.images = images;
        });
    }
}
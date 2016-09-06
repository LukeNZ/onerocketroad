import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {StyleGuideService} from "../Services/StyleGuideService.service";

@Component({
    selector: 'orr-style-guide',
    templateUrl: '/angular/views/styleguide.template.html',
})
export class StyleGuideComponent implements OnInit {

    public markdownElementReference: string;

    constructor(private titleService: Title, private styleGuideService: StyleGuideService) {
        this.titleService.setTitle("One Rocket Road | Style Guide");
    }

    /**
     * Fetches the markdown style guide defined in a markdown file in the publicly accessible /angular/views
     * directory.
     */
    ngOnInit() : void {
        this.styleGuideService.getStyleGuide().subscribe(doc => {
            this.markdownElementReference = doc;
        })
    }
}
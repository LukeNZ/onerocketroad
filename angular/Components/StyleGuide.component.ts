import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'style-guide',
    templateUrl: '/angular/views/styleguide.template.html',
})
export class StyleGuideComponent {

    constructor(private titleService: Title) {
        this.titleService.setTitle("One Rocket Road | Style Guide");
    }

    ngOnInit() {
    }
}
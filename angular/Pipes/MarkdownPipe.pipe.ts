import {Pipe, PipeTransform} from '@angular/core';
var Remarkable = require('remarkable'); // No typings yet

@Pipe({
    name: 'markdown'
})
export class MarkdownPipe implements PipeTransform {
    public remarkable;

    constructor() {
        this.remarkable = new Remarkable({
            typographer: true
        });
    }

    transform(value: string) : string {
        if (value != null) {
            return this.remarkable.render(value);
        }
        return null;
    }
}
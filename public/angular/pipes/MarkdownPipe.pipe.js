"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var Remarkable = require('remarkable'); // No typings yet
var MarkdownPipe = (function () {
    function MarkdownPipe(sanitizer) {
        this.sanitizer = sanitizer;
        // Typegrpaher enables quotes beautification
        this.remarkable = new Remarkable({
            typographer: true
        });
        // Enable parsing of YouTube videos
        this.remarkable.use(this.parseVideos);
        // Enable support for subscript and superscript formatting via
        // the ^ (19^th^) and ~ (H~2~O) operators.
        this.remarkable.inline.ruler.enable(['sub', 'sup']);
    }
    /***
     * Transforms a markdown-enabled string into rendered markdown.
     *
     * @param value
     * @returns {SafeHtml}  A known safe string of HTML.
     */
    MarkdownPipe.prototype.transform = function (value) {
        if (value != null) {
            return this.sanitizer.bypassSecurityTrustHtml(this.remarkable.render(value));
        }
        return null;
    };
    /**
     * A function that provides an inline video parser that matches a syntax of:
     * @[](video-link), rendering it into an iframe of a YouTube video embed.
     *
     * @param md    The instance of Remarkable.
     */
    MarkdownPipe.prototype.parseVideos = function (md) {
        md.inline.ruler.push('video', function (state) {
            // Store local copy of position so we don't overwrite it if we need to revert.
            var pos = state.pos;
            var marker = state.src.charCodeAt(pos++);
            // Expect a series of tokens that matches the substring "@[](". This defines
            // the start of a video.
            if (marker !== 0x40 /* @ */) {
                return false;
            }
            marker = state.src.charCodeAt(pos++);
            if (marker !== 0x5B /* [ */) {
                return false;
            }
            marker = state.src.charCodeAt(pos++);
            if (marker !== 0x5D /* ] */) {
                return false;
            }
            marker = state.src.charCodeAt(pos++);
            if (marker !== 0x28 /* ( */) {
                return false;
            }
            // Begin URL. While the current position is less than the length of the string,
            // increment until we find a closing tag ")". Everything in between is the URL.
            var urlStart = pos;
            while (pos < state.posMax) {
                marker = state.src.charCodeAt(pos++);
                if (marker === 0x29 /* ) */) {
                    break;
                }
            }
            // Generate our token
            var token = {
                type: "video",
                level: state.level,
                src: state.src.slice(urlStart, pos - 1),
                content: marker
            };
            // Update the state position as the token successfully completed, push the token
            // onto the tokens array, and return true.
            state.pos = pos;
            state.push(token);
            return true;
        });
        // Render our video in an iframe.
        md.renderer.rules.video = function (tokens, idx, options) {
            var src = tokens[idx].src;
            return '<iframe width="1280" height="720" src="' + src
                + '?rel=0" frameborder="0" allowfullscreen></iframe>';
        };
    };
    MarkdownPipe = __decorate([
        // No typings yet
        core_1.Pipe({
            name: 'markdown'
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizationService])
    ], MarkdownPipe);
    return MarkdownPipe;
}());
exports.MarkdownPipe = MarkdownPipe;

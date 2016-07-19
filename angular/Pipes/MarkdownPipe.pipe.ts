import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizationService, SafeHtml} from '@angular/platform-browser';
var Remarkable = require('remarkable'); // No typings yet

enum MediaType {
    RichImage = 1,
    Video = 2,
    Tweet = 3
}

@Pipe({
    name: 'markdown'
})
export class MarkdownPipe implements PipeTransform {
    public remarkable;

    constructor(private sanitizer: DomSanitizationService) {
        // Typegrpaher enables quotes beautification
        this.remarkable = new Remarkable({
            typographer: true
        });

        // Enable parsing of rich media
        this.remarkable.use(this.parseRichImages);
        this.remarkable.use(this.parseVideos);
        this.remarkable.use(this.parseTweets);

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
    transform(value: string) : SafeHtml {
        if (value != null) {
            return this.sanitizer.bypassSecurityTrustHtml(this.remarkable.render(value));
        }
        return null;
    }

    /**
     * A function that provides rich text image viewing that matches a syntax of:
     * ![caption](image-link "Attribution" left|right|wide), rendering it into an image
     * with
     *
     * @param md    The instance of Remarkable.
     */
    private parseRichImages(md) : void {

    }

    /**
     * A function that provides an inline YouTube video player that matches a syntax of:
     * @[caption](video-link), rendering it into an iframe of a YouTube video embed.
     *
     * @param md    The instance of Remarkable.
     */
    private parseVideos(md) : void {
        md.inline.ruler.push('video', state => {
            return this.parseMedia(state, '@', 'video');
        });

        // Render our video in an iframe.
        md.renderer.rules.video = (tokens, idx, options) => {
            let link = tokens[idx].link;
            return '<iframe width="1280" height="720" src="' + link
                +'?rel=0" frameborder="0" allowfullscreen></iframe>';
        };
    }

    /**
     * A function that provides a block level Tweet display that matches a syntax of:
     * #[caption](tweet-link), rendering it into a tweet.
     *
     * @param md    The instance of Remarkable.
     */
    private parseTweets(md) : void {
        md.block.ruler.push('tweet', state => {
            return this.parseMedia(state, '#', 'tweet');
        });

        // Render our tweet
        md.renderer.rules.tweet = (tokens, idx, options) => {
            let link = tokens[idx].link;
            return '<blockquote class="twitter-tweet" data-lang="en">' +
                '<a href="' + link + '"></a>' +
                '</blockquote>' +
                '<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>';
        };
    }

    /**
     * @internal
     *
     * @param state
     * @param startingMarker
     * @param tokenName
     * @returns {boolean}
     */
    private parseMedia(state, startingMarker, tokenName) : boolean {
        // Store local copy of position so we don't overwrite it if we need to revert.
        let pos = state.pos;
        let marker = state.src.charCodeAt(pos++);

        // Expect a series of tokens that matches the substring "[](" (prefixed by a
        // starting marker, `!` for images, `@` for videos, `#` for tweets).
        // This defines the beginning of our pattern.
        if (marker !== String.fromCharCode(startingMarker)) { return false; }
        marker = state.src.charCodeAt(pos++);
        if (marker !== 0x5B /* [ */) { return false; }
        marker = state.src.charCodeAt(pos++);
        if (marker !== 0x5D /* ] */) { return false; }
        marker = state.src.charCodeAt(pos++);
        if (marker !== 0x28 /* ( */) { return false; }

        // Begin URL. While the current position is less than the length of the string,
        // increment until we find a closing tag ")". Everything in between is the URL.
        let urlStart = pos;
        while (pos < state.posMax) {
            marker = state.src.charCodeAt(pos++);

            if (marker === 0x29 /* ) */) {
                break;
            }
        }

        // Generate our token
        let token = {
            type: tokenName,
            level: state.level,
            link: state.src.slice(urlStart, pos - 1),
            content: marker
        };

        // Update the state position as the token successfully completed, push the token
        // onto the tokens array, and return true.
        state.pos = pos;
        state.push(token);
        return true;
    }

    private parseCaption() :void {

    }

    private parseStringLiteral() : void {
        
    }
}
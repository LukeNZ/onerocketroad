import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizationService, SafeHtml} from '@angular/platform-browser';
var Remarkable = require('remarkable'); // No typings yet

enum MediaType {
    RichImage = 1,
    Video = 2,
    Tweet = 3
}

interface Token {
    key: string;
    value: string;
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
        //this.remarkable.use(this.parseRichImages);
        this.remarkable.use(md => this.parseVideos(md));
        this.remarkable.use(md => this.parseTweets(md));
        this.remarkable.use(md => this.parseRichImages(md));

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

            // Force tweets to reload after Markdown rendering. This is bad. Create a window
            // service wrapper and DI.
            setTimeout(() => {
                if (window['twttr']) {
                    window['twttr'].widgets.load();
                }
            }, 0);

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
        md.inline.ruler.before('links', 'image', state => {
            return this.parseMedia(state, '!', 'image', (state, pos): any => {
                // Setup local environment, including acceptable formatting keywords; and an acceptable final keyword.
                let acceptableFormattingKeywords: string[] = ['left', 'right', 'wide'];
                let finalWord: string = null;
                let localPos: number = pos;

                // For each acceptable keyword (left, right, wide)...
                keywordsLoop:
                for (let formattingKeyword of acceptableFormattingKeywords) {
                    let formattingKeywordPos = 0;
                    localPos = pos;

                    // While the position in the keyword is less than the keyword length, grab the market from the localPosit
                    keywordLoop:
                    while (formattingKeywordPos < formattingKeyword.length) {
                        let marker = state.src.charCodeAt(localPos);
                        let keywordChar = formattingKeyword.charCodeAt(formattingKeywordPos);

                        if (marker === keywordChar) {
                            localPos++; formattingKeywordPos++;

                            if (formattingKeywordPos === formattingKeyword.length) {
                                finalWord = formattingKeyword;
                                break keywordsLoop;
                            }
                        } else {
                            break keywordLoop;
                        }
                    }
                }
                if (finalWord != null) {
                    return { key: 'formatting', value: finalWord, pos: localPos };
                }
                return false;
            });
        });

        md.renderer.rules.image = (tokens, idx, options) => {
            let link = tokens[idx].link;
            let caption = tokens[idx].caption;
            let formatting = tokens[idx].formatting;

            return '<img class="' + formatting + '" src="' + link + '" />' +
                '<p>'+ caption +'</p>';
        };
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
            let caption = tokens[idx].caption;
            return '<iframe width="1280" height="720" src="' + link
                +'?rel=0" frameborder="0" allowfullscreen></iframe><p>' + caption + '</p>';
        };
    }

    /**
     * A function that provides a block level Tweet display that matches a syntax of:
     * #[caption](tweet-link), rendering it into a tweet.
     *
     * @param md    The instance of Remarkable.
     */
    private parseTweets(md) : void {
        md.inline.ruler.before('text', 'tweet', state => {
            return this.parseMedia(state, '#', 'tweet');
        });

        // Render our tweet. This is not an easy task to accomplish, as the markdown pipe is called on
        // [innerHTML], which lacks an onload event.
        md.renderer.rules.tweet = (tokens, idx, options) => {
            let link = tokens[idx].link;
            let caption = tokens[idx].caption;
            return '<blockquote class="twitter-tweet" data-lang="en">' +
                '<a href="' + link + '"></a>' +
                '</blockquote><p>' + caption + '</p>';
        };
    }

    /**
     * @internal
     *
     * @param state
     * @param startingMarker
     * @param tokenName
     * @param postUrlFn
     * @returns {boolean}
     */
    private parseMedia(state, startingMarker, tokenName, postUrlFn = null) : boolean {
        // Store local copy of position so we don't overwrite it if we need to revert.
        let pos = state.pos;
        let marker = state.src.charCodeAt(pos++);

        // Expect a series of tokens that matches the substring "[](" (prefixed by a
        // starting marker, `!` for images, `@` for videos, `#` for tweets).
        // This defines the beginning of our pattern.
        if (marker !== startingMarker.charCodeAt()) { return false; }
        marker = state.src.charCodeAt(pos++);
        if (marker !== 0x5B /* [ */) { return false; }

        // Interpret a caption between the brackets.
        let captionStart = pos;
        while (pos < state.posMax) {
            marker = state.src.charCodeAt(pos++);
            // We have reached the end of the caption
            if (marker === 0x5D /* ] */) {
                // TODO: Allow for escaped brackets to appear in captions
                break;
            }
        }
        let captionEnd = pos - 1;
        marker = state.src.charCodeAt(pos++);

        // Being pattern matching the contents of the URL
        if (marker !== 0x28 /* ( */) { return false; }

        // Begin URL. While the current position is less than the length of the string,
        // increment until we find a closing tag ")". Everything in between is the URL.
        let urlStart = pos;
        while (pos < state.posMax) {
            marker = state.src.charCodeAt(pos++);

            if (postUrlFn != null) {
                if (marker === 0x20 /* Space */) {
                    break;
                }
            } else {
                if (marker === 0x29 /* ) */) {
                    break;
                }
            }
        }
        let urlEnd = pos - 1;

        // Generate our token to be added to the markdown tree
        let token = {
            type: tokenName,
            level: state.level,
            link: state.src.slice(urlStart, urlEnd),
            caption: state.src.slice(captionStart, captionEnd),
            content: marker
        };

        // Ability to specify additional content, and append to our token before pushing our token and position
        // back onto the state
        if (postUrlFn != null) {
            let result = postUrlFn(state, pos);
            if (result === false) {
                return false;
            }
            token[result.key] = result.value;
            pos = result.pos;
            marker = state.src.charCodeAt(pos++);

            if (marker !== 0x29 /* ) */) {
                return false;
            }
        }

        // Update the state position as the token successfully completed, push the token
        // onto the tokens array, and return true.
        state.pos = pos;
        state.push(token);
        return true;
    }

    private parseCaption() :void {}
}
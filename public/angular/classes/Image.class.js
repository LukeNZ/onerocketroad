"use strict";
var Image = (function () {
    function Image(id, filename, thumbname, summary, attribution, size, color, createdAt, updatedAt) {
        this.id = id;
        this.filename = filename;
        this.thumbname = thumbname;
        this.summary = summary;
        this.attribution = attribution;
        this.size = size;
        this.color = color;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    Image.prototype.getFileUrl = function () {
        return '/uploads/' + this.filename;
    };
    Image.prototype.getThumbUrl = function () {
        return '/uploads/' + this.thumbname;
    };
    Image.prototype.humanReadableSize = function () {
        return "";
    };
    Image.prototype.colorAsHex = function () {
        return "";
    };
    return Image;
}());
exports.Image = Image;

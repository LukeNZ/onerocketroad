"use strict";
var Draft = (function () {
    function Draft() {
    }
    Draft.prototype.chars = function () {
        return this.body ? this.body.length : 0;
    };
    return Draft;
}());
exports.Draft = Draft;

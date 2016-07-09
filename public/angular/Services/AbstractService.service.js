"use strict";
var Rx_1 = require("rxjs/Rx");
var AbstractService = (function () {
    function AbstractService() {
    }
    AbstractService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Rx_1.Observable.throw(errMsg);
    };
    return AbstractService;
}());
exports.AbstractService = AbstractService;

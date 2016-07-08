"use strict";
var AbstractService = (function () {
    function AbstractService() {
    }
    AbstractService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    };
    return AbstractService;
}());
exports.AbstractService = AbstractService;

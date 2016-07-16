"use strict";
(function (DraftStatus) {
    DraftStatus[DraftStatus["Draft"] = 1] = "Draft";
    DraftStatus[DraftStatus["AwaitingReview"] = 2] = "AwaitingReview";
    DraftStatus[DraftStatus["Reviewed"] = 3] = "Reviewed";
})(exports.DraftStatus || (exports.DraftStatus = {}));
var DraftStatus = exports.DraftStatus;

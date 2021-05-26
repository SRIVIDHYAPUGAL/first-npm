"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDatePart = exports.Greeter = void 0;
var moment = require("moment");
var Greeter = function (name) { return "Hello " + name; };
exports.Greeter = Greeter;
var getDatePart = function (m) {
    return moment([m.year(), m.month(), m.date()]);
};
exports.getDatePart = getDatePart;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.daysCount = exports.getDatePart = exports.Greeter = void 0;
var moment = require("moment");
var Greeter = function (name) { return "Hello " + name; };
exports.Greeter = Greeter;
var getDatePart = function (m) {
    return moment([m.year(), m.month(), m.date()]);
};
exports.getDatePart = getDatePart;
var daysCount = function (startDate, endDate, format) {
    if (format === void 0) { format = 'YYYY-MM-DD'; }
    return moment(endDate, format).diff(moment(startDate, format), 'days') + 1;
};
exports.daysCount = daysCount;

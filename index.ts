import moment = require('moment');
export const Greeter = (name: string) => `Hello ${name}`; 

export const getDatePart= (m: moment.Moment) => {
    return moment([m.year(), m.month(), m.date()]);
}
export const daysCount = (startDate: string, endDate: string, format = 'YYYY-MM-DD'): number => {
    return moment(endDate, format).diff(moment(startDate, format), 'days') + 1;
}
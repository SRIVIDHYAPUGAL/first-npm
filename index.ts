import moment = require('moment');
export const Greeter = (name: string) => `Hello ${name}`; 

export const getDatePart= (m: moment.Moment) => {
    return moment([m.year(), m.month(), m.date()]);
}
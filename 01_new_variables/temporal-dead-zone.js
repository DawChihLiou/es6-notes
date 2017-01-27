/*
 * calling var that is not yet defined
 */
console.log(rawCashew); // undefined
var rawCashew = 'unroasted cashew';

/*
 * calling const/let that is not yet defined
 */
console.log(bestCashew); // ReferenceError
const bestCashew = 'unsalted & roasted yummy cashew';

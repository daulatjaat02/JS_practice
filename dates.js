"use strict";

let future = new Date(2024, 10, 17, 23, 12);
console.log(+future);

let calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
let days = calcDaysPassed(new Date(2024, 1, 23), new Date(2024, 1, 12));
console.log(days);

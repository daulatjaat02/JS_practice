"use strict";

//// Day - 1 / #100daysOfCode

// 1. How numbers work in javasctip ?
// 2. How to convert values to numbers ?
// 3. Check a certian value is a number or not ?

// 1. --
// Base  : Binary , Deciaml
// 1. Binary = 0 and 1(Only two numbers ) It's called 'Base 2', represented as a string
// 2. Decimal = 0 to 9( total 10 numbers ) It's called 'Base 10'

// // Converting binary string to decimal
// const binaryString = "101010";
// const decimalFromBinary = parseInt(binaryString, 2);
// console.log(decimalFromBinary); //  42

// // Alternatively, We can directly use binary literals (prefixed with 0b)
// const binaryLiteral = 0b101010;
// console.log(binaryLiteral); // 42(Decimal number)

// // Converting decimal to binary
// const decimalNumber = 42;
// const binaryFromDecimal = decimalNumber.toString(2);
// console.log(binaryFromDecimal); // '101010'

// console.log(25 === 25.0); // true
// console.log(0.1 + 0.2 === 0.3); // false
// console.log(0.1 + 0.2); // 0.30000000000000004

// // 2. -- converting into Numbers

// //// 1st way = Number (..)
// //// 2nd way = +(..)
// //// 3rd way = parsing ( parseInt, parseFloat)

// // parseInt
// console.log(Number.parseInt("30px")); // 30

// /// parseint accept a second argument : redex ( It is the base of the Numerical System)
// console.log(Number.parseInt("30px", 10)); // 30
// console.log(Number.parseInt("e67", 10)); // NaN

// //// parsefloat (Recommended)
// console.log(Number.parseInt("2.5rem")); // 2
// console.log(Number.parseFloat("2.5rem")); // 2.5

// // 3. -- isNaN()  &  isFinite()  &  isInteger()
// ///// check if value is NaN
// console.log(Number.isNaN(20)); // false
// console.log(Number.isNaN("20")); // false
// console.log(Number.isNaN(+"20X")); // true
// console.log(Number.isNaN(12 / 0)); // false

// /// Ultimate methods to check if value is a number (better way to check) :  isFinite()
// console.log(Number.isFinite(20)); // true
// console.log(Number.isFinite("20")); // false
// console.log(Number.isFinite(+"20X")); // false
// console.log(Number.isFinite(12 / 0)); // false

// ////
// console.log(Number.isInteger(23)); // true
// console.log(Number.isInteger(23.0)); // true
// console.log(Number.isInteger(23.34)); // false
// console.log(Number.isInteger(9 / 0)); // false itgit

///////////////////////////////////////////////////////////////////////////////////////////

// // Day - 2 / #100daysOfCode

// // Math and Rounding

// // Math Methods  :

// // 1. Math.sqrt()
// console.log(Math.sqrt(225)); // 15
// console.log(225 ** (1 / 2)); // 15
// console.log(8 ** (1 / 3)); // 2

// // 2. Math.max() & Math.min()
// console.log(Math.max(23, 56, 89, 60, 12, 45)); // 89
// console.log(Math.max(23, 56, "89", 60, 12, 45)); // 89
// console.log(Math.max(23, 56, "89rem", 60, 12, 45)); // NaN
// console.log(Math.min(23, 56, "89", 60, 12, 45)); // 12

// // 3. Math.PI()
// console.log(Math.PI * Number.parseFloat("10px") ** 2); // 314.1592653589793
// // formula : π * r^2

// // 4. Math.round() / Math.ceil() / Math.trunc() / Math.floor()
// console.log(Math.round(12.4)); // 12
// console.log(Math.round(12.5)); // 13 // round the nearest number
// console.log(Math.round(12.6)); // 13

// console.log(Math.ceil(12.5)); // 13 // round up
// console.log(Math.ceil(12.1)); // 13
// console.log(Math.ceil(12.9)); // 13

// // Math.trunc() and Math.floor both round down and cut the decimal part (but not with negative numbers)
// console.log(Math.floor(12.5)); // 12 // round down
// console.log(Math.floor("12.1")); // 12 // Does type coercion itself(convert string to number)
// console.log(Math.floor(12.9)); // 12

// console.log(Math.trunc(12.6)); // 12
// console.log(Math.trunc(12.5)); // 12

// // with negative numbers floor round up and trunc round down
// console.log(Math.trunc(-23.12)); // -23
// console.log(Math.floor(-23.12)); // -24

// // 5. Math.random()
// console.log(Math.round(Math.random() * 10)); // 0 - 9

// const randomInt = (min, max) =>
//   Math.round(Math.random() * (max - min) + 1) + min;

// console.log(randomInt(10, 20)); // 10 - 20

// // Rounding Decimals

// // toFixed() : output a string
// console.log((28.9800998).toFixed(3)); // 28.980
// console.log(+(28.9800998).toFixed(2)); // 28.98  (+ is used to convert string to number)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Day - 3 / #100daysOfCode

// // Remainder Operator
// console.log(10 % 3); // 1 => It means (10 divided by 3 equals 3 with a remainder of 1)

// const dividend = 17;
// const divisor = 5;
// console.log(dividend % divisor); // Output: 2 (17 divided by 5 equals 3 with a remainder of 2)

// // Leap Year
// const isLeapYear = function (year) {
//   if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
//     console.log(`${year} is a leap year`);
//   } else {
//     console.log(`${year} is not a leap year`);
//   }
// };
// isLeapYear(2024); // 2024 is a leap year
// isLeapYear(2000); // 2000 is a leap year
// isLeapYear(2005); //  2005 is not a leap year

// // Find Last Digit
// const findLastDigit = (num) => {
//   const lastnum = num % 10;
//   console.log(lastnum);
// };
// findLastDigit(2343); // 3
// findLastDigit(234874518541); // 1

// // isEven ()
// const isEven = (num) => {
//   if (num % 2 === 0) {
//     console.log(`${num} is an even number`);
//   } else {
//     console.log(`${num} is an odd number`);
//   }
// };
// isEven(23); // 23 is an odd number
// isEven("25"); // 25 is an odd number

// // Numeric Seperators

// // keep in mind :
// // 1. we can't use , (comma) for seperating number
// // 2. we can't use it just after and before decimal
// // 3. we can't convert string to number with Numeric Seperators

// console.log(123_456_789); // 123456789
// console.log(123_456_789.123_456_789); // 123456789.123456789
// console.log(12_234); // 12234
// console.log(1_2234); // 12234
// console.log(1_22_34); // 12234

// console.log("234_123_45"); // 23412345
// console.log(+"234_123_45"); // NaN (we can't convert string to number  )
// console.log(parseFloat("234_123_45")); // 234 (which numbers are after _ will be ignored)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Day - 4 / #100daysOfCode

// // BigInt

// // MAX NUMBER OF JAVASCRIPT
// console.log(2 ** 53 - 1); // 9007199254740991
// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// // Those numbers are bigger then this are not calculated accurately
// console.log(2 ** 53 + 2); // 9007199254740994
// console.log(2 ** 53 + 3); // 9007199254740996
// console.log(2 ** 53 + 4); // 9007199254740996
// console.log(2 ** 53 + 9); // 9007199254741000
// console.log(2 ** 53 + 8); // 9007199254741000
// console.log(2 ** 53 + 5); // 9007199254740996

// // Now BigInt comes

// console.log(78918971847533966649879884919878184134878187818643459845n); // 78918971847533966649879884919878184134878187818643459845n
// console.log(BigInt(78918971847533966649879884919878184134878187818643459845)); // 78918971847533964674552813104729899937469478857420570624n

// // Don't use BigInt with very big numbers only use " n "

// console.log(BigInt(78918971847533)); // 78918971847533n

// // Math Operations are not possible with BigInt
// // console.log(Math.random() * 100n); // TyepeError: Cannot mix BigInt and other types

// // Operations
// console.log(10000n * 10000n); // 100000000n
// console.log(7481897941987456358567841984n * 10000000n); // 74818979419874563585678419840000000n

// // console.log(7481897941987456358567841984n * 10000000); //Cannot mix BigInt and other types, use explicit conversions

// const huge = 68748189784951757784189744n;
// const num = 69;
// console.log(huge * BigInt(num)); // 4743625095161671287109092336n

// console.log(500 > 499n); // true
// console.log("500" == 500n); // true
// console.log(500 === 500n); // false
// console.log(500 !== 500n); // true

// console.log(typeof huge); // bigint

// // Division

// const a = 10n;
// const b = 3n;
// const div = a / b;
// console.log(div); // 3n (The nearest bigint value)
// console.log(10 / 3); // 3.3333333333333335

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Day - 5 / #100daysOfCode .............. change the date

// // Creating Dates :

// // 1. Current Date and Time
// const now = new Date();
// console.log(now); // ........................ GMT+0530 (India Standard Time)

// // 2. Specific Date and Time
// const date = new Date("Tue Feb 13 2024 19:31:04");
// console.log(date); // Tue Feb 13 2024 19:31:04 GMT+0530 (India Standard Time)

// console.log(new Date("November 17 2004")); // Wed Nov 17 2004 00:00:00 GMT+0530 (India Standard Time)

// // 3. Using Individual Components
// console.log(new Date(2025, 1, 12, 7, 10, 24)); // Wed Feb 12 2025 07:10:24 GMT+0530 (India Standard Time)
// // Month Index is started from (0 : January)

// // Autocorrect
// console.log(new Date(2025, 1, 31)); // Mon Mar 03 2025 00:00:00 GMT+0530 (India Standard Time)

// console.log(new Date(0)); // Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)

// // Days to milliseconds (In a day)
// console.log(new Date(1 * 24 * 60 * 60 * 1000)); // Fri Jan 02 1970 05:30:00 GMT+0530 (India Standard Time)
// console.log(1 * 24 * 60 * 60 * 1000); // 86400000 (It's called timestamp)

// // Working with Dates
// const future = new Date(2025, 10, 17, 15, 12, 48, 345);
// console.log(future);

// console.log(future.getFullYear()); // 2025
// console.log(future.getMonth()); // 10
// console.log(future.getDate()); // 17 ( Date )
// console.log(future.getDay()); // 1 - The Number of the day in week  (Monday)
// console.log(future.getHours()); // 15
// console.log(future.getMinutes()); // 12
// console.log(future.getSeconds()); // 48
// console.log(future.getMilliseconds()); // 345

// console.log(future.toISOString()); // 2025-11-17T09:42:48.345Z

// console.log(future.getTime()); // Timestamp : 1763372568345

// // Reverse the Timestamp
// console.log(new Date(1763372568345)); // Mon Nov 17 2025 15:12:48 GMT+0530 (India Standard Time)

// // Special Method to get now's Timestamp
// console.log(Date.now()); // 1707834276493

// // Just like get we have all set methods :

// // Operations With Dates :
// const future1 = new Date(2025, 10, 28);
// console.log(+future1); // 1764268200000

// const calcDaysPassed = function (date1, date2) {
//   return Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
// };
// const difference = calcDaysPassed(new Date(2025, 11, 1), new Date(2025, 11, 7));
// console.log(difference); // 6

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Day - 6 / #100daysOfCode

// INTL API : Internationalizing Dates

// const now = new Date();
// const options = {
//   hour: "numeric",
//   minute: "numeric",
//   day: "numeric",
//   month: "long",
//   year: "numeric",
//   weekday: "long",
// };
// const locale = navigator.language; // en-US

// // date.textContent = new Intl.DateTimeFormat("en-UK", options).format(now);
// date.textContent = new Intl.DateTimeFormat(locale, options).format(now);

// Examples :

// ex : 1 - Display date in English
// const date = new Date("2024-02-14T15:30:00");
// const options = {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
// };
// const locale = "en-US";

// const formateDate = new Intl.DateTimeFormat(locale, options).format(date);

// console.log(formateDate); // wednesday, February 14, 2024

// ex : 2 - Display date in french
// const date = new Date("2024-02-14T15:30:00");
// const options = {
//   dateStyle: "short",
// };
// const locale = "fr-FR";
// const formatDate = new Intl.DateTimeFormat(locale, options).format(date);
// console.log(formatDate); // 14/02/2024

// // ex : 3 - Display date in spanish
// const date = new Date("2024-02-14T15:30:00");

// const options = {
//   dateStyle: "medium",
//   timeStyle: "medium",
// };
// const locale = "es-ES";
// const formatDate = new Intl.DateTimeFormat(locale, options).format(date);
// console.log(formatDate); // 14 feb 2024, 15:30:00

// ex : 4 - Display date in German
// const date = new Date("2024-02-14T15:30:00");

// const options = {
//   dateStyle: "full",
//   timeStyle: "long",
//   tiemzoneName: "short",
// };
// const locale = "de-DE";

// const formatDate = new Intl.DateTimeFormat(locale, options).format(date);
// console.log(formatDate); // Mittwoch, 14. Februar 2024 um 15:30:00 GMT+5:30

// ex : 5 - Display date in Italian

// const date = new Date("2024-02-14T15:30:00");
// const options = {
//   dateStyle: "long",
// };
// const locale = "it-IT";
// const formatDate = new Intl.DateTimeFormat(locale, options).format(date);
// console.log(formatDate); // 14 febbraio 2024

// ex : 6 - Display date in Russian
const date = new Date("2024-02-14T15:30:00");

const options = {
  dateStyle: "full",
  timeStyle: "long",
};

const locale = "ru-RU";
const formatDate = new Intl.DateTimeFormat(locale, options).format(date);
console.log(formatDate); // среда, 14 февраля 2024 г. в 15:30:00 GMT+5:30

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .
// .
// .
// .
// .
// .
// .
// .'
// '
//     .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .'
// '
//     .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .'
// '
//     .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .'
// '
//     .
// .
// .
// .
// .

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let future = new Date(2024, 10, 17, 23, 12);
// console.log(+future);

// let calcDaysPassed = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
// let days = calcDaysPassed(new Date(2024, 1, 23), new Date(2024, 1, 12));
// console.log(days);

///////////////////////////////////////////////////////////////////////////////
// Chapter 1 : Converting and checking numbers

// let decimalNumber = 26;
// let binaryEquivalent = decimalNumber.toString(2);
// console.log(binaryEquivalent); // Output: "11010"

// console.log(isNaN("daulat")); // true
// console.log(isNaN(26)); // false
let ceiledNumber = Math.ceil(4.2);
// console.log(ceiledNumber); // Output: 5

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

// // Day - x / #100daysOfCode

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

// Day - x / #100daysOfCode

// Remainder Operator
console.log(10 % 3); // 1 => It means (10 divided by 3 equals 3 with a remainder of 1)

const dividend = 17;
const divisor = 5;
console.log(dividend % divisor); // Output: 2 (17 divided by 5 equals 3 with a remainder of 2)

// Leap Year
const isLeapYear = function (year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
};
isLeapYear(2024); // 2024 is a leap year
isLeapYear(2000); // 2000 is a leap year
isLeapYear(2005); //  2005 is not a leap year

// Find Last Digit
const findLastDigit = (num) => {
  const lastnum = num % 10;
  console.log(lastnum);
};
findLastDigit(2343); // 3
findLastDigit(234874518541); // 1

// isEven ()
const isEven = (num) => {
  if (num % 2 === 0) {
    console.log(`${num} is an even number`);
  } else {
    console.log(`${num} is an odd number`);
  }
};
isEven(23); // 23 is an odd number
isEven("25"); // 25 is an odd number
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

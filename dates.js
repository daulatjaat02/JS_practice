"use strict";

//// Day - 1 / #100daysOfCode

// 1. How numbers work in javasctip ?
// 2. How to convert values to numbers ?
// 3. Check a certian value is a number or not ?

// 1. --
// Base  : Binary , Deciaml
// 1. Binary = 0 and 1(Only two numbers ) It's called 'Base 2', represented as a string
// 2. Decimal = 0 to 9( total 10 numbers ) It's called 'Base 10'

// Converting binary string to decimal
const binaryString = "101010";
const decimalFromBinary = parseInt(binaryString, 2);
console.log(decimalFromBinary); //  42

// Alternatively, We can directly use binary literals (prefixed with 0b)
const binaryLiteral = 0b101010;
console.log(binaryLiteral); // 42(Decimal number)

// Converting decimal to binary
const decimalNumber = 42;
const binaryFromDecimal = decimalNumber.toString(2);
console.log(binaryFromDecimal); // '101010'

console.log(25 === 25.0); // true
console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004

// 2. -- converting into Numbers

//// 1st way = Number (..)
//// 2nd way = +(..)
//// 3rd way = parsing ( parseInt, parseFloat)

// parseInt
console.log(Number.parseInt("30px")); // 30

/// parseint accept a second argument : redex ( It is the base of the Numerical System)
console.log(Number.parseInt("30px", 10)); // 30
console.log(Number.parseInt("e67", 10)); // NaN

//// parsefloat (Recommended)
console.log(Number.parseInt("2.5rem")); // 2
console.log(Number.parseFloat("2.5rem")); // 2.5

// 3. -- isNaN()  &  isFinite()  &  isInteger()
///// check if value is NaN
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN("20")); // false
console.log(Number.isNaN(+"20X")); // true
console.log(Number.isNaN(12 / 0)); // false

/// Ultimate methods to check if value is a number (better way to check) :  isFinite()
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite("20")); // false
console.log(Number.isFinite(+"20X")); // false
console.log(Number.isFinite(12 / 0)); // false

////
console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23.34)); // false
console.log(Number.isInteger(9 / 0)); // false itgit

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

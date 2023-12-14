"use strict";

// Data Structures, Modern operators and strings

//////////////////////////////////
// 8. Looping Objects : Object keys, values and Entries
// const openingHours = {
//   sun: {
//     open: 12,
//     close: 22,
//   },
//   mon: {
//     open: 11,
//     close: 23,
//   },
//   tue: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// let shop = {
//   openingHours,
// };
// let properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are opening ${properties.length} days : `;
// for (let day of properties) {
//   openStr += ` ${day} `;
// }
// console.log(openStr);

// properties = Object.values(openingHours);
// console.log(properties);

// let properties = Object.entries(openingHours);
// console.log(properties);

// for (const [day, { open, close }] of properties) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

/////////////////////////////////////////////////////////////
// 7.   Optional Channing ( ? ) : null , undefined
// let computer = {
//   moniter: "zebronics",
//   keyboard: "hp",
//   motherBoard: {
//     brand: "Gigabyte",
//     model: "GA-Z590-AORUS-PRO-AX",
//     chipset: "Intel Z590",
//   },
//   mouse: "hp",
//   cpu: "zebronics",
//   speaker: "intel",
//   pc: null,
// };
// let item = computer.motherBoard.brand;
// let item1 = computer.motherBoard.price;
// let item2 = computer.price?.model;
// let item3 = computer.pc?.model;
// console.log(item, item1, item2, item3); //Gigabyte undefined undefined undefined

////////////////////////////
// 6. Object enhanced literals
// let company = {
//   // Objecet Enhanced Literals
//   computer,
// };
// console.log(company); // {computer: {…}}

//////////////////////////////////////
// 5. for...of loop

// let books = ["hindi", "english", "math", "science", "sst", "geography"];
// for (let book of books) {
//   console.log(book);
// }

// let religion = "Hindu";
// for (let key of religion) {
//   console.log(key);
// }

////////////////////////////////////////////////////
// //4.  The Nullish coalescing Operator (null and undefined )
// let name = "daulat";
// let age;
// let first = null;
// console.log(first ?? "Invalid search");

// let num = 34;
// let num2 = 0; //(falsy value)
// console.log(num2 ?? num); // 0
// console.log(num2 || num); // 34 ( 0 is a falsy value)

//////////////////////////////////////////////
// 3. Spread/ Ellipse Opetator

// // *   Iterables: arrays, strings, maps, sets. NOT objects
// let str = "daulat";
// let letters = [...str, "", 5];
// console.log(...str); // d a u l a t
// console.log(letters); //  ['d', 'a', 'u', 'l', 'a', 't', '', 5]

// A. with Arrays
// // a. Concatenating Arrays
// let num = [1, 2, 4];
// let num2 = [3, 5, 6];
// let numTotal = [...num, ...num2];
// console.log(numTotal);

// // b. Coping Arrays
// let numCopy = [...num];

// // c. Adding elements to an arrry
// let numbers = [...numTotal, 7, 8, 9];
// console.log(numbers);

// B. with objects :
// Merging Objetcs
// coping Objects

// // C. with functions
// let sum = (a, b, c, d) => {
//   return a + b + c + d;
// };
// console.log(sum(...numbers));

//////////////////////////////////////////////
// 2. Destructure Objects
// let computer = {
//   moniter: "zebronics",
//   keyboard: "hp",
//   motherBoard: {
//     brand: "Gigabyte",
//     model: "GA-Z590-AORUS-PRO-AX",
//     chipset: "Intel Z590",
//   },
//   mouse: "hp",
//   cpu: "zebronics",
//   speaker: "intel",
// };
// // a. Basic Object Destructuring
// let { moniter, keyboard, mouse, cpu, speaker } = computer;
// console.log(keyboard, moniter); //hp zebronics

// // b. Renaming variables
// let { moniter: primary, keyboard: secondry } = computer;
// console.log(primary, secondry); //zebronics hp

// // c. Default values
// let { mice = "sony" } = computer;
// console.log(mice); // sony

//  let { menu = [], starter: start = [] } =
//    computer;
//  console.log(menu, start);

// // d. Mutating variables
// let a = 234;
// let b = 3421;
// let obj = { a: 32, b: 44, c: 67 };
// ({ a, b } = obj);
// console.log(a, b);

// // e. Nested Object Destructuring {Objecsts in {objects}}
// let {
//   moniter,
//   keyboard,
//   motherBoard: { brand, model },
// } = computer;
// console.log(moniter, model, brand); // zebronics GA-Z590-AORUS-PRO-AX Gigabyte

// // f. Rest Parameter (Spread Operatro/ ellipse operator)
// let {
//   mointer,
//   keyboard,
//   motherBoard: { brand, ...restinmotherBoard },
//   ...others
// } = computer;
// console.log(keyboard, brand, others); //hp Gigabyte {moniter: 'zebronics', mouse: 'hp', cpu: 'zebronics', speaker: 'intel'}

////////////////////////////////////////////////////////////
// 1. Destructure Arrays
//  a. Basic Syntax
// let num = [1, 2, 3, 4, 5];
// let [first, second, third, fourth, fifth] = num;
// console.log(first, second, fifth);

// b. Skipping values
// let [first, , third, , fifth] = num;
// console.log(first, third, fifth);

// c.Rest Parameter (Spread Operatro/ ellipse operator)
// let[ first, secpond, ...others] = num;
// console.log(others);

// d. Default Values
// let num1 = [1, 2];
// let [first, second, last = 4] = num1;
// console.log(first, second, last);

// // e. Switching variables
// let book = {
//   hindiMedium: ["math", "polity", "science", "geography"],
//   englishMedium: ["History", "Computer Science", "Physics", "Home Science"],
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };
// let [main, , secondry] = book.hindiMedium;
// let temp = main;
// main = secondry;
// secondry = temp;
// console.log(main, secondry);

// // f. Nested Distructuring [Arrays in [arrays]]
// let num2 = [1, 2, [3, 4, 5], 6, [7, 8, 9]];
// let [first1, , [third, , fifth], , [, ...others]] = num2;
// console.log(first1, [third, fifth], others);

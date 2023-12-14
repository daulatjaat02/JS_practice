"use strict";

// Data Structures, Modern operators and strings

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

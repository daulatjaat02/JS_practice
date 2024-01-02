"use strict ";

// // Closures in js
// function outerFunction() {
//   let outerVariable = "I'm a outer variable";
//   function innerFunction() {
//     console.log(outerVariable);
//   }
//   return innerFunction();
// }

// let buses = function () {
//   let bus = 0;
//   return function () {
//     bus += 1;
//     console.log(bus);
//   };
// };
// let busFun = buses();
// // busFun();
// // busFun();

// // More example with closures //////////////////////
// // We don't need to return function
// // Example - 1
// let f;

// let g = function () {
//   let a = 12;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// let h = function () {
//   let b = 144;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// // Re-assigning f function
// h();
// f();
// console.dir(f);

// // Example - 2  - Timer

// let boardPassanger = function (n, wait) {
//   let perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// // let perGroup = 1000;
// boardPassanger(180, 3);

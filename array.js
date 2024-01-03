"use strict";

/////////////////////////////////////////////////////
// Array Methods

// let arr = ["a", "b", "c", "d", "e", "f", "g"];

// //1.  slice method - imuted (can't change the original array)
// console.log(arr.slice(3));
// console.log(arr.slice(3, 5)); // The end(5th) paremeter is not included in the output
// console.log(arr.slice(1, -1));
// console.log(arr.slice(-1));
// console.log(arr.slice()); // A shallow copy of the array
// console.log([...arr]); // Also a shallow copy of the array

// // 2. Splice Method - Muted the array
// console.log(arr.splice(3)); //(4) ['d', 'e', 'f', 'g']
// console.log(arr.splice(1, 2)); //(2) ['b', 'c']
// //(from delete, How many delete)
// console.log(arr); //['a']  //The Original

// // 3. reverse method : Muted the original array

// let arr2 = ["n", "m", "l", "k", "j", "i", "h"];
// console.log(arr2.reverse());
// // console.log(arr2);

// // 4. concat Method : Imuted the array
// let letter = arr.concat(arr2);
// console.log(letter); // all letter
// console.log([...arr, ...arr2]); // the another way to concat

// // 5. join method - Imuted the array
// console.log(letter.join("-")); // Output will be the 'String'
// console.log(letter);

////////////////////////////////////////////////////////////////

// // 6. at Method
// let arr = [23, 12, 67, 90];
// console.log(arr[0]);
// console.log(arr.at(0));

// // getting the last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// // also  worked for strings :
// console.log("Daulat Jajra".at(0));

/////////////////////////////////////////////////////////////////////////

// // 7. ForEach Method
// let movements = [200, 450, -400, 3000, -600, -130, 70, 1300];

// // for (let movement in movements) {
// for (const [i, movement] of movements.entries()) {
//   movements[movement] > 0
//     ? console.log(`Movement ${i + 1} : You deposited ${movements[movement]}`)
//     : console.log(
//         `Movement ${i + 1} : You withdrew ${Math.abs(movements[movement])}`
//       );
// }

// movements.forEach(function (movement) {
//   movement > 0
//     ? console.log(`You deposited ${movement}`)
//     : console.log(`You withdrew ${Math.abs(movement)}`);
// });

// // forEach Method with sets and maps
// // map
// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound Sterling"],
//   ["Rupee", "Indian"],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key} : ${value}`);
// });

// // set

// let currenciesUnique = new Set([
//   "USD",
//   "Rupee",
//   "USD",
//   "Rupee",
//   "GBP",
//   "Rupee",
//   "EUR",
//   "Rupee",
//   "GBP",
//   "Rupee",
// ]);

// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value} : ${value}`);
// });

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
let movements = [200, 450, -400, 3000, -600, -130, 70, 1300];

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

// ///////////////////////////////////////////
// // Map, reduce and filter

// let numbers = [1, 2, 3, 4, 5];
// let square = numbers.map((num) => num ** 2);
// console.log(square);

// let evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers);

// let sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum);

// // combination
// let result = numbers
//   .filter((num) => num % 2 === 0)
//   .map((num) => num ** 2)
//   .reduce((acc, num) => acc + num, 0);
// console.log(result);

//////////////////////////////////////////////////////////////////
// The map method
// the Euro to US Doller

// let euroToUsd = 1.1;
// let movementsUSD = movements.map(function (mov) {
//   return mov * euroToUsd;
// });
/// Arrow function
// let movementUSDE = movements.map((mov) => mov * euroToUsd);
// console.log(movementUSDE);

// console.log(movements);
// console.log(movementsUSD);

// // try with for loop
// let movementsUSDfor = [];
// for (let mov of movements) {
//   movementsUSDfor.push(mov * euroToUsd);
// }
// console.log(movementsUSDfor);

// Got all things in a array not one by one : Didn't create a side-effects
// let movementDescriptions = movements.map((mov, i, arr) => {
//   let movType = mov > 0 ? "deposited" : "withdrew";
//   return `Movement ${i + 1} : You ${movType} ${Math.abs(mov)}`;
// });
// console.log(movementDescriptions);

//////////////////////////////////////////
// // map() Examples

// // 1. Doubling each element in an array
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let square = numbers.map((num) => num * num);
// console.log(square);

// // 2. Converting strings to upperCase
// let names = ["Daulat", "Muskan", "Manisha", "Suman", "Puspa", "Yash"];
// let UpperCase = names.map((word) => word.toUpperCase());
// console.log(UpperCase);

// //3. Extracting values from an array of objects

// let students = [
//   { name: "Daulat", age: 20, city: "Jaipur" },
//   { name: "Puspa", age: 25, city: "Udaipur" },
//   { name: "Manish", age: 20, city: "Jodhpur" },
// ];
// let girls = [
//   { name: "Keya", age: 20, city: "Jaipur" },
//   { name: "Puspa", age: 25, city: "Udaipur" },
//   { name: "Jublina", age: 20, city: "Jodhpur" },
// ];

// let studentsName = students.map((students) => students.name);
// let girlsName = girls.map((students) => students.name);

// console.log(studentsName);
// console.log(girlsName);

// // 4. Calculating square-roots
// let squares = [9, 16, 25, 36, 49, 64];
// let squareRoots = squares.map((square) => Math.sqrt(square));
// console.log(squareRoots);

// // 5. Using map with index parameter
// let languages = ["JavaScript", "Python", "C", "C++", "Java", "PHP"];
// let languagesIndex = languages.map((lang, i) => `${i + 1} - ${lang}`);
// console.log(languagesIndex);

// // 6. Mapping over an array of objects

// let users = [
//   { id: 1, name: "Daulat", age: 20 },
//   { id: 2, name: "Puspa", age: 25 },
//   { id: 3, name: "Manish", age: 20 },
// ];

// let ids = users.map((users) => users.id);
// console.log(ids);

// // 7. Transforming and filterin using map and filter

// numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let SqaureEvens = numbers.filter((sum) => sum % 2 === 0).map((sum) => sum ** 2);
// console.log(SqaureEvens);

// // 8. using 'thisArg' to double values with a custom mulitplier

// numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let mulitplier = 3;
// let multiplieNumbers = numbers.map(function (num) {
//   return this * num;
// }, mulitplier);
// console.log(multiplieNumbers);

// The filter method in js

// let deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// // with for loop
// let depositsfor = [];
// for (let mov of movements) if (mov > 0) depositsfor.push(mov);
// console.log(depositsfor);

// let withdrewals = movements.filter(function (mov) {
//   return mov < 0;
// });
// console.log(withdrewals);

// Examples :

// // 1. filtering even numbers
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers);

// // filtering name starting with D
// let names = [
//   "David",
//   "Dayal",
//   "Priya",
//   "Dipak",
//   "Puspa",
//   "Daulat",
//   "Pratik",
//   "Dulal",
//   "Denaas",
//   "Muskaan",
// ];

// let Dnames = names.filter((name) => name.charAt(0) === "D");
// console.log(Dnames);

// // Filtering objects with a certain property value

// let products = [
//   { product: "Gun", price: 1200 },
//   { product: "Laptop", price: 500 },
//   { product: "Watch", price: 100 },
//   { product: "Phone", price: 800 },
//   { product: "Book", price: 120 },
// ];

// let affordableProducts = products.filter((products) => products.price < 500);
// console.log(affordableProducts);

// // filtering based on index
// numbers = [10, 20, 30, 40, 50, 60, 70];

// let oddNumbersIndex = numbers.filter((num, i) => i % 2 === 0);
// console.log(oddNumbersIndex);

// ////////////////////////////////////////////////////////////////////////
// //The reduce() Method

// console.log(movements);

// // accumulator just like a SHOWBALL
// let balance = movements.reduce((acc, mov, i) => {
//   console.log(`Iteration : ${i} : ${acc}`);
//   return acc + mov;
// }, 0);
// console.log(balance);

// // With array function
// let balance2 = movements.reduce((acc, mov, i) => acc + mov);
// console.log(balance2);

// // Do this thing manually
// let balance = 0;
// for (let mov of movements) {
//   balance += mov;
// }
// console.log(balance);

// get the maximum value of the array here

// let max = movements.reduce((acc, mov) => (acc > mov ? acc : mov), movements[0]);
// console.log(max);

////////////////////////////////////////////////////////////////////////////

// // The magic of chaining methods ( map, filter, reduce )

// let euroToUsd = 1.1;

// let totalDepositsUSD = movements
//   .filter((mov) => mov > 0)
//   .map((mov) => mov * euroToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

// The Find Method
// let firstWithdrawa = movements.find((mov) => mov < 0);
// console.log(firstWithdrawa);

// With for loop
// let firstWithdrawal;
// for (let mov of movements) {
//   if (mov < 0) {
//     firstWithdrawal = mov;
//   }
// }
// console.log(movements);
// console.log(firstWithdrawal);

// find Index Method

// // some and every method in js
// console.log(movements);
// // Equality
// console.log(movements.includes(-130));

// // SOME : Condition
// let anyDeposits = movements.some((mov) => mov > 4000);
// console.log(anyDeposits);

// // Every
// console.log(movements.every((mov) => mov > 0));
// console.log(account4.movements.every((mov) => mov > 0));

// // Separate Callback()
// let deposit = (mov) => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

//////
// // Flat and FlatMap method

// let arr = [[1, 2, 3], [4, 5, 6], 7, 8, [9, 10]];
// console.log(arr.flat());
// let arrDeep = [[1, [2, [2, 2], [3, 3]]], [[4, 5], 6], 7, 8, [9, 10]];
// console.log(arrDeep.flat(3)); // inside the flat the level no : which is 3 for arrDeep

// // chaining
// // With flat method
// let overalBalance = accounts
//   .map((acc) => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// FLATMAP : The combination of the map and flat
// // with flatmap method
// let overalBalance = accounts
//   .flatMap((acc) => acc.movements) // just for the level one
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

//////////////////////////////////////////////////
// // sorting in js
// // With Strings
// let owners = ["Jonas", "Zach", "Adam", "Martha"];
// console.log(owners.sort()); // Muted the original array

// // With Numbers
// let numbers = [323, 5, 34, 64, 7, 7, 34, 3, 7, 9, 1, 1, 0, 45, 3, 455, 89];
// console.log(numbers.sort());
// console.log(movements.sort()); // sorted like strings

// // return < 0, A, B (keep order)
// // return > 0, B, A (keep order)

// // Assending
// movements.sort((a, b) => a - b);
// console.log(movements);
// // Desending
// movements.sort((a, b) => b - a);
// console.log(movements);

//////////////////////////////////////////////////////
// More ways of creating and filling arrays

// Empty arrays + fill method
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let x = new Array(7);
// console.log(x);

// // can't add any call method like : map, filter, ..............
// // Only one mehtod is working for it : fill()

// x.fill(1); // Muted the original one
// console.log(x);

// x.fill(1, 3, 5); // (fill, start, end(notIncluded))
// // arr.fill(23, 4, 6);
// arr.fill(23, 2, 6);
// console.log(arr);

// // array.from() Mehthod
// let y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// let z = Array.from({ length: 7 }, (_, i) => i + 1); // The underscore(_) : not use this parameter

// console.log(z);

// // Creating an array using the Array constructor
// const numbers = new Array(1, 2, 3, 4, 5);

// // Using map to square each element
// const squaredNumbers = numbers.map((num) => num ** 2);
// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// // Using filter to get even numbers
// const evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4]

// // Using reduce to calculate the sum
// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum); // Output: 15

"use strict";

//////////////////////////////////////////////////////////////////////////////////////////////////

//// A. Array Methods

//// 1. slice(startIndex, endIndex)

// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.slice(2, 5)); // [3, 4, 5]
// console.log(arr.slice(-2)); // [6, 7]
// console.log(arr.slice(2, -1)); // [3, 4, 5, 6]
// console.log(arr.slice(-2, 1)); //  []

// console.log(arr.slice()); // [1, 2, 3, 4, 5, 6, 7]  (copy )
// console.log([...arr]); // [1, 2, 3, 4, 5, 6, 7] (copy )

//// 2. splice (starterIndex, deleteCount, itemsToAdd)
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let arrDelete = arr.splice(3, 3, "a", "b", "c");

// // It changes the original array
// console.log(arrDelete); // [4, 5, 6]
// console.log(arr); // [1, 2, 3, "a", "b", "c", 7]

// console.log(arr.splice(-1)); // [7]
// console.log(arr); // [1, 2, 3, "a", "b", "c"]

// console.log(arr.splice(1)); // [2, 3, "a", "b", "c"]
// console.log(arr); // [1]

// console.log(arr.splice(-2, 0, 2, 4, 6, 8, 10)); // []
// console.log(arr); // [ 2, 4, 6, 8, 10, 1]

// console.log(arr.splice(2)); // [6, 8, 10, 1]
// console.log(arr); // [2, 4]

// console.log(arr.splice(0, 2, 3, 6, 9, 12, 15)); // [2, 4]
// console.log(arr); // [3, 6, 9, 12, 15]

// console.log(arr.splice(2, 0, 7, 14, 21, 28, 35)); // []
// console.log(arr); // [3, 6, 7, 14, 21, 28, 35, 9, 12, 15]

// console.log(arr.splice(0, 0, 12, 24, 36, 48, 60)); // []
// console.log(arr); //  [12, 24, 36, 48, 60, 3, 6, 7, 14, 21, 28, 35, 9, 12, 15]

// console.log(arr.splice(1, 0, 13, 14, 15, 16, 17)); // [] // The splice method returns an empty array when delete count is 0
// console.log(arr); //  [12, 13, 14, 15, 16, 17, 24, 36, 48, 60, 3, 6, 7, 14, 21, 28, 35, 9, 12, 15]

// console.log(arr.splice(0, 0, true, false, true, false)); // [] ( because the delete count is 0)
// console.log(arr); // [true, false, true, false, 12, 13, 14, 15, 16, 17, 24, 36, 48, 60, 3, 6, 7, 14, 21, 28, 35, 9, 12, 15]

// console.log(arr.splice(0, 4, "apple", "Mango", "Banana", "Pineapple")); // [true, false, true, false] ( because the delete count is 4)
// console.log(arr); // ['apple', 'Mango', 'Banana', 'Pineapple', 12, 13, 14, 15, 16, 17, 24, 36, 48, 60, 3, 6, 7, 14, 21, 28, 35, 9, 12, 15]

//// 3. reverse()
// let arrRev = arr.reverse();
// console.log(arrRev); // [7, "c", "b", "a", 3, 2, 1]

//// 4. concat()
// let arr = [1, 2, 3];
// let arr2 = [4, 5, 6];
// console.log(arr.concat(arr2)); // [1, 2, 3, 4, 5, 6] (Imuted : The original array is not changed)
// console.log(arr, arr2); // [1, 2, 3] [4, 5, 6]
// console.log([...arr, ...arr2]); // [1, 2, 3, 4, 5, 6] (Imuted : The original array is not changed)
// console.log(arr, arr2); // [1, 2, 3] [4, 5, 6]

//// 5. join()
// let allAlphabates = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "a",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];
// console.log(allAlphabates.join(" - ")); // a - b - c - d - e - f - g - h - i - j - k - l - m - a - n - o - p - q - r - s - t - u - v - w - x - y - z

//// 6. at()
// let arrSum = [2, 4, 6, 8, 10];
// console.log(arrSum[1]); // 4
// console.log(arrSum.at(1)); // 4

// Get the last element of the array
// console.log(arrSum.splice(-1)); // [10]
// console.log(arrSum.splice(-1)[0]); // 10
// console.log(arrSum.at(-1)); // 10
// console.log(arrSum[arrSum.length - 1]); // 10

//// 7. forEach()

//// a.)Logging array elements

// let fruits = ["Apple", "Banana", "Orange"];
// fruits.forEach(function (fruit, index) {
//   console.log(`${index} : ${fruit}`);
// }); // 0 : Apple, 1 : Banana, 2 : Orange

// //// b.) Modifyig Elements
// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number, index, array) => {
//   array[index] = number * 2;
// });
// console.log(numbers); // [2, 4, 6, 8, 10]

//// 3. filterig and creating new array
// let scores = [67, 56, 78, 89, 99, 90, 56, 34, 99, 87];
// let passingScores = [];
// scores.forEach((number) => {
//   if (number > 70) {
//     passingScores.push(number);
//   }
// });
// console.log(passingScores); // [78, 89, 99, 90, 99, 87]

//// 4. loging square of number
// let number = [5, 10, 15, 20];
// number.forEach((number) => {
//   let square = number ** 2;
//   console.log(`Sqare of ${number} is ${square}`);
// });

//// 5. filterig odd number
// let numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
// let oddNubmer = [];
// numbers.forEach((num) => {
//   if (num % 2 !== 0) {
//     oddNubmer.push(num);
//   }
// });
// console.log(oddNubmer);

//// 6. summing positive number
// let numbers = [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6];
// let sum = 0;
// numbers.forEach((num) => {
//   if (num > 0) {
//     sum += num;
//   }
// });
// console.log(`Sum of positive numbers is ${sum}`);

//// 7. Temprature celcious to foreheit
// let celcious = [10, 20, 30, 40, 50];
// let foreheit = [];
// celcious.forEach((cel) => {
//   let fore = (cel * 9) / 5 + 32;
//   foreheit.push(fore);
// });
// console.log(foreheit); // [50, 68, 86, 104, 122]

//// 8. forEach with objects
// let Person = {
//   name: "Daualt",
//   age: 21,
//   city: "Jaipur",
// };
// Object.entries(Person).forEach(([key, value]) => {
//   console.log(`${key} : ${value}`);
// });

///// 9. Price with 25% discount
// let prices = [100, 200, 300, 400, 500];

// prices.forEach((number, index) => {
//   console.log(
//     `Item ${index + 1} : Original Price ${number}, Discount Price ${
//       number - number * 0.25
//     }`
//   );
// });

// ///// 10. forEach with maps
// let PersonMap = new Map([
//   ["Name", "Daualt"],
//   ["Age", 21],
// ]);
// PersonMap.set("city", "Jaipur");

// PersonMap.forEach((value, key) => {
//   console.log(`Key : ${key} , Value: ${value}`);
// });

////// 11. with sets
// let uniqueNums = new Set([
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 5, 7, 2, 6, 2, 6, 3, 8, 9,
// ]);
// uniqueNums.forEach((number) => {
//   console.log(number);
// });

//// set to an array
// Array.from(uniqueNums).forEach((num) => {
//   console.log(num);
// });

/////////////////////////////////////////////////////////////////////////////

////
/// 1. map
// let numbers = [1, 2, 4, 5, 6, 7, 3, 6];
// let square = numbers.map((num) => num * num);
// console.log(square); // [1, 4, 16, 25, 36, 49, 9, 36]
// console.log(numbers); // [1, 2, 4, 5, 6, 7, 3, 6]

//// 2. filter
// let numbers = [1, 2, 4, 5, 6, 7, 3, 6];
// let evenNubmers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNubmers); // [2, 4, 6, 6]
// console.log(numbers); // [1, 2, 4, 5, 6, 7, 3, 6]

//// 3. reduce()
// let numbers = [1, 2, 4, 5, 6, 7, 3, 6];
// let sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum); // 34

//// 4. chaining
// let numbers = [1, 2, 4, 5, 6, 7, 3, 6];
// /// sum of even number squares
// let sumOfSqaresEven = numbers
//   .filter((num) => num % 2 === 0)
//   .map((num) => num * num)
//   .reduce((acc, num) => acc + num, 0);

// console.log(sumOfSqaresEven); // 92

/////// 1. map

///// exmaple : 1 square
// let number = [1, 2, 3, 4, 5, 6];
// let square = number.map((num) => num * num);
// console.log(square); // [1, 4, 9, 16, 25, 36]

//// ex : 2
// let items = ["cPu", "keYboArd", "MoUSe"];
// let capitalWords = items.map((word) => word.toUpperCase());
// console.log(capitalWords); // ['CPU', 'KEYBOARD', 'MOUSE']

//// ex : 3
// let students = [
//   { name: "Daulat", age: 21 },
//   { name: "Puspa", age: 25 },
//   { name: "Manish", age: 20 },
// ];

// let nameOfStudents = students.map((students) => students.name);
// console.log(nameOfStudents); // ['Daulat', 'Puspa', 'Manish']

//// ex : 4
// let square = [4, 9, 16, 25, 36, 49, 64];
// let squareRoot = square.map((num) => Math.sqrt(num));
// console.log(squareRoot); // [2, 3, 4, 5, 6, 7, 8]

///// ex : 5
// let items = ["cPu", "keYboArd", "MoUSe"];
// let itemIndex = items.map((item, index) => {
//   let itemUp = item.toUpperCase(item);
//   console.log(`Item ${index} : ${itemUp}`);
// });
// console.log(itemIndex);

// // Item 0 : CPU
// // Item 1 : KEYBOARD
// // Item 2 : MOUSE

//// ex : 6
// let number = [2, 5, 3, 7, 3, 7, 9, 12, 33, 13, 5, 7, 89];
// let squareOdd = number.filter((num) => num % 2 !== 0).map((num) => num * num);

// console.log(squareOdd); // [25, 9, 49, 9, 49, 81, 1089, 169, 25, 49, 7921]

//// ex : 7
// let numbers = [1, 2, 4, 5, 3, 9, 2];

// let mulitplier = 3;

// let mutltiples = numbers.map(function (num) {
//   return num * this;
// }, mulitplier);

// console.log(mutltiples); // [3, 6, 12, 15, 9, 27, 6]

/////////////////////////////////////////////////////////////////////////////

///// 2. filter()

//// ex : 1
// let names = ["Daulat", "Muskan", "Manisha", "Suman", "Puspa", "Yash"];
// let MNames = names.filter((name) => name.charAt(0) === "M");

// console.log(MNames); // ['Muskan', 'Manisha']

//// ex : 2
// let products = [
//   { id: 1, product: "Mobile", price: 1000 },
//   { id: 2, product: "Laptop", price: 2000 },
//   { id: 3, product: "TV", price: 3000 },
//   { id: 4, product: "Watch", price: 4000 },
//   { id: 5, product: "Tablet", price: 5000 },
//   { id: 6, product: "Speaker", price: 6000 },
// ];
// let expensiveProducts = products.filter((product) => product.price >= 4000);
// console.log(expensiveProducts);

// // [{ id: 4, product: 'Watch', price: 4000 },
// // { id: 5, product: 'Tablet', price: 5000 },
// // { id: 6, product: 'Speaker', price: 6000 } ]

//// ex : 3
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let oddIndex = numbers.filter((num, i) => i % 2 !== 0);
// console.log(oddIndex); // [2, 4, 6, 8, 10]

//// ex : 4
// let filterByThreshold = function (num) {
//   return num < this;
// };

// let numbers = [12, 13, 9, 34, 23, 12, 789, 34, 25, 90, 45, 38, 189, 900];

// let underHun = numbers.filter(filterByThreshold, 100);

// console.log(underHun); // [12, 13, 9, 34, 23, 12, 34, 25, 90, 45, 38]

//// ex : 5
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let squareOdds = numbers.filter((num) => num % 2 !== 0).map((num) => num ** 2);

// console.log(squareOdds); // [1, 9, 25, 49, 81]

//// ex : 6
// let numbers = [-2, -4, -2, 5, 12, -34, 65, -12, 10, -23];

// let sumPos = numbers
//   .filter((num) => num > 0)
//   .reduce((sum, pos) => sum + pos, 0);

// console.log(sumPos); // 92

//// ex : 7
// let names = [
//   "Daulat",
//   "Muskan",
//   "Manisha",
//   "Suman",
//   "Puspa",
//   "Yash",
//   "Chiki",
//   "Pooja",
//   "Dipak",
//   "Bunty",
//   "Nirmal",
//   "Sakshi",
//   "Veer",
// ];

// let shortNames = names.filter((num) => num.length <= 5);

// console.log(shortNames); //  ['Suman', 'Puspa', 'Yash', 'Chiki', 'Pooja', 'Dipak', 'Bunty', 'Veer']

//// ex : 8

// let students = [
//   { name: "Daulat", marks: 90, passed: true },
//   { name: "Muskan", marks: 80, passed: true },
//   { name: "Manisha", marks: 70, passed: true },
//   { name: "Suman", marks: 60, passed: false },
//   { name: "Puspa", marks: 50, passed: false },
// ];

// let bestStu = students.filter((stu) => stu.marks >= 90 || stu.passed);

// console.log(bestStu);
// // [{ name: 'Daulat', marks: 90, passed: true },
// // { name: 'Muskan', marks: 80, passed: true }
// // { name: 'Manisha', marks: 70, passed: true } ]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//// Reduce

//// ex : 1
// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum); // 15

// //// ex : 2
// let numbers = [2, 3, 4, 5];

// let product = numbers.reduce((acc, num) => acc * num, 0);
// console.log(product); // 0

// let product2 = numbers.reduce((acc, num) => acc * num, 1);
// console.log(product2); // 120

//// ex : 3
// const nested = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// let simple = nested.reduce((acc, num) => [...acc, ...num], []);
// console.log(simple); // [1, 2, 3, 4, 5, 6]

//// ex : 4
// let names = [
//   "Daulat",
//   "Muskan",
//   "Manisha",
//   "Suman",
//   "Daulat",
//   "Suman",
//   "Daulat",
//   "Muskan",
//   "Manisha",
//   "Suman",
//   "Daulat",
//   "Suman",
//   "Daulat",
//   "Muskan",
//   "Manisha",
//   "Manisha",
//   "Suman",
// ];

// let accurace = names.reduce((acc, val) => {
//   acc[val] = (acc[val] || 0) + 1;
//   return acc;
// }, {});
// console.log(accurace); // { Daulat: 5, Muskan: 3, Manisha: 4, Suman: 5 }

//// ex : 5
// let numbers = [1, 2, 3, 4, 5, 23, 34, 12, 67, 32, 42];
// let maxNum = numbers.reduce((max, num) => (num > max ? num : max), 0);
// console.log(maxNum); // 67

//// ex : 6
// let students = [
//   { name: "Daualt", grade: "A" },
//   { name: "Muskan", grade: "B" },
//   { name: "Manisha", grade: "C" },
//   { name: "Suman", grade: "A" },
//   { name: "Puspa", grade: "B" },
//   { name: "Yash", grade: "B" },
// ];

// const groupedByGrade = students.reduce((grouped, student) => {
//   const grade = student.grade;
//   grouped[grade] = grouped[grade] || [];
//   grouped[grade].push(student.name);
//   return grouped;
// }, {});

// console.log(groupedByGrade);

// // { A: ['Daualt', 'Suman'],
// //   B: ['Muskan', 'Puspa', 'Yash'],
// //   C: ['Manisha'] }

///// ex : 7
// let num = [1, 2, 3, 4, 5];
// let reverse = num.reduceRight((acc, num) => {
//   acc.push(num);
//   return acc;
// }, []);
// console.log(reverse); // [5, 4, 3, 2, 1]

//// ex : 8
// const functions = [
//   (value) => value + 1,
//   (value) => value * 2,
//   (value) => value - 3,
// ];

// const composeResult = functions.reduce((result, func) => func(result), 10);

// console.log(composeResult); // 19

//// ex : 9
// let duplicates = [
//   2, 1, 2, 1, 4, 7, 3, 2, 1, 2, 1, 4, 7, 3, 2, 1, 2, 1, 4, 7, 3,
// ];

// let unique = duplicates.reduce((unique, num) => {
//   if (!unique.includes(num)) {
//     unique.push(num);
//   }
//   return unique;
// }, []);
// console.log(unique); // [2, 1, 4, 7, 3]

//////////////////////////////////////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// .
// .
// .
// .
// .
// .
// ..
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
// ..
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
// ..
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
// ..
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
// ..
// .
// .
// .
// .
// .

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

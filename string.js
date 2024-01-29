"use strict";

//// 1.) Destructuring Arrays

//// a.) basic array destructuring syntax

let numbers = [1, 2, 45, 2, 3];
let [first, second, third, fourth, fifth] = numbers;
console.log(first, second, third, fourth, fifth); // 1 2 45 2 3

// b.) skiping elements :

let [first, , third, , fifth] = numbers;
console.log(fifth); // 3

// c.) default values :

  let [first = 10, , , , , sixth = 34, seventh = 12] = numbers;
  console.log(first, sixth, seventh); // 1 34 12

/// d.) Swapping values :

let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b); // 2 1

// e.) Nested Array Distructuring [Arrays in [arrays]]

numbers = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let [, [, fourth]] = numbers;
console.log(fourth); // 4

// f.) Rest parameter / Spread Operator

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [first, second, ...rest] = numbers;
console.log(first, second, rest); // 1 2 [3, 4, 5, 6, 7, 8, 9, 10]

console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

///////////////////////////////////////////////////////////////////

// 2.) Destructuring Object

// a.) Basic Object Destructuring

let person = {
  name: "daulat",
  age: 33,
  city: "jaipur",
};
let { name, age, city } = person;
console.log(name, age, city); // daulat 33 jaipur

// b.) default values

let { name, age, city, pinCode = 302001 } = person;
console.log(name, age, city, pinCode); // daulat 33 jaipur 302001

// c.) Nested Object Destructuring [Objects in [Objects]]

let person = {
  name: {
    first: "daulat",
    last: "Jajra",
  },
  age: 33,
  city: "jaiput",
  pinCode: 302001,
  country: "India",
};
let {
  name: { first, last },
  age,
} = person;
console.log(first, last, age); // daulat Jajra 33

// d.) renaming  variables

let {
  name: { first: fName, last: lName },
  age: personAge,
} = person;
console.log(fName, lName, personAge); // daulat Jajra 33

//// e.) Rest parameter / Spread Operator
let { name, city, ...rest } = person;
console.log(name, city, rest);

/// f.) Dynamic property names

let adderess = "city";
let person = {
  name: "daulat",
  age: 33,
  city: "Jaipur",
};
let { name, age, [adderess]: area } = person;
console.log(name, age, area); // daulat 33 Jaipur

let item = "moniter";
let brand = {
  keyboard: "hp",
  moniter: "zebronics",
  mouse: "hp",
  cpu: "intel",
  speaker: "intel",
};
let { keyboard, [item]: moniterBrand } = brand;
console.log(moniterBrand); // zebronics

// g.) Mutating variables
let a = 2;
let b = 3;
({ a, b } = { a: b, b: a });
console.log(a, b); // 3 2

///////////////////////////////////////////////////////////////////

// 3.) Spread Operator

// a.) Spread Operator with arrays
//  *) coping arrays :
let a = [1, 2, 3];
let b = [...a];
console.log(b); // [1, 2, 3]

//  *) merging arrays/ concating arrays
let a = [1, 2, 3];
let b = [4, 5, 6];
let ab = [...a, ...b];
console.log(ab); // [1, 2, 3, 4, 5, 6]

// *) Spreading in function arguments
let a = [1, 2, 3];
let sum = (a, b, c) => a + b + c;
console.log(sum(...a)); // 6

let b = [4, 5, 6];
let mulitple = (a, b, c) => a * b * c;
console.log(mulitple(...b)); // 120

// *) creating arrays with gaps
let array = [...Array(5)];
console.log(array); // [undefined, undefined, undefined, undefined, undefined]

.

/// b.) Spread Operator with objects
// *) coping objects
let person = {
  name: "daulat",
  age: 23,
  city: "jaipur",
};
let person1 = { ...person };
console.log(person1); // { name: 'daulat', age: 23, city: 'jaipur' }

// *) merging objects
let num1 = {
  a: 1,
  b: 2,
};
let num2 = {
  c: 3,
  d: 4,
};
let num = { ...num1, ...num2 };
console.log(num); // { a: 1, b: 2, c: 3, d: 4 }

// *) adding and overriding  properties
let person = {
  name: "Daulat",
  age: 23,
};
let person1 = {
  ...person,
  city: "Jaipur",
  age: 33,
};
console.log(person1); // { name: 'Daulat', age: 33, city: 'Jaipur' }

// 3.) spread operator with functions
let person = {
  name: "Daulat",
  age: 21,
};
let intro = ({ name, age }) =>
  console.log(`My name is ${name} and I am ${age} years old`);

intro({ ...person }); // My name is Daulat and I am 21 years old

let guy = {
  name: "Muskan",
  age: "21",
};
intro({ ...guy }); // My name is Muskan and I am 21 years old

// 4.) Spread Operator with Iterable
// *) with String
let name = "Daulat ";
let nameSp = [...name];
console.log(nameSp); // [D, a, u, l, a, t, ' ']

// *) with sets
let set = new Set([3, 2, 2, 5, 255, 255, 2, 5, 2, 6, 66, 66, 7, 7, 7, 7]);
let arr = [...set];
console.log(arr); // [3, 2, 5, 255, 6, 66, 7]
console.log(set); // Set(6) {3, 2, 5, 255, 6, 66, 7}

// *) with maps
let names = new Map([
  ["person1", "Daulat"],
  ["person2", "Muskan"],
  ["person3", "Kapur"],
  ["person4", "Manisha"],
]);
let mapSp = new Map([...names]);
console.log(mapSp); // Map(4) {'person1' => 'Daulat', 'person2' => 'Muskan', 'person3' => 'Kapur', 'person4' => 'Manisha'}

let components = new Map([
  ["itme1", "keyboard"],
  ["item2", "mouse"],
  ["item3", "speaker"],
  ["item4", "monitor"],
  ["item5", "mouse pad"],
  ["item6", "keyboard mat"],
  ["item7", "mouse pad"],
]);
let componentsSp = new Map([...components]);
console.log(componentsSp);
// Map(7) {'itme1' => 'keyboard', 'item2' => 'mouse', 'item3' => 'speaker', 'item4' => 'monitor', 'item5' => 'mouse pad', 'item6' => 'keyboard mat', 'item7' => 'mouse pad'}

// *) with  nodeList
let list = document.querySelectorAll("li");
let spreadList = [...list];
console.log(spreadList);

//////////////////////////////////////////////////////////////////////////

Rest paterns and parameters

In functions

*) Basic syntax
let num = [1, 2, 3, 4, 5];
let sum = (...num) => num.reduce((acc, num) => acc + num, 0);
console.log(sum(...num)); // 15

*) combining with Regular Parameter
let greet = (greeting, ...persons) =>
  persons.map((person) => console.log(`${greeting} ${person}`));
greet("Good Morning", "Daulat", "Muskan", "Kapur", "Manisha");
// Good Morning Daulat
// Good Morning Muskan
// Good Morning Kapur
// Good Morning Manisha

let hello = (greeting, ...persons) =>
  persons.map((person) => console.log(`${greeting} ${person}`));
hello("Hello", "Daulat", "Muskan", "Kapur", "Manisha");
// Hello Daulat
// Hello Muskan
// Hello Kapur
// Hello Manisha

// *) No Arguments Case
let num = function (...num) {
  console.log(num);
};
num(); // []

// In arrays

Combining with regular Variable
let [name, age, ...hobbies] = [
  "Daulat",
  21,
  "music",
  "reading",
  "coding",
  "travelling",
];
console.log(name, age, hobbies); // Daulat 21 [ 'music', 'reading', 'coding', 'travelling' ]

// In objects
let { name, age, ...others } = {
  name: "Daulat",
  age: 21,
  city: "jaipur",
  pinCode: 302001,
  country: "India",
  hobbies: ["music", "reading", "coding", "travelling"],
};
console.log(name, age, others);
// Daulat 21 { city: 'jaipur', pinCode: 302001, country: 'India', hobbies: [ 'music', 'reading', 'coding', 'travelling' ] }

///////////////////////////////////////////////////////////////////

// Short Circuit ( &&, || )

// with Logical AND Operator
// *) validating Input Parameters
let creatUser = (name, age, city, pinCode) => {
  if (name && age && city && pinCode) {
    return {
      name,
      age,
      city,
      pinCode,
    };
  } else {
    return "Invalid Inputs";
  }
};
console.log(creatUser("daulat", 21, "jaipur", 302001)); // { name: 'daulat', age: 21, city: 'jaipur', pinCode: 302001 }
console.log(creatUser("muskan", 22, "jaipur")); // Invalid Inputs

// Accesing Nested Object
let person = {
  profile: {
    address: {
      city: "jaipur",
      pinCode: 302001,
    },
  },
};
let city =
  person.profile && person.profile.address && person.profile.address.city;
console.log(city);

// with logical OR operator

// Providing default value
*) Greet User
let greet = (name) => {
  let userName = name || "Guest";
  console.log(`Hello ${userName}`);
};
greet("Daulat"); // Hello Daulat
greet(""); // Hello Guest

// *) Handling Optional callbacks

function fatchData(callback) {
  callback =
    callback ||
    function () {
      console.log("Data fetch successfully");
    };
  setTimeout(callback, 5000);
}
fatchData(); // Data fetch successfully
fatchData(() => console.log("Custom callback")); // Custom callback

//////////////////////////////////////////////////////////////////////

// The Nullish coalescing Operator (null and undefined)

//*) basic usage
let defaultValue = "Default value";
let userInput;
let result = userInput ?? defaultValue;
console.log(result); // Default value
userInput = "User Input";
result = userInput ?? defaultValue;
console.log(result); // User Input

// *) Avoiding falsy values
let defaultvalue = "Default Value";
let falsyValue = 0;
let result = falsyValue ?? defaultvalue;
console.log(result); // 0

// *) In functions
let greeting = (name, greet) => {
  let user = name ?? "Guest";
  let message = greet ?? "Hello";
  console.log(`${message} ${user}`);
};
greeting("Daulat", "Hi"); // Hi Daulat
greeting(); // Hello Guest
greeting(null, "Good Morning"); // Good Morning Guest
greeting("Sahil", undefined); //  Hello Sahil

// *) In Optional chaining
let person = {
  profile: {
    user: {
      name: "Daulat",
    },
  },
};
let name = person?.profile?.user?.name ?? "Guest";
console.log(name); // Daulat
//////////////////////////////////////////////////////////

// Logical Assignment Operator

// Logical AND assignment operator
let a = null;
let b = 5;

// a &&= b;
// console.log(a); // null

a ||= b;
console.log(a); // 4

// Example
let lang = (lang) => null;
let preferredLang = lang();
let newLang = "en-US";
preferredLang ||= newLang;
console.log(preferredLang); // en-US

//////////////////////////////////////////////////////////

for...of & for...in

const array = [1, 2, 3, 4, 5, 6];
for (let element of array) {
  console.log(element);
}
1
2
3
4
5
6

with array methods

let fruits = ["apple", "banana", "mango", "orange"];
for (let fruit of fruits) console.log(fruit.toUpperCase());
APPLE
BANANA
MANGO
ORANGE

// Accessing Index
let colors = ["red", "green", "blue"];
for (let [index, color] of colors.entries())
  console.log(` ${index} : ${color.toUpperCase()}`);
// 0 : RED
// 1 : GREEN
// 2 : BLUE

/// for...in

let array = ["apple", "orange", "mango", "pineapple", "banana", "grapes"];
for (let num of array) console.log(array);
apple
orange
mango ...

////////////
// Object Enhanced Literals :
let person = {
  name: "Daulat",
  age: 21,
  greet() {
    console.log(`Hello ${this.name}`);
  },
};
person.greet(); // Hello Daulat
//////////////////////////////////////////////

// Object Chaining
/ *) basic syntax
let person = {
  profile: {
    name: "Daulat",
    address: {
      city: "Jaipur",
      pincode: 302001,
    },
  },
};
let city = person?.profile?.address?.city;
console.log(city); // Jaipur

/// *) Handling undefined and null
let user = {
  profile: {
    email: "daulatjajra2006@gmail.com",
  },
};
let email = user?.profile?.email;
console.log(email); // daulatjajra2006@gmail.com

let name = user?.profile?.name;
console.log(name); // undefined

// Using with functions
let calc = {
  add: (a, b) => a + b,
  substract: (a, b) => a - b,
};
let add = calc?.add?.(23, 12);
console.log(add); // 35

let multi = calc?.multiple?.(12, 12);
console.log(multi); // undefined

// *) Combining with Nullish Coalescing
let person = {
  profile: {
    user: {
      name: "Daulat",
      displayName: undefined,
    },
  },
};
let displayName = person?.profile?.user?.displayName ?? "Guest";
console.log(displayName); // Guest

// Looping Object

//// for...in
let person = {
  name: "Daulat",
  age: 21,
  city: "Jaipur",
};
for (let key of person) {
  console.log(` ${key} : ${person[key]}`);
}
// name : Daulat
// age : 21
// city : Jaipur

/// Object.keys
let keys = Object.keys(person);
console.log(keys); // [ 'name', 'age', 'city' ]
for (let key of Object.keys(person)) {
  console.log(` ${key} : ${person[key]}`);
}
name : Daulat
age : 21
city : Jaipur

// Object.values
let values = Object.values(person);
console.log(values); // [ 'Daulat', 21, 'Jaipur' ]

for (let value of values) {
  console.log(value);
}
Daulat
21
Jaipur

/// Object.entries()
let entries = Object.entries(person);
console.log(entries);
// 0 : (2) ['name', 'Daulat']
// 1 : (2) ['age', 21]
// 2 : (2) ['city', 'Jaipur']

for (let [key, value] of entries) {
  console.log(`${key} : ${value}`);
}
// name : Daulat
// age : 21
// city : Jaipur

////////////////////////////////////////////////////////////////////////////////////

/// Sets in JavaScript

let mySet = new Set([4, 5, 6, 7, 8, 9, 4, 5, 6, 7, 8, 9]);
console.log(mySet);

mySet.add(10);
console.log(mySet); // Set(6) {4, 5, 6, 7, 8, 9, 10}

mySet.delete(4);
console.log(mySet); // Set(6) {5, 6, 7, 8, 9, 10}

console.log(mySet.has(4)); // false
console.log(mySet.has(5)); // true

mySet.clear();
console.log(mySet); // Set(0) {size: 0}

mySet.forEach((num) => console.log(num));
console.log(typeof mySet); // Object

////////////////////////////////////////////////////////////

// String Methods
// 1. indexOf()
let name = "Daulat is a good boy. Daulat is 21 years old.";
console.log(
  name.indexOf("Daulat"),
  name.indexOf("good"),
  name.indexOf("sachin")
); // 0 12 -1(not found)

// 2. lastIndexOf()
console.log(
  name.lastIndexOf("Daulat"),
  name.lastIndexOf("sachin"),
  name.lastIndexOf("good")
); // 22 -1(not found)  12

// 3. slice
console.log(
  name.slice(0, 6), // Daulat
  name.slice(-4, -1), // old
  name.slice(-14), // 21 years old
  name.slice(0) // Daulat is a good boy. Daulat is 21 years old.
);

// 4. replace
let name1 = "Daulat is a good boy. He is 21 years old.";
let muskan = name1
  .replace("Daulat", "Muskan")
  .replace("boy", "girl")
  .replace("21", "22")
  .replace("He", "She");
console.log(muskan); // Muskan is a good girl. She is 22 years old.

// 5. includes
console.log(
  name.includes("Daulat"), // true
  name.includes("Muskan"), // false
  name.includes(21) // true
);

console.log(name.startsWith("Daulat")); // true
console.log(name.endsWith("old.")); // true
console.log(name.endsWith("old")); // false

// 6. split(separator)
let person1 = "Daulat, 21, Jaipur, Engineer";
let person1Arr = person1.split(",");
console.log(person1Arr); // (4) ['Daulat', ' 21', ' Jaipur', ' Engineer']

let name = "Daulat is a good boy. Daulat is 21 years old.";
let nameArr = name.split(" ");
console.log(nameArr); // (8) ['Daulat', 'is', 'a', 'good', 'boy.', 'Daulat', 'is', '21', 'years', 'old.']

// 7. join('')
let fruits = ["Apple", "Banana", "Orange"];

// Example 1:
let joined1 = fruits.join(", ");
console.log(joined1); // Output : Apple, Banana, Orange
let joined2 = fruits.join("-");
console.log(joined2); // Output :  Apple-Banana-Orange
//////////////////////////////////////////////////////////////////////////////////

///// String Methods Practice
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

for (let flight of flights.split("+")) {
  let [type, from, to, time] = flight.split(";");
  console.log(
    `${type.replaceAll("_", " ")} ${from} ${to} (${time.replace(":", "h")})`
  );
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
// .
// .

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Data Structures, Modern operators and strings

//////////////////////////////////
// practice : string

// 10. Strings : ( indexOf, lastindesOf, slice, toLowerCase, trim, replace, includes, startsWith , join, split, padStart, padEnd, repeat  )

// let airline = "TAP Air India";
// const plane = "A342";

// console.log(plane[2]);
// console.log("D345"[1]);
// console.log("D345".length);

// console.log(airline.indexOf("r"));
// console.log(airline.lastIndexOf("r"));
// console.log(airline.indexOf("India"));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.lastIndexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));
// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === "B" || s === "E") console.log("You got the Middle seat");
//   else console.log("You got Lucky");
// };
// checkMiddleSeat("23B");
// checkMiddleSeat("23A");
// checkMiddleSeat("23E");
// checkMiddleSeat("24D");

// console.log(new String("Daualt"));
// // console.log(typeof new String("Daulat"));
// // console.log(typeof new String("Daulat").slice(-1));
// //////////////////
// console.log(airline.toUpperCase());
// console.log(airline.toLowerCase());

// // fix capitilization in name

// let passanger = "dAULat JaJra ";
// const passangerLower = passanger.toLowerCase();
// const passangerCorrect =
//   passangerLower[0].toUpperCase() + passangerLower.slice(1);
// console.log(passangerCorrect);

// // Comparing emails

// let email = "daulatjajra@gmail.com";
// let loginEmail = "   DauLATJAJra@GMAIL.coM  \n ";

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(normalizedEmail === email); // true

// // Checking

// const checkBaggage = (item) => {
//   let baggage = item.toLowerCase();
//   if (baggage.includes("knife") || baggage.includes("gun"))
//     console.log("You are not allowed on board");
//   else console.log("Welcome on aboard");
// };
// checkBaggage("I have a laptop, some food and pocket knife ");
// checkBaggage("socks and camera");
// checkBaggage("Got some snacks and a gun for protection");
///////////////////

// Split and join

///////////////////////
// 9. Sets : ( .add, .delete, .has, .size, .clear())
// let num = [1, 2, 2, 2, 4, 5, 2, 5, 6, 7, 8, 9, 10];
// let unique = [...new Set(num)];
// console.log(unique);

// // a. Adding and deleting elements
// let set1 = new Set();
// set1.add(1);
// console.log(set1.has("1")); // false

// let computer = new Set();
// computer.add("Keyboard");
// computer.add("Mice");
// computer.add("Moniter");
// console.log(computer);
// computer.delete("Moniter");
// console.log(computer);

// // b. Checking

// console.log(computer.has("Moniter")); //false

// // c. Iterating Over a Set

// computer.forEach((equpment) => {
//   console.log(equpment);
// });

// // d. Size

// let computer = new Set([
//   "keyboard",
//   "keyboard",
//   "speaker",
//   "mouse",
//   "keyboard",
//   "mouse",
//   "speaker",
// ]);
// console.log(computer.size); // 3
// computer.clear();
// console.log(computer.size); // 0

// // e. Converting Sets to Arrays

// let computerArray = [...computer];
// console.log(computerArray);

// // f. Example

// let chatUserNames = new Set();

// let joinChat = (userName) => {
//   if (chatUserNames.has(userName)) {
//     console.log(
//       `Username ${userName} is already taken. Please choose another. `
//     );
//   } else {
//     chatUserNames.add(userName);
//     console.log(`${userName} joined the chat.`);
//   }
// };
// joinChat("Daulat"); // Daulat joined the chat.
// joinChat("Muskan");
// joinChat("Muskan"); // Username Muskan is already taken. Please choose another.

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

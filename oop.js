"use strict";

// 1. Constructor functions and the "new" Operator
// convention : always start with capital word
// A array function not works as a constructor function
// let Person = function (firstName, birthYear) {
//   // console.log(this);
//   // ` // Instance Properties`;
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//Methods : Never do this (Never create a method inside of a constructor function )
// this.calcAGe = function () {
//   console.log(2037 - this.birthYear);
// };
// };
// let daulat = new Person("Daulat", "2004"); // Always call using the 'new' keyword
// let kaif = new Person("Kaif", "2006"); // Always call using the 'new' keyword
// console.log(daulat);

// when we call the function with the new keyword then behind the scene there are four things happen :

// 1. A new empty object {} is created
// 2. function is called, this = {}
// 3. Object {} linked to prototype
// 4. function automatically return  empty object {} (from the beginning )

// let jonas = new Person("Jonas", "2000");
// let parul = new Person("Parul", "1999");
// let kaif = new Person("kaif", "1995");
// console.log(jonas, parul, kaif);

// let jay = "jay";
// to check
// console.log(daulat instanceof Person); // true
// console.log(jay instanceof Person); // false

/////////////////////////////////////////////////////////////////

// 2. Prototypes
// Every function automatically have a property  "prototype"
// Every Object that created by constructor function will get access all the methods and properties which we defined on the constructor prototype property.

// console.log(Person.prototype); // Prototype property of the constructor fuction

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// daulat.calcAge(); // we got 33 because of prototypal inheritance
// kaif.calcAge();

// console.log(daulat.__proto__); // Property "__proto__"
// console.log(daulat.__proto__ === Person.prototype); // true

// console.log(Person.prototype.isPrototypeOf(daulat)); // true
// console.log(Person.prototype.isPrototypeOf(Person)); // false (Person.prototype is not the Prototype of Itself (the Person))

// Person.prototype.species = "Homo Sapiens";
// console.log(daulat, kaif, jonas);
// console.log(daulat.species, kaif.species, jonas.species);

// console.log(daulat.hasOwnProperty("firstName")); // true
// console.log(daulat.hasOwnProperty("birthYear")); // true
// console.log(daulat.hasOwnProperty("species")); // false

//////////////////////////////////////////////////////////////////////

// 3. Prototype Inheritance and The Prototype chain
// console.dir(Person.prototype.constructor);
// console.log(Person.prototype.constructor === Person); // true
// console.log(daulat.__proto__);
// //Object.prototype (top of the prototype chain)
// console.log(daulat.__proto__.__proto__.__proto__);
/////////////////////////////////////////////////////////////////////////////
// 4. Prototypal Inheritance on built-in Objects(like arrays)

// Prototype for array
// let arr = [1, 2, 4, 5, 2, 3, 5, 2, 4, 2, 52, 24]; // new Array = []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype); // true
// console.log(arr.__proto__.__proto__); // true

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

// // DOM
// let h2 = document.querySelector("h2");
// console.dir(h2);

// // random function
// console.dir((x) => x + 2);

////////////////////////////////////////////////////////////////////////

// ES6 Classes : Special type of functions(without arguments )
// class Expression
// let PersonCl = class {};

// Class Declaration
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   //Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
// }
// let daulat = new PersonCl("Daulat", 2004);
// console.log(daulat);
// daulat.calcAge();
// console.log(daulat.__proto__ === PersonCl.prototype); // true

// // add method manually in .prototype property
// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// //   console.log(this);
// // };
// daulat.greet();

////
// 1. Classes are NOT hoisted (can't call before declare)
// 2. Classes are first-class citizens (can be used as a variable, arguments, or return value)
// 3. Classes are executed in strict mode

/////////////////////////////////////////////////////////////////////////
// Assessor Properties :  Setters and Getters (common for all objects)

// Setter and Getter with Regular Objects
let account = {
  owner: "Daulat",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    // must have a parameter
    this.movements.push(mov);
  },
};

// console.log(account.latest); // use getter
account.latest = 560; // use setter
// console.log(account.movements);

// Setter and Getter with Classes
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //Instance Methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  // Add getter for age property
  get age() {
    return 2037 - this.birthYear;
  }
  // Add setter to validate the fullName
  // set a property that already exists
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    // (_) its just a conventio not a javascript feature
    else alert(`${name} is not a full name!`);
  }
  // add getter for fullName property
  get fullName() {
    return this._fullName;
  }

  // Static Methods
  static hey() {
    console.log("Hey there!");
    console.log(this);
  }
}

let daulat = new PersonCl("Daulat Jajra", 2004);
// console.log(daulat);
// daulat.greet();
// daulat.calcAge();
// use getter : use like an property
// console.log(daulat.age);

// Setters and Getters are very useful for Data Validation
let kaif = new PersonCl("Kaif khan", 2006);
// console.log(kaif);

/////////////////////////////////////////////////////////

// Static Method
Array.from(document.querySelectorAll("h2"));
// from is NOT for the arrays like ([32, 45, 23, 12, 5].from())
Number.parseFloat(12); // It just a attach with Number object
// daulat.hey();
// PersonCl.hey();
/////////////////////////////////////////////////////////////////

// Object.create()
let PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};
daulat = Object.create(PersonProto); // {} (empy object)
console.log(daulat);
daulat.name = "Daualt";
daulat.birthYear = "2004";
daulat.calcAge();

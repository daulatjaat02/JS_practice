"use strict";

// 1. Constructor functions and the "new" Operator
// convention : always start with capital word
// A array function not works as a constructor function
let Person = function (firstName, birthYear) {
  // console.log(this);
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Methods : Never do this (Never create a method inside of a constructor function )
  // this.calcAGe = function () {
  //   console.log(2037 - this.birthYear);
  // };
};
let daulat = new Person("Daulat", "2004"); // Always call using the 'new' keyword
console.log(daulat);

// when we call the function with the new keyword then behind the scene there are four things happen :

// 1. A new empty object {} is created
// 2. function is called, this = {}
// 3. Object {} linked to prototype
// 4. function automatically return  empty object {} (from the beginning )

let jonas = new Person("Jonas", "2000");
let parul = new Person("Parul", "1999");
let kaif = new Person("kaif", "1995");
console.log(jonas, parul, kaif);

let jay = "jay";
// to check
console.log(daulat instanceof Person); // true
console.log(jay instanceof Person); // false

/////////////////////////////////////////////////////////////////

// 2. Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

daulat.calcAge(); // we got 33 because of prototype inheritance
kaif.calcAge();

console.log(daulat.__proto__);
console.log(daulat.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(daulat)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false (Person.prototype is not the Prototype of the Person)

Person.prototype.species = "Homo Sapiens";
console.log(daulat, kaif, jonas);
console.log(daulat.species, kaif.species, jonas.species);

console.log(daulat.hasOwnProperty("firstName")); // true
console.log(daulat.hasOwnProperty("birthYear")); // true
console.log(daulat.hasOwnProperty("species")); // false

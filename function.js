"use strict ";

// Closures in js
function outerFunction() {
  let outerVariable = "I'm a outer variable";
  function innerFunction() {
    console.log(outerVariable);
  }
  return innerFunction();
}

let buses = function () {
  let bus = 0;
  return function () {
    bus += 1;
    console.log(bus);
  };
};
let busFun = buses();
// busFun();
// busFun();

// More example with closures //////////////////////

// Example - 1
let f;

let g = function () {
  let a = 12;
  f = function () {
    console.log(a * 2);
  };
};

let h = function () {
  let b = 144;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();

console.dir(f);

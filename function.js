"use strict ";

// Closures in js
function outerFunction() {
  let outerVariable = "I'm a outer variable";
  function innerFunction() {
    console.log(outerVariable);
  }
  return innerFunction();
}

let ClosureExample = outerFunction();
ClosureExample();

"use Strict";

// Challange No 1

let checkDogs = function (dogsJulia, dogsKate) {
  let ShallowJulia = dogsJulia.slice();
  ShallowJulia.splice(0, 1);
  ShallowJulia.splice(-2);
  let dogs = ShallowJulia.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    dog > 2
      ? console.log(`Dog number ${i + 1}
is an adult, and is ${dog} years old`)
      : console.log(`Dog number ${i + 1} is still a puppy`);
  });
};
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// Challange no 2

// let calcAverageHumanAge = function (ages) {
// let humanAge = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
// //   console.log(humanAge);
// let adults = humanAge.filter((age) => age >= 18);
// //   console.log(adults);
// let average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
// //   console.log(average);
// // };
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// Challange no 3 : -
// using chaining

// let calcAverageHumanAge = function (ages) {
//   let average = ages
//     .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter((age) => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//   console.log(average);
// };
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

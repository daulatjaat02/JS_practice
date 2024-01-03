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
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

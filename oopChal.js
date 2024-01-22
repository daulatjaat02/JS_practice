"use strict";

// 1.
let Car = function (make, speed) {
  //   console.log(this);
  this.make = make;
  this.speed = speed;
};

// let BMW = new Car("BMW", "120");
// let Mercedes = new Car("Merceds", "95");
// console.log(BMW, Mercedes);

// Accelerate
Car.prototype.accelerate = function () {
  //   this.speed = speed + 10;
  this.speed = `${parseFloat(this.speed) + 10} km/h`;
  console.log(`${this.make} is going at ${this.speed}`);
};

Car.prototype.break = function () {
  this.speed = `${parseFloat(this.speed) - 5} km/h `;
  console.log(`${this.make} is going at ${this.speed}`);
};

// BMW.accelerate();
// Mercedes.accelerate();
// BMW.accelerate();
// Mercedes.accelerate();
// BMW.accelerate();
// Mercedes.accelerate();

// BMW.break();
// Mercedes.break();
// BMW.break();
// Mercedes.break();
// BMW.break();
// Mercedes.break();
// BMW.break();
// Mercedes.break();

// Challange NO 2

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  break() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return parseFloat(this.speed) / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

let ford = new CarCl("ford", 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.break();
ford.speedUS = 50;
console.log(ford);

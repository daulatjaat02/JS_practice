"use strict";

// 1.
let Car = function (make, speed) {
  //   console.log(this);
  this.make = make;
  this.speed = speed;
};

let BMW = new Car("BMW", "120");
let Mercedes = new Car("Merceds", "95");
console.log(BMW, Mercedes);

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

BMW.accelerate();
Mercedes.accelerate();
BMW.accelerate();
Mercedes.accelerate();
BMW.accelerate();
Mercedes.accelerate();

BMW.break();
Mercedes.break();
BMW.break();
Mercedes.break();
BMW.break();
Mercedes.break();
BMW.break();
Mercedes.break();

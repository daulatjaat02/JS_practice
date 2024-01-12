"use strict";

// selectors :
// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.head);
let header = document.querySelector(".header");
console.log(header);
// console.log(document.querySelectorAll(".section"));

// console.log(document.getElementById("section--1"));
// console.log(document.getElementsByTagName("button"));
// console.log(document.getElementsByClassName("container"));

// creating and inseting elements in js
// .insertAdjacentHTML

let message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// to create at the starting and at the end
// header.append(message.cloneNode(true));

// add as siblings
// header.before(message);
// header.after(message);
// header.after(message.cloneNode(true));

// Delete Elements

let close = document.querySelector(".btn--close-cookie");
close.addEventListener("click", function () {
  // message.remove();
  message.parentElement.removeChild(message);
});

// Styles, attributes and classes

message.style.backgroundColor = "#37383d";
message.style.width = "120vw";

console.log(message.style.backgroundColor);
console.log(message.style.color); //            (nothing)
console.log(message.style.width);

// getComputedStyle
// console.log(getComputedStyle(message));
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number(parseFloat(getComputedStyle(message).height)) + 30 + "px";

// Set Property method
document.documentElement.style.setProperty("--color-primary", "darkblue");

// Attributes
let logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src); // Absolute URL
console.log(logo.getAttribute("src")); // Relative URL
console.log(logo.className);

logo.alt = "Beautiful minimulist logo";

// Non-standered
console.log(logo.designer); //undefined

// getAttribute()
console.log(logo.getAttribute("designer"));

// setAttribute ()
logo.setAttribute("company", "Bankist");
console.log(logo.getAttribute("company"));

let link = document.querySelector(".twitter-link");
console.log(link.href);
console.log(link.getAttribute("href"));

let link2 = document.querySelector(".nav__link--btn");
console.log(link2.href);
console.log(link2.getAttribute("href"));

// dataAttributes

console.log(logo.dataset);
console.log(logo.dataset.versionNumber); // conver to Camel Case In html ( data-version-number)

// Classes
logo.className = "daulat"; // Never use Cauz it override all the classes and we can use only a class

logo.classList.add("d");
logo.classList.remove("d");
logo.classList.contains("d");
logo.classList.toggle("d");

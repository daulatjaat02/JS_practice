"use strict";


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
// /.
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
// /.
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
// /.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// selectors :
// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.head);
// let header = document.querySelector(".header");
// console.log(header);
// console.log(document.querySelectorAll(".section"));

// console.log(document.getElementById("section--1"));
// console.log(document.getElementsByTagName("button"));
// console.log(document.getElementsByClassName("container"));

// creating and inseting elements in js
// // .insertAdjacentHTML

// let message = document.createElement("div");
// message.classList.add("cookie-message");
// message.innerHTML =
//   'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// // header.prepend(message);
// header.append(message);
// to create at the starting and at the end
// header.append(message.cloneNode(true));

// add as siblings
// header.before(message);
// header.after(message);
// header.after(message.cloneNode(true));

// Delete Elements

// let close = document.querySelector(".btn--close-cookie");
// close.addEventListener("click", function () {
//   // message.remove();
//   message.parentElement.removeChild(message);
// });

// // Styles, attributes and classes

// message.style.backgroundColor = "#37383d";
// message.style.width = "120vw";

// console.log(message.style.backgroundColor);
// console.log(message.style.color); //            (nothing)
// console.log(message.style.width);

// // getComputedStyle
// // console.log(getComputedStyle(message));
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number(parseFloat(getComputedStyle(message).height)) + 30 + "px";

// // Set Property method
// document.documentElement.style.setProperty("--color-primary", "darkblue");

// // Attributes
// let logo = document.querySelector(".nav__logo");
// console.log(logo.alt);
// console.log(logo.src); // Absolute URL
// console.log(logo.getAttribute("src")); // Relative URL
// console.log(logo.className);

// logo.alt = "Beautiful minimulist logo";

// // Non-standered
// console.log(logo.designer); //undefined

// // getAttribute()
// console.log(logo.getAttribute("designer"));

// // setAttribute ()
// logo.setAttribute("company", "Bankist");
// console.log(logo.getAttribute("company"));

// let link = document.querySelector(".twitter-link");
// console.log(link.href);
// console.log(link.getAttribute("href"));

// let link2 = document.querySelector(".nav__link--btn");
// console.log(link2.href);
// console.log(link2.getAttribute("href"));

// dataAttributes

// console.log(logo.dataset);
// console.log(logo.dataset.versionNumber); // conver to Camel Case In html ( data-version-number)

// Classes
// logo.className = "daulat"; // Never use Cauz it override all the classes and we can use only a class

// logo.classList.add("d");
// logo.classList.remove("d");
// logo.classList.contains("d");
// logo.classList.toggle("d");

// Events : Three ways to add events

// mouseenter
// let h1 = document.querySelector("h1");

// let alertH1 = (e) => {
//   alert("Great! You are reading the heading");
// h1.removeEventListener("mouseenter", alertH1);
// };
// h1.addEventListener("mouseenter", alertH1);

// setTimeout(() => {
//   h1.removeEventListener("mouseenter", alertH1);
// }, 3000);

// h1.onmouseenter = alertH1;

// In html
// <h1 onclick="alertH1()"></h1>

// smooth scrolling
// Smooth scrolling
// btnScrollTo.addEventListener("click", function (e) {
// let s1coords = seciton1.getBoundingClientRect();
// console.log(s1coords);

// console.log(e.target.getBoundingClientRect());

// console.log("current  X/Y scroll : ", window.pageXOffset, window.pageYOffset);
// console.log(
//   "Client height/Width :",
//   document.documentElement.clientHeight,
//   document.documentElement.clientWidth
// );

//   seciton1.scrollIntoView({ behavior: "smooth" });
// });

// // random colors
// let randomInt = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);
// let randomColorr = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
// console.log(randomColorr(0, 255));

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("link", e.target, e.currentTarget);
//   this.style.backgroundColor = randomColorr();
//   // 'this' keyword  = e.currentTarget
//   console.log(this === e.currentTarget);

//   // Stop Propagation
//   // e.stopPropagation(); // This is not a good practice
// });
// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("Container", e.target, e.currentTarget);
//   this.style.backgroundColor = randomColorr();
//   // 'this' keyword  = e.currentTarget
//   console.log(this === e.currentTarget);
// });
// document.querySelector(".nav").addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("NAV", e.target, e.currentTarget);
//   this.style.backgroundColor = randomColorr();
//   // 'this' keyword  = e.currentTarget
//   console.log(this === e.currentTarget);
// });

// // Impliment the Navigation bar
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     // console.log("Link");
//     let id = this.getAttribute("href");
//     // console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

// / Impliment the Navigation bar
// Event Delegation
// 1. Add event listener to common parent element
// 2. Determine what element originated the event

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   console.log(e.target);
//   e.preventDefault();
//   // Matching Strategy
//   if (e.target.classList.contains("nav__link")) {
//   }
//   // console.log("Link");
//   let id = e.target.getAttribute("href");
//   // console.log(id);
//   document.querySelector(id).scrollIntoView({ behavior: "smooth" });
// });

// DOM Traversing

// let h1 = document.querySelector("h1");

// Going downwards : Child
// console.log(h1.querySelectorAll(".highlight")); // select all highlight class in h1 (doesn't matter how deep )
// console.log(h1.childNodes); // to get all things: element, text, attributes, comments, .............
// console.log(h1.children); // to get direct children
// h1.firstElementChild.style.color = "red";
// h1.lastElementChild.style.color = "red";
// console.log(h1.firstChild);

// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest(".header").style.background = "var(--gradient-secondary)";

// h1.closest("h1").style.background = "var(--gradient-primary)";
// // closest are the just opposite of the queryselectors (It is for children, no matter how far deep just like the closest are for the parents, no matter how far deep)

// // Going sideways : Siblings
// // (We can access only direct siblings: The previous and the next one )
// console.log(h1.previousElementSibling, h1.nextElementSibling);
// console.log(h1.previousSibling, h1.nextSibling);

// // Trick to get all siblings : moving to the parent then go to children
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (e) {
//   if (e !== h1) {
//     e.style.background = "red";
//     e.style.transform = "scale(0.5)";
//   }
// });
// // / Tabbed Component
// // tabs.forEach((t) => t.addEventListener("click", () => console.log("Tab")));
// // Doing like this is a bad practice : If we have 200 tabes  so use Event Deligation
// tabsContainer.addEventListener("click", function (e) {
//   let clicked = e.target.closest(".operations__tab");

//   // Guard Clause
//   if (!clicked) return;

//   // Remove classes
//   tabs.forEach((t) => t.classList.remove("operations__tab--active"));
//   tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

//   // Active tab
//   clicked.classList.add("operations__tab--active");

//   // Active Content Area
//   document
//     .querySelector(`.operations__content--${clicked.dataset.tab}`)
//     .classList.add("operations__content--active");
// });

// // Menu Fade Animation
// let handleHover = function (e) {
//   if (e.target.classList.contains("nav__link")) {
//     let link = e.target;
//     let siblings = link.closest(".nav").querySelectorAll(".nav__link");
//     let logo = link.closest(".nav").querySelector("img");

//     siblings.forEach((el) => {
//       if (el !== link) {
//         el.style.opacity = this;
//       }
//       logo.style.opacity = this;
//     });
//   }
// };
// nav.addEventListener("mouseover", function (e) {
//   handleHover(e, 0.5);
// });
// nav.addEventListener("mouseout", function (e) {
//   handleHover(e, 1);
// });

//Passing Argument into Event Handlers
// nav.addEventListener("mouseover", handleHover.bind(0.5));
// nav.addEventListener("mouseout", handleHover.bind(1));

// Implement the sticky Navigation bar : The Scroll Event
// let intialCoords = section1.getBoundingClientRect();
// console.log(intialCoords);
// window.addEventListener("scroll", () => {
//   // console.log(window.scrollY);
//   if (window.scrollY > intialCoords.top) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// });  // This thing is not good for the perfomance

// A better way : The Intersection Observer API
// let obsCallback = function (entries, observer) {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// };
// let obsOptions = {
//   root: null, // target Element
//   threshold: [0, 0.2], // percent of intersection at which the observer will be called
// };
// let observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
// let navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight); // to get nav height dynamicaly
// // let header = document.querySelector(".header");
// let stickyNav = function (entries) {
//   let [entry] = entries;
//   console.log(entry);
//   if (!entry.isIntersecting) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// };
// let headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight}px`,
// });

// DOMContentLoaded event : We don't need it because we already put script tag at the last of the HTML file
// document.addEventListener("DOMContentLoaded", function (e) {
//   console.log("HTML parsed and DOM tree build!", e);
// });

// load lister : after load
// window.addEventListener("load", function (e) {
//   console.log("Page fully loaded", e);
// });

// before load : to show a popup window before leave the site
// document.addEventListener("beforeunload", function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = "";
// });

// Efficient SCRIPT loading : Defer and Async(only in the Head)


////
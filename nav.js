const header = document.querySelector("header");
const sectionOne = document.querySelector("home-intro");

const sectionOneOptions = {};

const sectionOneObserver = new IntersectionObserver(function(entries,sectionOneObserver) {}, sectionOneOptions);
 
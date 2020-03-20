/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const navSections = document.querySelectorAll("section");
const navList = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// Build the nav
function buildNav(){
  for (let i = 0; i < navSections.length; i++) {
      const link = document.createElement("li");
      const sections = document.getElementsByTagName("section");
      link.innerHTML = `<a href="#${sections[i].id}">${sections[i].id}</a>`;
      navList.appendChild(link);
  }
};

// Add class 'active' to section when near top of viewport
function scrollEvent(){
      for (const section of navSections) {
          if (isInViewport(section)) {
              section.classList.add("active");
          } else {
              section.classList.remove("active");
          }
      }
};

function isInViewport(e) {
    let bounding = e.getBoundingClientRect();
    return (
        bounding.top = 0 ||
        bounding.bottom <= window.innerHeight
    );
};


/* ******************** PROBLEM WITH THIS PART PLEASE **************************
// Set the active navigation item
var navMenu = document.getElementsByClassName("navbar__menu");
var navItem = navMenu.getElementById("navbar__list");

for (let i = 0; i < navItem.length; i++) {

    navItem[i].addEventListener("click", function() {

    let current = document.getElementsByClassName("active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    this.className += " active";
  });
}
*****************************************************************************/





/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
window.addEventListener("DOMContentLoaded", buildNav);

// Scroll to section on link click

// Set sections as active
window.addEventListener("scroll", scrollEvent);

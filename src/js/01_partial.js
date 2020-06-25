"use strict";

/* assign variable to ALL accordion section titles */
const accordionTitles = document.querySelectorAll(".js-accordion-title");
/* assign variable to ALL accordion section content blocks */
const accordionContents = document.querySelectorAll(".js-accordion-content");

/*create a variable for all accordion title icons */
const accordionIcons = document.querySelectorAll(".js-accordion-icon");

/* function to remove class names */
function removeClass(element, className) {
  element.classList.remove(className);
}

/* add click event listener to ALL accordion section titles */
accordionTitles.forEach((accordionTitle) => {
  accordionTitle.addEventListener("click", () => {
    /*remove active class from all titles*/
    removeClass(accordionTitle, "js-accordion-title-active");

    /*reset all accordions to closed */
    accordionContents.forEach((accContent) =>
      removeClass(accContent, "js-accordion-content-open")
    );

    /*reset orientation of icons */
    accordionIcons.forEach((accordionIcon) =>
      removeClass(accordionIcon, "fa-rotate-180")
    );
    /*create variable for content block of current accordion*/
    const accordionContent = accordionTitle.nextElementSibling;

    /*add active class to current accordion */
    accordionTitle.classList.toggle("js-accordion-title-active");

    /* conditional to open current accordion and turn current title icon */
    if (accordionTitle.classList.contains("js-accordion-title-active")) {
      /*create variable for icon in accordion title block */
      const accordionIcon = accordionTitle.lastElementChild;
      accordionIcon.classList.add("fa-rotate-180");
      accordionContent.classList.add("js-accordion-content-open");
    } else {
      accordionIcon.classList.remove("fa-rotate-180");
      accordionContent.classList.remove("js-accordion-content-open");
    }
  });
});

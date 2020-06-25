"use strict";

/* assign variable to ALL accordion section titles */
const accordionTitles = document.querySelectorAll(".js-accordion-title");
/* assign variable to ALL accordion section content blocks */
const accordionContents = document.querySelectorAll(".js-accordion-content");

/*create a variable for all accordion title icons */
const accordionIcons = document.querySelectorAll(".js-accordion-icon");

/* add click event listener to ALL accordion section titles */
accordionTitles.forEach((accordionTitle) => {
  accordionTitle.addEventListener("click", () => {
    /*remove active class from all titles*/
    accordionTitles.forEach((accordionTitle) =>
      accordionTitle.classList.remove("js-accordion-title-active")
    );
    /*reset all accordions to closed */
    accordionContents.forEach((accContent) =>
      accContent.classList.remove("js-accordion-content-open")
    );

    /*reset orientation of icons */
    accordionIcons.forEach((accordionIcon) =>
      accordionIcon.classList.remove("fa-rotate-180")
    );
    /*create variable for content block of current accordion*/
    const accordionContent = accordionTitle.nextElementSibling;

    /*add active class to current accordion */
    accordionTitle.classList.toggle("js-accordion-title-active");

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

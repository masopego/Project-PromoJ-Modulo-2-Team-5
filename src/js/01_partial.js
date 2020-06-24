"use strict";

/* assign variable to ALL accordion section titles */
const accordionTitles = document.querySelectorAll(".js-accordion-title");
/* assign variable to ALL accordion section content blocks */
const accordionContents = document.querySelectorAll(".js-accordion-content");

/*create a variable for all accordion title icons */
const accordionIcons = document.querySelectorAll(".js-accordion-icon");

/* add click event listener to ALL accordion section titles */
accordionTitles.forEach((accordionTitle) => {
  accordionTitle.addEventListener("click", (x) => {
    /*reset all accordions to closed */
    accordionContents.forEach((accContent) => (accContent.style.maxHeight = 0));

    accordionTitles.forEach((accordionTitle) =>
      accordionTitle.classList.remove("js-accordion-title-active")
    );
    /*reset orientation of icons */
    accordionIcons.forEach(
      (accordionIcon) => (accordionIcon.style.transform = "rotate(0)")
    );

    /*add active class to current accordion */
    accordionTitle.classList.toggle("js-accordion-title-active");
    /*create variable for content block of current accordion*/
    const jsAccordionContent = accordionTitle.nextElementSibling;
    /*create variable for icon in accordion title block */
    const jsTitleIcon = accordionTitle.lastElementChild;

    if (accordionTitle.classList.contains("js-accordion-title-active")) {
      jsAccordionContent.style.maxHeight =
        jsAccordionContent.scrollHeight + "px";
      jsTitleIcon.style.transform = "rotate(180deg)";
    } else {
      jsAccordionContent.style.maxHeight = 0;
      jsTitleIcon.style.transform = "rotate(0)";
    }
  });
});

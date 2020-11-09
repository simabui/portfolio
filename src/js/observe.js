"use strict";

const options = {
  threshold: 1,
};

const nav = document.querySelector(".footer__list");

function onEntry(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.getAttribute("id");
      const currentActiveLink = nav.querySelector(".isActive");

      if (currentActiveLink) {
        currentActiveLink.classList.remove("isActive");
      }

      const nextActiveLink = nav.querySelector(`a[href="#${sectionId}"]`);
      nextActiveLink.classList.add("isActive");
    }
  });
}

const observer = new IntersectionObserver(onEntry, options);
const sections = document.querySelectorAll(".section-observe");
sections.forEach((section) => {
  observer.observe(section);
});

import Splitter from "split-html-to-chars";

const els = document.querySelectorAll(".js-split");

//split title
[].forEach.call(els, (el) => {
  el.outerHTML = Splitter(el.outerHTML, '<span class="js-letter">$</span>');
});

const tlTitle = new TimelineMax();

tlTitle.staggerFromTo(".home__text span", 0.4, { x: -200, opacity: 0 }, { x: 0, opacity: 1, ease: "sine.out" }, 0.1);

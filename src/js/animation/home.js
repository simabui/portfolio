import Splitter from "split-html-to-chars";

const els = document.querySelectorAll(".js-split");

//split title
[].forEach.call(els, (el) => {
  el.outerHTML = Splitter(el.outerHTML, '<span class="js-letter">$</span>');
});

const tlTitle = new TimelineMax();

tlTitle.staggerFromTo(".home__text span", 0.4, { scale: 0.3, opacity: 0 }, { scale: 1, opacity: 1, ease: "bounce.out" }, 0.1);

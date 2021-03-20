import { throttle } from "throttle-debounce";

// animation
const tlTitle2 = new TimelineMax({ paused: true });
tlTitle2.staggerFromTo(
  ".portfolio__title span",
  0.2,
  {
    x: 200,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    ease: "sine.out",
  },
  0.2
);
const tlAbout = new TimelineMax({ paused: true });

tlAbout.fromTo(
  ".about",
  {
    y: 400,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "sine.out",
  }
);

// start animation when scrolled to second page
window.addEventListener(
  "scroll",
  throttle(500, () => onScrollAnimation())
);

function onScrollAnimation() {
  let scroll = window.scrollY;

  if (scroll >= 694) {
    tlTitle2.play();
  } else {
    tlTitle2.invalidate();
  }
  if (scroll >= 1700) {
    tlAbout.play();
  } else {
    tlAbout.invalidate();
  }
}

const controller = new ScrollMagic.Controller();

// define movement of panels
const wipeAnimation = new TimelineMax()
  .to(".panel.main", 1, { top: "-100vh", delay: 0, ease: Linear.easeNone })
  .to(".panel.portfolio", 1, { top: "-100vh", delay: 0.3, ease: Linear.easeNone });

new ScrollMagic.Scene({
  triggerElement: ".pinContainer",
  triggerHook: "onLeave",
  duration: "300%",
})
  .setPin(".pinContainer")
  .setTween(wipeAnimation)
  .addTo(controller);

const opacityAnimation = new TimelineMax()
  .to(".black", 1, { opacity: 0, zIndex: 4, delay: 0, ease: "power1.out" })
  .to(".black", 0, { opacity: 0.8, zIndex: 3, ease: "power1.out" })
  .to(".black", 1, { opacity: 0, zIndex: 2, delay: 0.3, ease: "power1.out" });

new ScrollMagic.Scene({
  triggerElement: ".pinContainer",
  triggerHook: "onLeave",
  duration: "300%",
})
  .setTween(opacityAnimation)
  .addTo(controller);

import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

const nav = ["home", "portfolio", "contacts"];
const cls = ["swiper-pagination", "swiper-pagination-clickable", "swiper-pagination-bullets"];
const footer = document.querySelector(".footer__list");
const burger = document.querySelector(".menu__box");

// function removeClasses(elem) {
//   cls.map((c) => {
//     if (c.includes("swiper")) {
//       elem.classList.remove(c);
//     }
//   });
// }
// function addClasses(elem) {
//   cls.map((c) => elem.classList.add(c));
// }

// if (window.matchMedia("(max-width: 768px)").matches) {
//   removeClasses(footer);
//   addClasses(burger);
// } else {
//   addClasses(footer);
//   removeClasses(burger);
// }

// window.addEventListener("resize", function (event) {
//   const width = window.innerWidth;
//   if (width === 768) {

//   }
// });

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  speed: 700,
  pagination: {
    el: ".swiper-pagination,.swiper-pagination-burger",
    clickable: true,
    renderBullet: function (index, className) {
      return '<li class="' + className + '">' + nav[index] + "</li>";
    },
  },
  navigation: {
    nextEl: ".main__button",
  },
});

const swiperContainer = document.querySelector(".menu__box");
const menuOverlay = document.querySelector(".burger-menu-overlay");
const button = document.getElementById("menu__toggle");

// swiperContainer.addEventListener("click", handleMenu);
menuOverlay.addEventListener("click", handleMenuOverlay);

function handleMenuOverlay(e) {
  if (e.target === e.currentTarget) {
    button.checked = false;
  }
}

// function handleMenu(e) {
//   closeMenu(e);
// }

// function closeMenu(el) {
//   if (el.target.localName === "li") {
//     setTimeout(() => {
//       button.checked = false;
//     }, 400);
//   }
// }

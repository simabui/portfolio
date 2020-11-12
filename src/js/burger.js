const swiperContainer = document.querySelector(".menu__box");
const button = document.getElementById("menu__toggle");

swiperContainer.addEventListener("click", handleMenu);

function handleMenu(e) {
  closeMenu(e);
}

function closeMenu(el) {
  if (el.target.localName === "li") {
    setTimeout(() => {
      button.checked = false;
    }, 400);
  }
}

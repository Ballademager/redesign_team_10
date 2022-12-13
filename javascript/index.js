const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

/*const images = ["../img/kim/forside_1.jpg", "../img/kim/forside_2.jpg", "../img/kim/forside_3.jpg", "../img/kim/forside_4.jpg", "../img/kim/forside_5.jpg"];
const carousel1 = document.querySelector(".carousel1");
const interval = setInterval(function () {
  startCarousel1();
}, 3000);
var index = 1;

startCarousel1 = () => {
  carousel1.style.backgroundImage = `url(${images[index++]})`;
  carousel1.classList.remove("shift");
  void carousel1.offsetWidth;
  carousel1.classList.add("shift");
  if (index > images.length - 1) index = 0;
};*/

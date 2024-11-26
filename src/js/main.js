const docsDrop = document.querySelector("#drop-docs");
const navDrop = document.querySelector("#nav-drop");
const node0 = document.querySelector("#node-0");
const node1 = document.querySelector("#node-1");
const node2 = document.querySelector("#node-2");
const node3 = document.querySelector("#node-3");
const node4 = document.querySelector("#node-4");
const node5 = document.querySelector("#node-5");

docsDrop.addEventListener("mouseover", function () {
  navDrop.classList.add("ntt-nav-drop-open");
});
navDrop.addEventListener("mouseover", function () {
  navDrop.classList.remove("ntt-nav-drop");
  navDrop.classList.add("ntt-nav-drop-open");
});
navDrop.addEventListener("mouseout", function () {
  navDrop.classList.remove("ntt-nav-drop-open");
  navDrop.classList.add("ntt-nav-drop");
});
node0.addEventListener("mouseover", function () {
  navDrop.classList.remove("ntt-nav-drop-open");
  navDrop.classList.add("ntt-nav-drop");
});
node1.addEventListener("mouseover", function () {
  navDrop.classList.remove("ntt-nav-drop-open");
  navDrop.classList.add("ntt-nav-drop");
});
node2.addEventListener("mouseover", function () {
  navDrop.classList.remove("ntt-nav-drop-open");
  navDrop.classList.add("ntt-nav-drop");
});
node3.addEventListener("mouseover", function () {
  navDrop.classList.remove("ntt-nav-drop-open");
  navDrop.classList.add("ntt-nav-drop");
});
node4.addEventListener("mouseover", function () {
  navDrop.classList.remove("ntt-nav-drop-open");
  navDrop.classList.add("ntt-nav-drop");
});
node5.addEventListener("mouseover", function () {
  navDrop.classList.remove("ntt-nav-drop-open");
  navDrop.classList.add("ntt-nav-drop");
});

//==>Hamburger Menu show<==//
const hamBurger = document.querySelector(".hamburger");
const hamBurger1 = document.querySelector("#hamburger-1");
const MobMenu = document.querySelector("#mobMenu");

hamBurger.addEventListener("click", function () {
  hamBurger1.classList.toggle("is-active");
});
hamBurger1.addEventListener("click", function () {
  MobMenu.classList.toggle("mobile-menu-show");
});

//==>Hamburger Menu close<==//
window.addEventListener("click", function (e) {
  if (e.target != hamBurger1 && e.target != MobMenu) {
    MobMenu.classList.add("mobile-menu");
    hamBurger1.classList.add("hamburger");
  }
});
//==>Swipper<==//
var swiper = new Swiper(".swiper-container", {
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2.1,
    },
    // when window width is >= 667px
    667: {
      slidesPerView: 3.1,
    },
    // when window width is >= 920px
    920: {
      slidesPerView: 4.1,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 5.2,
    },
  },
});

const navDocmBtn = document.querySelector("#nav-docm-btn");
const navDocm = document.querySelector("#nav-docm");

navDocmBtn.addEventListener("click", function () {
  navDocm.classList.toggle("ntt-nav-docm-open");
});
// scrolly
const item = document.getElementById("gear");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const rotation = scrollY * 0.4;
  item.style.transform = `rotate(${rotation}deg)`;
});

// PAGE HEADER FADE
const fadeHead = $("header");
$(window).on("scroll", function () {
  const st = $(this).scrollTop();
  fadeHead.css({ opacity: 1 - st / 400 });
  fadeHead.css({ "transition-delay": "0s" });
  fadeHead.css({ transition: "0.01s ease-in-out" });
});

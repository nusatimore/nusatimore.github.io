const navDocmBtn = document.querySelector("#nav-docm-btn");
const navDocm = document.querySelector("#nav-docm");

navDocmBtn.addEventListener("click", function () {
  navDocm.classList.toggle("ntt-nav-docm-open");
});
// scrolly
const item = document.getElementById("gear");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const rotation = scrollY * 0.1;
  item.style.transform = `rotate(${rotation}deg)`;
});

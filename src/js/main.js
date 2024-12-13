// scrolly
const item = document.getElementById("gear");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const rotation = scrollY * 0.1;
  item.style.transform = `rotate(${rotation}deg)`;
});

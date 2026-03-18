const cursor = document.querySelector(".mouse__cursor");
const span = document.querySelectorAll(".mouse__wrap span");
const header = document.querySelector("#header");
const footer = document.querySelector("#footer");
const info = document.querySelector(".mouse__info");

const width = cursor.offsetWidth / 2;
const height = cursor.offsetHeight / 2;
console.log(width);
console.log(height);

window.addEventListener("mousemove", function (e) {
  gsap.to(cursor, { duration: 0.4, left: e.pageX - width, top: e.pageY - height });
});

//마우스 오버 효과
span.forEach(function (element) {
  element.addEventListener("mouseenter", function () {
    cursor.classList.add("active");
  });
  element.addEventListener("mouseleave", function () {
    cursor.classList.remove("active");
  });
});

header.addEventListener("mouseover", () => {
  cursor.classList.add("show");
});
header.addEventListener("mouseout", () => {
  cursor.classList.remove("show");
});

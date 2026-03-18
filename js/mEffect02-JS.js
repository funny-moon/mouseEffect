//마우스 움직임 효과
const cursor = document.querySelector(".mouse__cursor");
const cursor2 = document.querySelector(".mouse__cursor2");
const cursor3 = document.querySelector(".mouse__cursor3");
const span = document.querySelectorAll(".mouse__wrap span");
const header = document.querySelector("#header");
const info = document.querySelector(".mouse__info");
const footer = document.querySelector("#footer");

window.addEventListener("mousemove", function (e) {
  // cursor.style.left = e.pageX - 5 + "px";
  // cursor.style.top = e.pageY - 5 + "px";
  // cursor2.style.left = e.pageX - 15 + "px";
  // cursor2.style.top = e.pageY - 15 + "px";
  // cursor3.style.left = e.pageX - 25 + "px";
  // cursor3.style.top = e.pageY - 25 + "px";

  // gsap
  gsap.to(cursor, { duration: 0.3, left: e.pageX - 5, top: e.pageY - 5 });
  gsap.to(cursor2, { duration: 0.8, left: e.pageX - 15, top: e.pageY - 15 });
  gsap.to(cursor3, { duration: 1.1, left: e.pageX - 25, top: e.pageY - 25 });

  //오버효과
  span.forEach(function (element) {
    element.addEventListener("mouseover", function () {
      cursor.classList.add("active");
      cursor2.classList.add("active");
      cursor3.classList.add("active");
    });
    element.addEventListener("mouseout", function () {
      cursor.classList.remove("active");
      cursor2.classList.remove("active");
      cursor3.classList.remove("active");
    });
  });

  header.addEventListener("mouseover", function () {
    cursor.classList.add("active2");
    cursor2.classList.add("active2");
    cursor3.classList.add("active2");
  });
  header.addEventListener("mouseout", function () {
    cursor.classList.remove("active2");
    cursor2.classList.remove("active2");
    cursor3.classList.remove("active2");
  });

  info.addEventListener("mouseover", function () {
    cursor.classList.add("active3");
    cursor2.classList.add("active3");
    cursor3.classList.add("active3");
  });
  info.addEventListener("mouseout", function () {
    cursor.classList.remove("active3");
    cursor2.classList.remove("active3");
    cursor3.classList.remove("active3");
  });

  footer.addEventListener("mouseover", function () {
    cursor.classList.add("active4");
    cursor2.classList.add("active4");
    cursor3.classList.add("active4");
  });
  footer.addEventListener("mouseout", function () {
    cursor.classList.remove("active4");
    cursor2.classList.remove("active4");
    cursor3.classList.remove("active4");
  });

  //출력
  document.querySelector(".pageX").innerText = e.pageX;
  document.querySelector(".pageY").innerText = e.pageY;
});

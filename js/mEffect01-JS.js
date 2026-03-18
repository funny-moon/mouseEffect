// 출력용
window.addEventListener("mousemove", function (event) {
  document.querySelector(".clientX").innerText = event.clientX;
  document.querySelector(".clientY").innerText = event.clientY;
  document.querySelector(".offsetX").innerText = event.offsetX;
  document.querySelector(".offsetY").innerText = event.offsetY;
  document.querySelector(".pageX").innerText = event.pageX;
  document.querySelector(".pageY").innerText = event.pageY;
  document.querySelector(".screenX").innerText = event.screenX;
  document.querySelector(".screenY").innerText = event.screenY;
});

//마우스 움직이기
window.addEventListener("mousemove", function (e) {
  document.querySelector(".mouse__cursor").style.left = e.clientX - 25 + "px";
  document.querySelector(".mouse__cursor").style.top = e.clientY - 25 + "px";
});

// 마우스 효과
// document.querySelector(".style1").addEventListener("mouseover", function () {
//   document.querySelector(".mouse__cursor").classList.add("style1");
// });
// document.querySelector(".style1").addEventListener("mouseout", function () {
//   document.querySelector(".mouse__cursor").classList.remove("style1");
// });

// document.querySelector(".style2").addEventListener("mouseover", function () {
//   document.querySelector(".mouse__cursor").classList.add("style2");
// });
// document.querySelector(".style2").addEventListener("mouseout", function () {
//   document.querySelector(".mouse__cursor").classList.remove("style2");
// });

//for문
// for (let i = 1; i <= 6; i++) {
//   document.querySelector(".style" + i).addEventListener("mouseover", function () {
//     document.querySelector(".mouse__cursor").classList.add("style" + i);
//   });
//   document.querySelector(".style" + i).addEventListener("mouseout", function () {
//     document.querySelector(".mouse__cursor").classList.remove("style" + i);
//   });
// }

// forEach()
// document.querySelectorAll(".mouse__wrap span").forEach(function (element, index) {
//   element.addEventListener("mouseover", function () {
//     document.querySelector(".mouse__cursor").classList.add("style" + (index + 1));
//   });
//   element.addEventListener("mouseout", function () {
//     document.querySelector(".mouse__cursor").classList.remove("style" + (index + 1));
//   });
// });

// getAttribute
document.querySelectorAll(".mouse__wrap span").forEach(function (element, index) {
  let attr = element.getAttribute("class");

  element.addEventListener("mouseover", function () {
    document.querySelector(".mouse__cursor").classList.add(attr);
  });
  element.addEventListener("mouseout", function () {
    document.querySelector(".mouse__cursor").classList.remove(attr);
  });
});

const wrap = document.querySelector(".mouse__wrap figure");

wrap.addEventListener("mousemove", function (e) {
  //기준점을 가운데로 맞추기

  let centerPageX = window.innerWidth / 2 - e.pageX;
  let centerPageY = window.innerHeight / 2 - e.pageY;

  //이미지 움직임
  const move = document.querySelector(".mouse__wrap figure img");
  move.style.transform = `translate( ${centerPageX / 20}px, ${centerPageY / 20}px)`;

  //출력
  document.querySelector(".mousePageX").textContent = e.pageX;
  document.querySelector(".mousePageY").textContent = e.pageY;
  document.querySelector(".centerPageX").textContent = centerPageX;
  document.querySelector(".centerPageY").textContent = centerPageY;
});

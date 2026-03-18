$(".mouse__wrap figure").mousemove(function (e) {
  gsap.to(".mouse__cursor", { duration: 0.5, left: e.pageX - 10, top: e.pageY - 10 });

  //기준점을 가운데로 맞추기
  let centrPageX = $(window).width() / 2 - e.pageX;
  let centrPageY = $(window).height() / 2 - e.pageY;

  //출력
  $(".mousePageX").text(e.pageX);
  $(".mousePageY").text(e.pageY);
  $(".centerPageX").text(centrPageX);
  $(".centerPageY").text(centrPageY);

  //움직이기
  //style="transform: translate(10px, -5px)"

  //"문자열  "+변수+" 문자열 "
  //   $(".mouse__wrap figure img").attr({
  //     style: "transform: translate(" + centrPageX / 20 + "px, " + centrPageY / 20 + "px)",
  //   });

  //   $(".mouse__wrap figure img").attr({
  //     style: `transform: translate(${centrPageX}px, ${centrPageY}px)`,
  //   });

  // 템플릿 리터널 방식  ` 문자열  ${변수} 문자열`
  $(".mouse__wrap figure img").css({ transform: `translate(${centrPageX / 20}px, ${centrPageY / 20}px)` });
});

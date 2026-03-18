//출력용
$(window).mousemove(function (event) {
  $(".clientX").text(event.clientX); // 브라우저 X좌표
  $(".clientY").text(event.clientY); // 브라우저 Y좌표
  $(".offsetX").text(event.offsetX); // 요소 X좌표
  $(".offsetY").text(event.offsetY); // 요소 Y좌표
  $(".pageX").text(event.pageX); //페이지 X좌표
  $(".pageY").text(event.pageY); //페이지 Y좌표
  $(".screenX").text(event.screenX); //디바이스 X좌표
  $(".screenY").text(event.screenY); //디바이스 Y좌표
});

// 미우스 움직이기
$(window).mousemove(function (e) {
  $(".mouse__cursor").css({ left: e.clientX - 25, top: e.clientY - 25 });
});

// 마우스 오버 효과
// $(".mouse__wrap .style1").mouseover(function () {
//   $(".mouse__cursor").addClass("style1");
// });
// $(".mouse__wrap .style1").mouseout(function () {
//   $(".mouse__cursor").removeClass("style1");
// });

// $(".mouse__wrap .style1").hover(
//   function () {
//     $(".mouse__cursor").addClass("style1");
//   },
//   function () {
//     $(".mouse__cursor").removeClass("style1");
//   },
// );
// $(".mouse__wrap .style2").hover(
//   function () {
//     $(".mouse__cursor").addClass("style2");
//   },
//   function () {
//     $(".mouse__cursor").removeClass("style2");
//   },
// );
// $(".mouse__wrap .style3").hover(
//   function () {
//     $(".mouse__cursor").addClass("style3");
//   },
//   function () {
//     $(".mouse__cursor").removeClass("style3");
//   },
// );
// $(".mouse__wrap .style4").hover(
//   function () {
//     $(".mouse__cursor").addClass("style4");
//   },
//   function () {
//     $(".mouse__cursor").removeClass("style4");
//   },
// );
// $(".mouse__wrap .style5").hover(
//   function () {
//     $(".mouse__cursor").addClass("style5");
//   },
//   function () {
//     $(".mouse__cursor").removeClass("style5");
//   },
// );
// $(".mouse__wrap .style6").hover(
//   function () {
//     $(".mouse__cursor").addClass("style6");
//   },
//   function () {
//     $(".mouse__cursor").removeClass("style6");
//   },
// );

// for문
// for (let i = 1; i <= 6; i++) {
//   $(".mouse__wrap .style" + i).hover(
//     function () {
//       $(".mouse__cursor").addClass("style" + i);
//     },
//     function () {
//       $(".mouse__cursor").removeClass("style" + i);
//     },
//   );
// }

// each()문
// $(".mouse__wrap span").each(function (index, element) {
//   $(element).hover(
//     function () {
//       $(".mouse__cursor").addClass("style" + (index + 1));
//     },
//     function () {
//       $(".mouse__cursor").removeClass("style" + (index + 1));
//     },
//   );
// });

// attr()
$(".mouse__wrap span").hover(
  function () {
    $(".mouse__cursor").addClass($(this).attr("class"));
  },
  function () {
    $(".mouse__cursor").removeClass($(this).attr("class"));
  },
);

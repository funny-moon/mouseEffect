// 출력용
$(window).mousemove(function (e) {
  $(".pageX").text(e.pageX);
  $(".pageY").text(e.pageY);
});

// 마우스 움직임 효과
const cursor = $(".mouse__cursor");
const cursor2 = $(".mouse__cursor2");
const cursor3 = $(".mouse__cursor3");

$(window).mousemove(function (e) {
  //   cursor.css({ left: e.pageX - 5, top: e.pageY - 5 });
  //   cursor2.css({ left: e.pageX - 15, top: e.pageY - 15 });

  gsap.to(cursor, { duration: 0.3, left: e.pageX - 5, top: e.pageY - 5 });
  gsap.to(cursor2, { duration: 0.8, left: e.pageX - 15, top: e.pageY - 15 });
  gsap.to(cursor3, { duration: 1, left: e.pageX - 25, top: e.pageY - 25 });
});

// 오버 효과
$(".mouse__wrap span").hover(
  function () {
    cursor.addClass("active");
    cursor2.addClass("active");
    cursor3.addClass("active");
  },
  function () {
    cursor.removeClass("active");
    cursor2.removeClass("active");
    cursor3.removeClass("active");
  },
);

$("#header").hover(
  function () {
    cursor.addClass("active2");
    cursor2.addClass("active2");
    cursor3.addClass("active2");
  },
  function () {
    cursor.removeClass("active2");
    cursor2.removeClass("active2");
    cursor3.removeClass("active2");
  },
);

$(".mouse__info").hover(
  function () {
    cursor.addClass("active3");
    cursor2.addClass("active3");
    cursor3.addClass("active3");
  },
  function () {
    cursor.removeClass("active3");
    cursor2.removeClass("active3");
    cursor3.removeClass("active3");
  },
);
$("#footer").hover(
  function () {
    cursor.addClass("active4");
    cursor2.addClass("active4");
    cursor3.addClass("active4");
  },
  function () {
    cursor.removeClass("active4");
    cursor2.removeClass("active4");
    cursor3.removeClass("active4");
  },
);

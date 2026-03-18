const cursor = $(".mouse__cursor");
const width = cursor.width() / 2;
const height = cursor.height() / 2;
console.log(width);
console.log(height);

//움직임 효과
$(window).mousemove(function (e) {
  // cursor.css({ left: e.pageX - width, top: e.pageY - height });
  gsap.to(cursor, { duration: 0.4, left: e.pageX - width, top: e.pageY - height });

  //출력
  $(".pageX").text(e.pageX);
  $(".pageY").text(e.pageY);
});

$(".mouse__wrap span").hover(
  function () {
    cursor.addClass("active");
  },
  function () {
    cursor.removeClass("active");
  },
);
$("#header").hover(
  function () {
    cursor.addClass("active");
  },
  function () {
    cursor.removeClass("active");
  },
);

const cursor = $(".mouse__cursor");
const width = $(".mouse__cursor").width() / 2;
const height = $(".mouse__cursor").height() / 2;

$(window).mousemove(function (e) {
  gsap.to(cursor, { duration: 0.4, left: e.pageX - width, top: e.pageY - height });
});

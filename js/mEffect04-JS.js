const cursor = document.querySelector(".mouse__cursor");
const width = cursor.offsetWidth;
const height = cursor.offsetHeight;

const cWidth = cursor.clientWidth / 2;
const cHeight = cursor.clientHeight / 2;

console.log(width);
console.log(height);

console.log(cWidth);
console.log(cHeight);

function follow(e) {
  gsap.to(cursor, { duration: 0.4, left: e.pageX - cWidth, top: e.pageY - cHeight });
}
window.addEventListener("mousemove", follow);

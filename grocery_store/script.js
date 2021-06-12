const menu = document.querySelector("#menu-bar");
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header-2");

menu.addEventListener("click", function () {
  menu.classList.toggle("fa-times");
  menu.classList.toggle("fa-bars");
  navbar.classList.toggle("active");
});
window.addEventListener("scroll", function () {
  menu.classList.remove("fa-times");
  menu.classList.add("fa-bars");
  navbar.classList.remove("active");
  if (window.scrollY > 150) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
const countDate = new Date("july 1, 2021 00:00:00").getTime();
function countDown() {
  const now = new Date().getTime();
  gap = countDate - now;
  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let d = Math.floor(gap / day);
  let h = Math.floor((gap % day) / hour);
  let m = Math.floor((gap % hour) / minute);
  let s = Math.floor((gap % minute) / second);
  document.getElementById("day").innerText = d;
  document.getElementById("hour").innerText = h;
  document.getElementById("minute").innerText = m;
  document.getElementById("second").innerText = s;
}
setInterval(function () {
  countDown();
}, 1000);

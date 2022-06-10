//选择element
const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const preloader = document.querySelector(".preloader");
//eventlistener
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
btn.addEventListener("click", function (e) {
  console.log(e.target);

  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
    console.log("add");
  } else {
    btn.classList.remove("slide");
    video.play();
    console.log("remove");
  }
});

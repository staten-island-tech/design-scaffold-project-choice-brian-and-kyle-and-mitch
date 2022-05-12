import "./css/styles.css";

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

document.getElementById("button1").addEventListener("click", function () {
  gsap.to(window, { duration: 1, scrollTo: "#top" });
});
document.getElementById("button2").addEventListener("click", function () {
  gsap.to(window, { duration: 1, scrollTo: "#top2" });
});
document.getElementById("button3").addEventListener("click", function () {
  gsap.to(window, { duration: 1, scrollTo: "#top3" });
});
document.getElementById("button4").addEventListener("click", function () {
  gsap.to(window, { duration: 1, scrollTo: "#top4" });
});
document.getElementById("button5").addEventListener("click", function () {
  gsap.to(window, { duration: 1, scrollTo: "#top5" });
});
document.getElementById("button6").addEventListener("click", function () {
  gsap.to(window, { duration: 1, scrollTo: "#top6" });
});
document.getElementById("button7").addEventListener("click", function () {
  gsap.to(window, { duration: 1, scrollTo: "#top7" });
});

document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("secondary-theme")) {
    document.body.classList.add("primary-theme");
    document.body.classList.remove("secondary-theme");
  } else {
    document.body.classList.add("secondary-theme");
    document.body.classList.remove("primary-theme");
  }
});

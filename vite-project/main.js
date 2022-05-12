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
  gsap.to(window, { duration: 1, scrollTo: "#sec-4" });
});
document.getElementById("button5").addEventListener("click", function () {
  gsap.to(window, { duration: 1, scrollTo: "#sec-5" });
});
document.getElementById("button6").addEventListener("click", function () {
  gsap.to(window, { duration: 1, scrollTo: "#sec-6" });
});
document.getElementById("button7").addEventListener("click", function () {
  gsap.to(window, { duration: 1, scrollTo: "#sec-7" });
});

// get UI
const checkBtn = document.querySelector("#chk");
const checkBtnColor = document.querySelector(".ball");
const bodyUI = document.querySelector("body");

// Lsitener
checkBtn.addEventListener("click", function () {
  bodyUI.classList.toggle("light-theme");

  if (bodyUI.classList.contains("light-theme")) {
    checkBtnColor.style.backgroundColor = "hsl(230, 17%, 14%)";
  } else {
    checkBtnColor.style.backgroundColor = "hsl(0, 0%, 100%)";
  }
});

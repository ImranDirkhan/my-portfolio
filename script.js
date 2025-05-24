const nav = document.querySelector("nav");
const chevronCont = document.getElementById("expand-collapse");
const chevron = document.querySelector(".fa-chevron-right");
const navList = document.querySelector(".nav-list");

chevronCont.addEventListener("click", function () {
  if (
    !navList.classList.contains("hidden") &
    !chevron.classList.contains("revert")
  ) {
    navList.classList.add("hidden");
    chevron.classList.add("revert");
    nav.style.paddingRight = 0;
  } else if (
    navList.classList.contains("hidden") & chevron.classList.contains("revert")
  ) {
    navList.classList.remove("hidden");
    chevron.classList.remove("revert");
    nav.style.paddingRight = "4px";
  }
});

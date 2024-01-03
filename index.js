const menuBtn = document.querySelector(".menu");
const overlayForm = document.querySelector(".overlay");

menuBtn.addEventListener('click', () => {
  if (overlayForm.style.visibility === "visible") {
    overlayForm.style.visibility = "hidden";
  } else {
      overlayForm.style.visibility = "visible";
  }
});

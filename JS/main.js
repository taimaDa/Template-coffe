let menu = document.querySelector(".menu");
let spans = document.querySelectorAll(".menu-style span");
let menuList = document.querySelector(".drop");

menu.addEventListener("click", () => {
  if (menu.dataset.state === "false") {
    spans.forEach((ele) => {
      ele.classList.add("active");
    });
    menuList.classList.add("active");
    menu.dataset.state = "true";
  } else {
    spans.forEach((ele) => {
      ele.classList.remove("active");
    });
    menuList.classList.remove("active");
    menu.dataset.state = "false";
  }
});

document.onkeyup = (e) => {
  if (e.key === "Escape") {
    spans.forEach((ele) => {
      ele.classList.remove("active");
    });
    menuList.classList.remove("active");
    menu.dataset.state = "false";
  }
};

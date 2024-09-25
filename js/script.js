
// sidbar function 
const mobile_toggle = document.querySelector(".mobile-nav-toggle");
const SideBar = document.querySelector(".side-bar");
const close_icon = document.querySelector(".close-btn-icon");
const menu_icon = document.querySelector(".menu-list-icon");
function nav_btn() {
  SideBar.classList.toggle("nav-open");
}
mobile_toggle.addEventListener("click", function () {
  nav_btn();
  if (nav_btn) {
    close_icon.style.display = "block";
    menu_icon.style.display = "none";
  }
});


//  auto typed function
const typed = document.querySelector(".typed");
if (typed) {
  let typed_strings = typed.getAttribute("data-typed-items");
  typed_strings = typed_strings.split(",");
  new Typed(".typed", {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
  });
}


//  fade function 
window.addEventListener("load", () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
});


// init precounter function
new PureCounter();

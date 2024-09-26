
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


// const typed = document.querySelector(".typed");
// if (typed) {
//   let typed_strings = typed.getAttribute("data-typed-items");
//   typed_strings = typed_strings.split(",");
//   new Typed(".typed", {
//     strings: typed_strings,
//     loop: true,
//     typeSpeed: 100,
//     backSpeed: 50,
//     backDelay: 2000,
//   });
// }

     // تعریف المان ها
     const el = document.querySelector(".typewriter");
     let curPraseIndex = 0;
     let sleepTime = 100;
     
     const phrases = ["Cooder", "Photographer", "Editor", "Developer"];
     
     function sleep(ms) {
       return new Promise((resolve) => setTimeout(resolve, ms));
     }

     const writeLoop = async () => {
       // اوبین توقف قبل ار شروغ کلمه
       await sleep(sleepTime );
       while (true) {
         let curword = phrases[curPraseIndex];
         //تابع نوشتن
         for (i = 0; i < curword.length; i++) {
           el.innerHTML = curword.substring(0, i + 1);
           // سرعت نوشتن
           await sleep(sleepTime);
         }
         //  توقف اخر
         await sleep(sleepTime * 20);
         // تابع پاک کردن
         for (let i = curword.length; i > 0; i--) {
           el.innerHTML = curword.substring(0, i - 1);
           // سرعت پاک کردن
           await sleep(sleepTime * 0.5);
         }
         // توقف اول
         await sleep(sleepTime * 2);
         //   change word
         if (curPraseIndex === phrases.length - 1) {
           curPraseIndex = 0;
         } else {
           curPraseIndex++;
         }
       }
     };
     writeLoop();


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

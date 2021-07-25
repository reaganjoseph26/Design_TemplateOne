const themeSwitch = document.querySelector(".theme-switch");
const body = document.querySelector("body");
const homeScreen = document.querySelector(".home-section");
const homeHeader = document.querySelector(".header");
const aboutDesrip = document.querySelector(".about-descrip");
const aboutDesripText = document.querySelector(".about-descrip-text");

const hideEnter = document.querySelector(".hide");

//themeSwitch toggle
themeSwitch.onclick = function() {
    homeScreen.classList.toggle("light");
    homeHeader.classList.toggle("light");
    aboutDesrip.classList.toggle("light");
    aboutDesripText.classList.toggle("light");
    body.classList.toggle("light");
  }

//hide enter page
hideEnter.addEventListener("click", function() {
    this.classList = 'hide';
    AOS.init()
  });

// card read more func
 function cardToggle() {
   var blur = document.querySelector("#blur");
   blur.classList.toggle("cardActive");
   
   var popup = document.querySelector("#popup");
   popup.classList.toggle("cardActive");
 };



// side navigation//

// const list = document.querySelectorAll(".list")
// const menuToggle = document.querySelector(".toggle")
// const navigation = document.querySelector(".navigation")

// menuToggle.onclick = function () {
//     menuToggle.classList.toggle("active");
//     navigation.classList.toggle("active");
// }

// for (let i = 0; i < list.length; i++) {
//     list[i].onclick = function () {
//         let j = 0;
//         while(j < list.length) {
//             list[j++].className = 'list'
//         }
//         list[i].className = 'list active';
//     }
// }

// $(document).ready(function() {
//     $('#home-hello').animate({opacity: 1}, 2000, function(){
//          $('#home-slogan').animate({opacity: 1}, 2000, function(){
//               $('#home-slogan2').animate({opacity: 1}, 2000, function(){
         
//               })
//          })
//     });

   
// });

const themeSwitch = document.querySelector(".theme-switch");
const homeScreen = document.querySelector(".home-section");
const homeHeader = document.querySelector(".header");

//themeSwitch toggle
themeSwitch.onclick = function() {
 homeScreen.classList.toggle("dark");
 homeHeader.classList.toggle("dark");
}


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

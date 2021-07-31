const themeSwitch = document.querySelector(".theme-switch");
const body = document.querySelector("body");
const homeScreen = document.querySelector(".home-section");
const homeHeader = document.querySelector(".header");
const aboutDesrip = document.querySelector(".about-descrip");
const aboutDesripText = document.querySelector(".about-descrip-text");

const hideEnter = document.querySelector(".hide");

const cardContainer = document.querySelector(".cards-container");
const popup = document.querySelectorAll(".popup");
const cardLinks = document.querySelectorAll(".card-links")

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

function cardToggle() {
  //loop through the cardlinks
  for (var i = 0 ; i < cardLinks.length; i++) {
    //listen for any cardLink click
    cardLinks[i].addEventListener('click' , function(event) {
      //remove active class from all popup divs
      popup.forEach(popup => {
        popup.classList.remove("active");
      });
      //identify which card we are clicking on by getting that specific id
      const selectedCard = document.getElementById(event.target.dataset.popupId);
      //add active class to target popup
      if(selectedCard) {
        selectedCard.classList.add("active");
      } else {
        console.error("No modal associated with this project")
      }
    }) 
 };
};

cardToggle()

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

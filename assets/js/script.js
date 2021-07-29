const themeSwitch = document.querySelector(".theme-switch");
const body = document.querySelector("body");
const homeScreen = document.querySelector(".home-section");
const homeHeader = document.querySelector(".header");
const aboutDesrip = document.querySelector(".about-descrip");
const aboutDesripText = document.querySelector(".about-descrip-text");

const hideEnter = document.querySelector(".hide");

// const cardContainer = document.querySelector(".cards-container");
const popup = document.querySelector(".popup");
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

//loop through cardLinks

//   for (var i = 0 ; i < cardLinks.length; i++) {
//     cardLinks[i].addEventListener('click' ,  function() {
//       popup.classList.toggle("cardActive");
//       // body.classList.toggle("blur");
//     }) 
//  };

function cardToggle() {
  //loop through the cardlinks
  for (var i = 0 ; i < cardLinks.length; i++) {
    //listen for any cardLink lick
    cardLinks[i].addEventListener('click' , function() {

      let projectOne = document.querySelector("#p1");
      let projectTwo = document.querySelector("#p2");
      let projectThree = document.querySelector("#p3");

      projectsArr = [projectOne, projectTwo, projectThree]

      // console.log(event.target);
      if(event.target === null) {
        return
      } else {
        projectsArr.forEach(project => {
          project.classList.toggle("active");
        });
      }
      // event.target.classList.toggle("cardActive")

      //have project info for specific card popup

      // projectsArr.forEach(project =>  {
      //   //this is just displaying each div
      //   console.log(project)
      // })
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

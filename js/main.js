const navExpander = document.getElementById(`navExpander`);
const sideNav = document.getElementById(`linksHolder`);
const underlay = document.getElementById(`navUnderlay`);
const ex = document.getElementById(`xMark`);
const nav = document.getElementById(`nav`);

const navLinks = Array.from(document.querySelectorAll(`#nav #linksHolder a`));

const heroHeading = document.querySelector(`#hero h1`);
const heroAboveHead = document.querySelector(`#hero .top-headlines`);
const heroText = document.querySelector(`#hero .section-text`);
const heroButton = document.querySelector(`#hero .discover-link`);

const aboutHeading = document.querySelector(`#about h2`);
const aboutAboveHead = document.querySelector(`#about .top-headlines`);
const aboutText = document.querySelector(`#about .section-text`);
const aboutButton = document.querySelector(`#about .discover-link`);
const textImage = document.querySelector(`#about .benifits .image-holder`);
const textLis = Array.from(document.querySelectorAll(`#about .benifits ul li`));
const aboutMainImage = document.getElementById(`aboutMainImage`);

const deployYear = document.getElementById(`deployYear`);

let date = new Date().getFullYear();
deployYear.appendChild(document.createTextNode(date));
deployYear.style.cssText = `transform: translateY(1px)`;

const servicesCardsOdd = Array.from(
  document.querySelectorAll(`#services .cards .card:nth-child(odd)`)
);
const servicesCardsEven = Array.from(
  document.querySelectorAll(`#services .cards .card:nth-child(even)`)
);

navExpander.addEventListener(`click`, () => {
  sideNav.style.cssText = `right:0`;
  underlay.style.cssText = `right:0`;
});
window.addEventListener(`click`, (e) => {
  if (e.target.classList.contains(`ex`)) {
    underlay.style.cssText = `right:-150%`;
    sideNav.style.cssText = `right:-150%`;
  }
});

function setAnimationOnScroll(target, scrollYV, animationIndex) {
  if (Array.isArray(target)) {
    if (scrollYV === 0) {
      window.addEventListener(`scroll`, () => {
        target.forEach((e) => {
          if (window.scrollY >= e.getBoundingClientRect().top - 600) {
            e.classList.add(`${arrayOfClasses[animationIndex]}`);
          } else {
            e.classList.remove(`${arrayOfClasses[animationIndex]}`);
          }
        });
      });
    } else {
      window.addEventListener(`scroll`, () => {
        target.forEach((e) => {
          if (window.scrollY >= scrollYV) {
            e.classList.add(`${arrayOfClasses[animationIndex]}`);
          } else {
            e.classList.remove(`${arrayOfClasses[animationIndex]}`);
          }
        });
      });
    }
  } else {
    if (scrollYV === 0) {
      window.addEventListener(`scroll`, () => {
        if (window.scrollY >= target.getBoundingClientRect().top - 600) {
          target.classList.add(`${arrayOfClasses[animationIndex]}`);
        } else {
          target.classList.remove(`${arrayOfClasses[animationIndex]}`);
        }
      });
    } else {
      window.addEventListener(`scroll`, () => {
        if (window.scrollY >= scrollYV) {
          target.classList.add(`${arrayOfClasses[animationIndex]}`);
        } else {
          target.classList.remove(`${arrayOfClasses[animationIndex]}`);
        }
      });
    }
  }
}

// ACTIVATE WHEN A LOADER IS ADDED AND REMOVE THE ONE BELOW
// LOADER SHOULD STOP AFTER 500 MS
// function setAnimationOnLoad(element, className) {
//   window.addEventListener(`load`, () => {
//     setInterval(() => {
//       element.classList.add(`${className}`);
//     }, 500);
//   });
// }
function setAnimationOnLoad(element, animationIndex) {
  window.addEventListener(`load`, () => {
    element.classList.add(`${arrayOfClasses[animationIndex]}`);
  });
}

let currentSection = "";
const sections = document.querySelectorAll(`section`);
window.addEventListener(`scroll`, () => {
  sections.forEach((section) => {
    let sectionTop = section.offsetTop - 50;
    if (scrollY >= sectionTop) {
      currentSection = section.getAttribute(`id`);
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove(`active`);
    if (link.classList.contains(currentSection)) {
      link.classList.add(`active`);
    }
  });
});

let arrayOfClasses = [
  `DONT SELECT THIS`, // 0
  `sticky-nav`, // 1
  `animation-up1_2`, // 2
  `animation-up1_4`, // 3
  `animation-up1_6`, // 4
  `animation-up1_8`, // 5
  `animation-right1_2`, // 6
  `animation-right1_4`, // 7
  `animation-right1_6`, // 8
  `animation-right1_8`, // 9
  `animation-left1_2`, // 10
  `animation-left1_4`, // 11
  `animation-left1_6`, // 12
  `animation-left1_8`, // 13
  `animation-down1_2`, // 14
  `animation-down1_4`, // 15
  `animation-down1_6`, // 16
  `animation-down1_8`, // 17
];
setAnimationOnLoad(heroButton, 5);
setAnimationOnLoad(heroText, 9);
setAnimationOnLoad(heroHeading, 8);
setAnimationOnLoad(heroAboveHead, 16);
setAnimationOnScroll(nav, 1, 1);
setAnimationOnScroll(aboutAboveHead, 0, 16);
setAnimationOnScroll(aboutHeading, 0, 12);
setAnimationOnScroll(aboutText, 0, 13);
setAnimationOnScroll(aboutButton, 0, 5);
setAnimationOnScroll(textImage, 0, 10);
setAnimationOnScroll(aboutMainImage, 0, 8);
setAnimationOnScroll(textLis[0], 0, 11);
setAnimationOnScroll(textLis[1], 0, 12);
setAnimationOnScroll(textLis[2], 0, 13);
setAnimationOnScroll(servicesCardsOdd, 900, 8);
setAnimationOnScroll(servicesCardsEven, 900, 12);

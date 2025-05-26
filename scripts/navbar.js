// click on the menu icon to display the navbar links 
document.querySelector('#js-menu-icon').addEventListener('click', ()=>{
  document.querySelector('#js-navbar').style.display = "block"
  document.querySelector('#js-navbar').style.animation = "fadeIn 0.5s"
  document.querySelector('#js-navbar').style.animationFillMode = "forwards"
  document.querySelector('#js-navbar').style.animationDelay = "0.5s"
  document.querySelector('#js-navbar').style.animationDuration = "0.5s"
  document.querySelector('#js-navbar').style.animationTimingFunction = "ease-in-out"
  document.querySelector('#js-navbar').style.animationName = "fadeIn"
  document.querySelector('#js-navbar').style.animationFillMode = "forwards"
  document.querySelector('#js-menu-icon').style.display = "none";
  document.querySelector('#js-cancel-icon').style.display = "block";
  document.querySelector('#js-cancel-icon').style.animation = "fadeIn 0.5s"
  document.querySelector('#js-cancel-icon').style.animationFillMode = "forwards"
  document.querySelector('#js-cancel-icon').style.animationDelay = "0.5s";

  if (window.scrollY > document.querySelector('.header').offsetHeight) {
    document.querySelector('.header').classList.add('header-scroll');
  } else if (window.scrollY < document.querySelector('.header').offsetHeight) {
    document.querySelector('.header').classList.add('navbar-active-bg');
  }
})

// click on the menu icon to remove the navbar links 
document.querySelector('#js-cancel-icon').addEventListener('click', ()=>{
  document.querySelector('#js-navbar').style.display = "none"
  document.querySelector('#js-navbar').style.animation = "fadeOut 0.5s"
  document.querySelector('#js-navbar').style.animationFillMode = "forwards"
  document.querySelector('#js-navbar').style.animationDelay = "0.5s"
  document.querySelector('#js-navbar').style.animationDuration = "0.5s"
  document.querySelector('#js-navbar').style.animationTimingFunction = "ease-in-out"
  document.querySelector('#js-navbar').style.animationName = "fadeOut"
  document.querySelector('#js-navbar').style.animationFillMode = "forwards"
  document.querySelector('#js-menu-icon').style.display = "block";
  document.querySelector('#js-cancel-icon').style.display = "none";
  document.querySelector('.header').classList.remove('navbar-active-bg');
  document.querySelector('.header').classList.remove('header-scroll');
  document.querySelector('.header').classList.remove('fixed');

})

document.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const navbar = document.querySelector('.header');
  const navbarHeight = navbar.offsetHeight;

  if (scrollPosition > navbarHeight) {
    navbar.classList.add('header-scroll');
    navbar.classList.add('fixed');
    navbar.style.animation = "fadeIn 0.5s"
    navbar.style.animationFillMode = "forwards"
    navbar.style.animationDelay = "0.5s";
    navbar.style.animationDuration = "0.5s";
    navbar.style.animationTimingFunction = "ease-in-out" ; 
    navbar.style.animationName = "fadeIn";
    navbar.style.animationFillMode = "forwards";
    const navbarMenu = document.querySelector('#js-menu-icon');
    if (navbarMenu && navbarMenu.style.display === "none" && scrollPosition > navbarHeight) {
      navbar.classList.add('header-scroll');
      navbar.classList.remove('navbar-active-bg');
    } else if (navbarMenu && navbarMenu.style.display === "block" && scrollPosition > navbarHeight) {
      navbar.classList.add('header-scroll');
      navbar.classList.remove('navbar-active-bg');
    }
  } else if (scrollPosition < navbarHeight) {
    const navbarMenu = document.querySelector('#js-menu-icon');
    if (navbarMenu && navbarMenu.style.display === "none") {
      navbar.classList.add('navbar-active-bg');
    } else if (navbarMenu && navbarMenu.style.display === "block") {
      navbar.classList.remove('navbar-active-bg');
    }
    navbar.classList.remove('header-scroll');
    navbar.classList.remove('fixed');
  }
  else {
    navbar.classList.remove('navbar-active-bg');
    navbar.classList.remove('header-scroll');
    navbar.classList.remove('fixed');
  }

});

// for a smooth navigation scroll 
// document.querySelector('#product-link').    addEventListener('click', (e) =>{
//   e.preventDefault();

//   document.querySelector('#products').scrollIntoView({
//     behaviour: ''
//   })
// });
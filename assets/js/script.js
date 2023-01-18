// * BUTTON NAV ANIMATION
const menuBtn = document.querySelector('.ap-menu-btn');
const menuNavbar = document.querySelector('.ap-menu-navbar');
const menuBackdrop = document.querySelector('.ap-menu-backdrop');
const menuContent  = document.querySelector('.ap-menu-content');

let menuOpen = false;
menuBtn.addEventListener('click', () => {

   if(!menuOpen) {

      menuBtn.classList.add('open');
      menuBackdrop.classList.add('ap-menu-active');
      menuContent.classList.add('ap-menu-active');
      menuNavbar.classList.add('open');
      menuOpen = true;

   } else {

      menuBtn.classList.remove('open');
      menuBackdrop.classList.remove('ap-menu-active');
      menuContent.classList.remove('ap-menu-active');
      menuNavbar.classList.remove('open');
      menuOpen = false;

   }

});
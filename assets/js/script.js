// * BUTTON NAV ANIMATION
const spanBtn = document.querySelector('.ap-span-btn');
const menuBtn = document.querySelector('.ap-menu-btn');
const menuBackdrop = document.querySelector('.ap-menu-backdrop');
const menuContent  = document.querySelector('.ap-menu-content');

let menuOpen = false;
menuBtn.addEventListener('click', () => {

   if(!menuOpen) {

      menuBtn.classList.add('open');
      menuBackdrop.classList.add('ap-menu-active');
      menuContent.classList.add('ap-menu-active');
      menuOpen = true;

   } else {

      menuBtn.classList.remove('open');
      menuBackdrop.classList.remove('ap-menu-active');
      menuContent.classList.remove('ap-menu-active');
      menuOpen = false;

   }

});

spanBtn.addEventListener('click', () => {

   if(!menuOpen) {

      menuBtn.classList.add('open');
      menuBackdrop.classList.add('ap-menu-active');
      menuContent.classList.add('ap-menu-active');
      menuOpen = true;

   } else {

      menuBtn.classList.remove('open');
      menuBackdrop.classList.remove('ap-menu-active');
      menuContent.classList.remove('ap-menu-active');
      menuOpen = false;

   }

});
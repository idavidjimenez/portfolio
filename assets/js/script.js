document.addEventListener('DOMContentLoaded', () => {

   // * Button nav navigation
   const menuBtn      = document.querySelector('.dj-menu-btn');
   const menuNavbar   = document.querySelector('.dj-menu-navbar');
   const menuBackdrop = document.querySelector('.dj-menu-backdrop');
   const menuContent  = document.querySelector('.dj-menu-content');

   let menuOpen = false;
   menuBtn.addEventListener('click', () => {

      if(!menuOpen) {

         menuBtn.classList.add('open');
         menuBackdrop.classList.add('dj-menu-active');
         menuContent.classList.add('dj-menu-active');
         menuNavbar.classList.add('open');
         menuOpen = true;

      } else {

         menuBtn.classList.remove('open');
         menuBackdrop.classList.remove('dj-menu-active');
         menuContent.classList.remove('dj-menu-active');
         menuNavbar.classList.remove('open');
         menuOpen = false;

      }

   });
   menuBackdrop.addEventListener('click', () => {

      menuBtn.classList.remove('open');
      menuBackdrop.classList.remove('dj-menu-active');
      menuContent.classList.remove('dj-menu-active');
      menuNavbar.classList.remove('open');
      menuOpen = false;

   });

   // * Preloader
   const preloader = document.querySelector('#dj-preloader');
   if (preloader) {

      window.addEventListener('load', () => {

         preloader.remove();

      });

   }

   // * Animation on scroll function and init
   function aos_init() {

      AOS.init({

         duration: 1000,
         easing: 'ease-in-out',
         once: true,
         mirror: false

      });

   }
   window.addEventListener('load', () => {

      aos_init();
      
   });

});
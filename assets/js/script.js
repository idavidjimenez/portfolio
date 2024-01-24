document.addEventListener('DOMContentLoaded', () => {

   // * HScroll
   var width = window.innerWidth;
   if(width >= 1079) { var s = skrollr.init(); }

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

   // * Full width on scroll
   const selectStart = document.querySelector('#dj-start');
   const selectIntro = document.querySelector('#dj-intro');

   if (selectStart) {

      document.addEventListener('scroll', () => {

         if(window.scrollY > 50) {

            selectStart.classList.add('start-scrolled')
            selectIntro.classList.add('intro-scrolled')

         } else {

            selectStart.classList.remove('start-scrolled');
            selectIntro.classList.remove('intro-scrolled');

         }

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
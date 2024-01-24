document.addEventListener('DOMContentLoaded', () => {

   // * HScroll
   var width = window.innerWidth;
   if(width >= 1079) { var s = skrollr.init(); }

   // * Button nav navigation
   const menuBtn      = document.querySelector('.dj-menu-btn');
   const menuNavbar   = document.querySelector('.dj-menu-navbar');
   const menuBackdrop = document.querySelector('.dj-menu-backdrop');
   const menuContent  = document.querySelector('.dj-menu-content');
   const menuIcon     = document.querySelector('.dj-icon');

   let menuOpen = false;
   menuBtn.addEventListener('click', () => {

      if(!menuOpen) {

         menuBtn.classList.add('open');
         menuBackdrop.classList.add('dj-menu-active');
         menuContent.classList.add('dj-menu-active');
         menuNavbar.classList.add('open');
         menuIcon.classList.add('d-none');
         menuOpen = true;

      } else {

         menuBtn.classList.remove('open');
         menuBackdrop.classList.remove('dj-menu-active');
         menuContent.classList.remove('dj-menu-active');
         menuNavbar.classList.remove('open');
         menuIcon.classList.remove('d-none');
         menuOpen = false;

      }

   });

   // * Preloader
   const preloader = document.querySelector('#dj-preloader');
   if (preloader) {

      window.addEventListener('load', () => {

         preloader.remove();

      });

   }

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

   /* Barba Init
   barba.init({
      
      transitions: [{

         name: 'opacity-transition',
         leave(data) {

            return gsap.to(data.current.container, {

               opacity: 0

            });

         },
         enter(data) {

            return gsap.from(data.next.container, {

               opacity: 0

            });

         }

      }]

   });*/

});

/* function delay(n) {
   n = n || 2000;
   return new Promise((done) => {
      setTimeout(() => {
         done();
      }, n);
   });
}

function pageTransition() {
   var tl = gsap.timeline();
   tl.to(".loading-screen", {
      duration: 1.2,
      width: "100%",
      left: "0%",
      ease: "Expo.easeInOut",
   });

   tl.to(".loading-screen", {
      duration: 1,
      width: "100%",
      left: "100%",
      ease: "Expo.easeInOut",
      delay: 0.3,
   });
   tl.set(".loading-screen", { left: "-100%" });
}

$(function () {
   barba.init({
       sync: true,

       transitions: [
         {
            async leave(data) {
               const done = this.async();

               pageTransition();
               await delay(1000);
               done();
            },
         },
      ],
   });
}); */
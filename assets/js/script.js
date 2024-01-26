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

         if(window.scrollY > 100) {

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

   // Ajustar la posición del modal al cargar la página para ocultarlo inicialmente
   $(document).ready(function(){
      $('.dj-modal .modal-dialog').css({
         'transform': 'translateY(100%)',
         'transition': 'transform 0s' // Evita la animación inicial
      });
   });

   // Mostrar el modal desde abajo cuando se abre
   $('#modalProject').on('shown.bs.modal', function () {
      $(this).find('.modal-dialog').css({
         'transform': 'translateY(0)',
         'transition': 'transform 0.5s ease'
      });
   });

   // Ocultar el modal hacia abajo cuando se cierra
   $('#modalProject').on('hidden.bs.modal', function () {
      $(this).find('.modal-dialog').css({
         'transform': 'translateY(100%)',
         'transition': 'transform 0.1s ease'
      });
   });

});
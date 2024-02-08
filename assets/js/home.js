document.addEventListener('DOMContentLoaded', () => {

   var width = window.innerWidth;
   if(width >= 1181) { var s = skrollr.init(); }

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

   // * Adjust the position of the modal on page load to hide the modal initially
   $(document).ready(function() {

      $('.dj-modal .modal-dialog').css({

         'transform': 'translateY(100%)',
         'transition': 'transform 0s' // * Avoid initial animation

      });

   });

   // * Show the modal from below when opened
   $('.dj-modal').on('shown.bs.modal', function () {

      $(this).find('.modal-dialog').css({

         'transform': 'translateY(0)',
         'transition': 'transform 0.5s ease'

      });

   });

   // * Hide modal down when closed
   $('.dj-modal').on('hidden.bs.modal', function () {

      $(this).find('.modal-dialog').css({

         'transform': 'translateY(100%)',
         'transition': 'transform 0.1s ease'

      });

   });

});
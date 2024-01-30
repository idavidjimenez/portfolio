document.addEventListener('DOMContentLoaded', function() {

   // * Obtener todos los elementos con la clase 'dj-selector-tab'
   const selectorTabs = document.querySelectorAll('.dj-selector-tab');

   // * Iterar sobre cada elemento y agregar un event listener
   selectorTabs.forEach((tab, index) => {

      tab.addEventListener('click', () => {

         // * Remover la clase 'active' de todos los elementos 'dj-selector-tab'
         selectorTabs.forEach(tab => {

            tab.classList.remove('active');

         });

         // * Agregar la clase 'active' al elemento actual
         tab.classList.add('active');

         // * Remover la clase 'active' de todos los elementos 'dj-content-tabs-item'
         const contentItems = document.querySelectorAll('.dj-content-tabs-item');
         contentItems.forEach(item => {

            item.classList.remove('active');
         
         });

         // * Agregar la clase 'active' al elemento correspondiente al índice actual
         const contentToShow = document.querySelectorAll('.dj-content-tabs-item')[index];
         contentToShow.classList.add('active');

      });

   });

});
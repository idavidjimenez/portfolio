document.addEventListener('DOMContentLoaded', function() {

   const selectorTabs = document.querySelectorAll('.dj-selector-tab');

   // * Function to change the active tab
   function changeActiveTab(index) {
      
      // * Remove 'active' class from all 'dj-selector-tab' elements
      selectorTabs.forEach(tab => { tab.classList.remove('active'); });

      // * Add the class 'active' to the current element
      selectorTabs[index].classList.add('active');

      // * Remove the 'active' class from all 'dj-content-tabs-item' elements.
      const contentItems = document.querySelectorAll('.dj-content-tabs-item');
      contentItems.forEach(item => { item.classList.remove('active'); });

      // * Add the class 'active' to the element corresponding to the current index
      const contentToShow = document.querySelectorAll('.dj-content-tabs-item')[index];
      contentToShow.classList.add('active');

   }

   // *Event listener for tabs
   selectorTabs.forEach((tab, index) => {

      tab.addEventListener('click', () => {

         // * Clicking on a tab saves the index to localStorage
         localStorage.setItem('activeTabIndex', index);
         changeActiveTab(index);

      });

   });

   // * On page load, check if there is an active index on localStorage
   const activeTabIndex = localStorage.getItem('activeTabIndex');
   if (activeTabIndex !== null) { changeActiveTab(parseInt(activeTabIndex)); }

});
// variables
var accordionBtn = document.querySelectorAll('.accordionTitle');
var allTexts = document.querySelectorAll('.text');
var accIcon = document.querySelectorAll('.accIcon');

// event listener
accordionBtn.forEach(function (el) {
    el.addEventListener('click', toggleAccordion)
});

window.onload = function toggleAccordion(el) {
   var targetList = el.currentTarget.nextElementSibling.classList;
   var targetAccIcon = el.currentTarget.children[0];
   var target = el.currentTarget;
   
   if (targetList.contains('show')) {
       targetList.remove('show');
       targetAccIcon.classList.remove('anime');
       target.classList.remove('accordionTitleActive');
   } 
   else {
      accordionBtn.forEach(function (el) {
         el.classList.remove('accordionTitleActive');
         
         allTexts.forEach(function (el) {
            el.classList.remove('show');
         })
         
         accIcon.forEach(function (el) {
          el.classList.remove('anime');
         }) 
         
      })
      
      targetList.add('show');
      target.classList.add('accordionTitleActive');
      targetAccIcon.classList.add('anime');
   }  
}

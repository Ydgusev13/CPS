var showAll = document.querySelector('.show-all ');
var minimize = document.querySelector('.minimize');
var brandsListItems = document.querySelectorAll('.brands__list-item');

showAll.addEventListener('click', function () {
  showAll.classList.add('show-all--hidden');
  minimize.classList.remove('minimize--hidden');
  for (var i = 5; i < brandsListItems.length; i++) {
    brandsListItems[i].classList.remove('brands__list-item--hidden');
  }
});

minimize.addEventListener('click', function () {
  showAll.classList.remove('show-all--hidden');
  minimize.classList.add('minimize--hidden');
  for (var i = 6; i < brandsListItems.length; i++) {
    brandsListItems[i].classList.add('brands__list-item--hidden');
  }  
});
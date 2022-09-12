// closed and opened navigation menu
const toggle = document.querySelector('.main-navigation__toggle');
const mainNav = document.querySelector('.main-navigation');

mainNav.classList.remove('main-navigation--nojs');

toggle.addEventListener('click', ()=> {
  mainNav.classList.toggle('main-navigation--opened');
  mainNav.classList.toggle('main-navigation--closed');
})

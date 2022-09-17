const menu = document.querySelector('.menu');
const menuOption = document.querySelector('.menu-opt');
const closeMenu = document.getElementById('exit');
const menuItems = document.querySelector('.menu_list');

function show() {
  menuOption.classList.toggle('open');
  menu.style.visibility = 'hidden';
}

function close() {
  menuOption.style.display = 'none';
  menuOption.classList.remove('open');
  menu.style.visibility = 'visible';
}

menu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
menuItems.addEventListener('click', close);

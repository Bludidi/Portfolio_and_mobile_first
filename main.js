const menu = document.querySelector('.menu');
const menuOption = document.querySelector('.menu_opt');
const closeMenu = document.getElementById('exit');
const menuItems = document.querySelector('.menu_list');

function show() {
  menuOption.style.display = 'block';
  menuOption.classList.toggle('open');
  menu.style.visibility = 'hidden';
  // closeMenu.style.visibility ='visible';
}

function close() {
  menuOption.style.display = 'none';
  menuOption.classList.remove('open');
  menu.style.visibility = 'visible';
  // closeMenu.style.visibility ='hidden';
}

menu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
menuItems.addEventListener('click', close); 

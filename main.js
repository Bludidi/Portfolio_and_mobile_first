const menu = document.querySelector('.menu');
const menuOption = document.querySelector('.menu_opt');
const closeMenu = document.getElementById('exit');
const menuItems = document.querySelector('.menu_list');

// menu.addEventListener('click', () => {
//   // menuOption.classList.remove('show');
//   menuOption.style.display = 'block';
//   menuOption.style.height = '100vh';
//   menu.style.visibility = 'hidden';
//   // closeMenu.style.visibility = 'visible';
// });

// menuOption.addEventListener('click', () => {
//   closeMenu.style.visibility = 'hidden';
//   menuOption.style.display = 'none';
//   menuOption.style.height = '0';
//   menu.style.visibility = 'visible';
// });


// closeMenu.addEventListener('click', () => {
//   // menuOption.classList.toggle('show');
//   menuOption.style.height = '0';
//   menu.style.visibility = 'visible';
//   closeMenu.style.visibility = 'hidden';
// });
function show() {
  menuOption.style.display = 'block';
  menuOption.classList.toggle('open');
  menu.style.visibility = 'hidden';
  // closeMenu.style.visibility ='visible';
};

function close() {
  menuOption.style.display = 'none';
  menuOption.classList.remove('open');
  menu.style.visibility = 'visible';
  // closeMenu.style.visibility ='hidden';
};

menu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
menuItems.addEventListener('click', close); 




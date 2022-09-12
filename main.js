const menu = document.querySelector('.menu');
const menuOption = document.querySelector('.menu_opt');
const closeMenu = document.querySelector('.close_menu');

menu.addEventListener('click', ()=>{
menuOption.classList.remove['open'];
menuOption.style.display='block'; 
menuOption.style.height='100vh'; 
menu.style.visibility='hidden';
closeMenu.style.visibility='visible';
});


const menu = document.querySelector('.menu');
const menuOption = document.querySelector('.menu_opt');
const closeMenu = document.querySelector('.close_menu');

menu.addEventListener('click', () => {
menuOption.classList.remove['open'];
menuOption.style.display='block'; 
menuOption.style.height='100vh'; 
menu.style.visibility='hidden';
closeMenu.style.visibility='visible';
});

closeMenu.addEventListener('click', ()=>{
    menuOption.classList.toggle['open'];
    menuOption.style.height='0';
    menu.style.visibility='visible';
    closeMenu.style.visibility='hidden';
});

menuOption.addEventListener('click', () => {
    closeMenu.style.visibility='hidden';
    menuOption.style.display='none';
    menuOption.style.height='0';
    menu.style.visibility='visible';
});
    

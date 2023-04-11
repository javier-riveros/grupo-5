document.addEventListener("DOMContentLoaded", loadListeners);

window.addEventListener('resize', () => {
  if(window.innerWidth < 576) {
    closeMenu();
  };
});

function loadListeners() {
  document.querySelector('#responsive-menu-button').addEventListener('click', openMenu);
  document.querySelector('#close-menu-button').addEventListener('click', closeMenu);
};


//FUNCIONES

const openMenu = () => {
  const menuContainer = document.querySelector('#menu-container');
  menuContainer.style.right = '0';
};


const closeMenu = () => {
  const menuContainer = document.querySelector('#menu-container');
  menuContainer.style.right = '-71%';
};
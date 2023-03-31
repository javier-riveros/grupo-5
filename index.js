const openMenu = () => {
  const menuButton = document.querySelector('#menu-container');
  menuButton.style.display = 'block';
};


const closeMenu = () => {
  const menuButton = document.querySelector('#menu-container');
  menuButton.style.display = 'none';
}


window.addEventListener('resize', () => {
  if(window.innerWidth >= 576) {
    openMenu();
  }else {
    closeMenu();
  }
});

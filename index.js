const openMenu = () => {
  const menuButton = document.querySelector('#menu-container');
  menuButton.style.right = '0';
};


const closeMenu = () => {
  const menuButton = document.querySelector('#menu-container');
  menuButton.style.right = '-71%';
}


window.addEventListener('resize', () => {
  if(window.innerWidth >= 576) {
    openMenu();
  }else {
    closeMenu();
  }
});

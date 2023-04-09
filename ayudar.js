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

//formulario

const d100=()=>{
  let d1=100;
  document.getElementById("voluntad").value=d1;
}
const d500=()=>{
  let d1=500;
  document.getElementById("voluntad").value=d1;
}
const d1000=()=>{
  let d1=1000;
  document.getElementById("voluntad").value=d1;
}
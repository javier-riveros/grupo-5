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

dragElement(document.getElementById("cajon0"));
function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "caja0")) {
    document.getElementById(elmnt.id + "caja0").onmousedown = dragMouseDown; //onmousedown esta precionado el boton del mouse
  } else {
    elmnt.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    //obtengo lascordenadas del mouse
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;//contraintuitivo
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = elmnt.offsetTop - pos2 + "px"; //offsettop me da la distancia real y le pongo el px
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
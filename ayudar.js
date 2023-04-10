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

//toas

const toastTrigger = document.getElementById('contribuir')
const toastLiveExample = document.getElementById('aca__esta')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {    
    agregar();
    toastBootstrap.show()
  })
}
const agregar=()=>{
  let nombre;
  nombre=document.getElementById("voluntad").value;
  document.getElementById("toas__dato").innerText="Muchas gracias, en breve nos comunicaremos con usted en caso de ganar el concurso para poner de nombre: "+`${nombre}`+" a su adopcion virtual";
}
//formulario

const modal__imagen = document.getElementById('modal__imagen')
if (modal__imagen) {
  modal__imagen.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = modal__imagen.querySelector('.modal-title')
    const modalBodyInput = modal__imagen.querySelector('.modal-body input')

    modalTitle.textContent = `Ponle un nombre al ${recipient}`
    modalBodyInput.value = recipient
  })
}

const modal__descripcion = document.getElementById('modal__descripcion')
if (modal__descripcion) {
  modal__descripcion.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = modal__descripcion.querySelector('.modal-title')
    const modalBodyInput = modal__descripcion.querySelector('.modal-body input')

    modalTitle.textContent = `Ponle un nombre al ${recipient}`
    modalBodyInput.value = recipient
  })
}

const modal__Abitad = document.getElementById('modal__Abitad')
if (modal__Abitad) {
  modal__Abitad.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = modal__Abitad.querySelector('.modal-title')
    const modalBodyInput = modal__Abitad.querySelector('.modal-body input')

    modalTitle.textContent = `Ponle un nombre al ${recipient}`
    modalBodyInput.value = recipient
  })
}
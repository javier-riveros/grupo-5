document.addEventListener("DOMContentLoaded", loadListeners);

window.addEventListener('resize', () => {
  if(window.innerWidth < 992) {
    closeMenu();
  };
});


function loadListeners() {
  document.querySelector('#responsive-menu-button').addEventListener('click', openMenu);
  document.querySelector('#close-menu-button').addEventListener('click', closeMenu);
  document.querySelector('#contacto-form')?.addEventListener('submit', submitContacto);
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


const submitContacto = (e) => {
  e.preventDefault();

  //LIMPIO ERRORES
  document.querySelectorAll('.input-error').forEach(node => {
    node.classList.remove('input-error');
    document.querySelector(`#error-${node.id}`).innerText = '';
  });

  const nombre = document.querySelector('#nombre');
  const apellido = document.querySelector('#apellido');
  const email = document.querySelector('#email');
  const comentario = document.querySelector('#comentario');
  const letrasReg = /^[A-Za-z]+$/;
  const emailReg =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const message = 'Completa con datos válidos';
  let errors = 0;

  if(!letrasReg.test(nombre.value)) {
    errors++;
    document.querySelector(`#${nombre.id}`).classList.add('input-error');
    document.querySelector(`#error-${nombre.id}`).innerText = message;
  };

  if(!letrasReg.test(apellido.value)) {
    errors++;
    document.querySelector(`#${apellido.id}`).classList.add('input-error');
    document.querySelector(`#error-${apellido.id}`).innerText = message;
  };

  if(!emailReg.test(email.value)) {
    errors++;
    document.querySelector(`#${email.id}`).classList.add('input-error');
    document.querySelector(`#error-${email.id}`).innerText = message;
  };

  if(!letrasReg.test(comentario.value)) {
    errors++;
    document.querySelector(`#${comentario.id}`).classList.add('input-error');
    document.querySelector(`#error-${comentario.id}`).innerText = message;
  };

  if(errors === 0) {
    console.log('Formulario enviado con exito!!');
  }

}
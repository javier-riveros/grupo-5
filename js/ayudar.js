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
var a=0;
const toastTrigger = document.getElementById('contribuir')
const toastLiveExample = document.getElementById('aca__esta')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {    
    agregar();
      setTimeout(() => { 
      if(a==0){
      toastBootstrap.show()
      document.getElementById("super").reset();
      }
  }, 500);
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

function validacion(){
  let nombre;
  let apellido;
  let codigo;
  let telefono;
  let email;
  let voluntad;
  let patron=[];
  let respuesta=[];
  a=0;
  nombre=document.getElementById("nombre").value;
  nombre=nombre.toString();
  patron[0]=/^[a-zA-Z ]{4,25}$/;
  respuesta[0]=patron[0].test(nombre);
  apellido=document.getElementById("apellido").value;
  apellido=apellido.toString();
  patron[1]=/^[a-zA-Z ]{4,25}$/;
  respuesta[1]=patron[1].test(apellido);
  codigo=document.getElementById("codigo").value;
  codigo=codigo.toString();
  patron[2]=/^((\(([0-9]{2,3})\))?(([0-9]{2,3}))?)([- ]){1}([0-9]{4})([- ]){1}([0-9]{4})$/;
  respuesta[2]=patron[2].test(codigo);
  telefono=document.getElementById("telefono").value;
  telefono=telefono.toString();
  patron[3]=/^((\(([0-9]{3,4})\))?(([0-9]{3,4}))?)([- ]){1}([0-9]{3})([- ]){1}([0-9]{4})$/;
  respuesta[3]=patron[3].test(telefono);
  email=document.getElementById("email").value;
  email=email.toString();
  patron[4]=/^([\da-zA-Z_-]{4,20})@([\da-z-]){4,10}\.([a-z]{2,6})(\.([a-z]{2,6}))?$/;
  respuesta[4]=patron[4].test(email);
  voluntad=document.getElementById("voluntad").value;
  voluntad=voluntad.toString();
  patron[5]=/^[a-zA-Z ]{4,25}$/;
  respuesta[5]=patron[5].test(voluntad);
  if(!respuesta[0]){
    a=-1;
    alert("El nombre esta mal ingresado, solo puede contener letras o espacio si hay mas de uno");
    document.getElementById("nombre").style.borderColor="#d34434"; 
  }
  else
    document.getElementById("nombre").style.borderColor="#181818";
  if(!respuesta[1]){    
    alert("El apellido esta mal ingresado, solo puede contener letras o espacio si hay mas de uno");
    document.getElementById("apellido").style.borderColor="#d34434";
  }
  else
    document.getElementById("apellido").style.borderColor="#181818";
  if(!respuesta[2]){
    a=-1;  
  alert("Celular incorrecto debe tener el formato (xxx)-xxxx-xxxx o xxx xxxx xxxx");
  document.getElementById("codigo").style.borderColor="#d34434";
  }
  else
    document.getElementById("codigo").style.borderColor="#181818";
  if(!respuesta[3]){
    a=-1;  
    alert("Telefono incorrecto debe tener el formato (xxxx)-xxx-xxxx o xxxx xxx xxxx");
    document.getElementById("telefono").style.borderColor="#d34434";
  }
  else
    document.getElementById("telefono").style.borderColor="#181818";
  if(!respuesta[4]){
    a=-1; 
    alert("Correo incorrecto debe tener el formato xx_-+@xxx_+.xx(.xx)");
    document.getElementById("email").style.borderColor="#d34434";
  }
  else
    document.getElementById("email").style.borderColor="#181818";
  if(!respuesta[5]){
    a=-1;  
  alert("El nobre propuesto esta mal ingresado, solo puede contener letras con un minimo de cuatro");
  document.getElementById("voluntad").style.borderColor="#d34434";
  }
  else
    document.getElementById("voluntad").style.borderColor="#181818";
  }
document.addEventListener("DOMContentLoaded", loadListeners);

window.addEventListener('resize', () => {
  if(window.innerWidth < 576) {
    closeMenu();
  };
});

//VARIABLES
let formStepsNum = 0;
let cuitNumber = '';
let cardNumber = '';
let cardExpiration = '';
const cardNumberInput = document.querySelector('#card-number');
const cardExpirationInput = document.querySelector('#card-expiration');
const cuitNumberInput = document.querySelector('#cuit-number');


function loadListeners() {
  document.querySelector('#responsive-menu-button').addEventListener('click', openMenu);
  document.querySelector('#close-menu-button').addEventListener('click', closeMenu);
  document.querySelectorAll('.btn-next').forEach((btn, index) => btn.addEventListener('click', () => { 
    formStepsNum++; 
    updateFormSteps(); 
    updateProgressBar();
    cargarResumen(index);
  }));
  document.querySelectorAll('.btn-prev').forEach(btn => btn.addEventListener('click', () => { 
    formStepsNum--; 
    updateFormSteps(); 
    updateProgressBar();
  }));

  cardNumberInput.addEventListener('input', formatCardNumber);
  cardExpirationInput.addEventListener('input', formatCardExpiration);
  cuitNumberInput.addEventListener('input', formatCuitNumber);
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


const updateFormSteps = () => {
  const formSteps = document.querySelectorAll('.form-step');

  formSteps.forEach(formStep => {
    formStep.classList.contains('form-step-active') && formStep.classList.remove('form-step-active');
  });

  formSteps[formStepsNum].classList.add('form-step-active');
};


const updateProgressBar = () => {
  const progressSteps = document.querySelectorAll('.progress-step');

  progressSteps.forEach((progressStep, index) => {
    if(index <= formStepsNum) {
      progressStep.classList.add('progress-step-active');
    }else {
      progressStep.classList.remove('progress-step-active');
    };
  });
  
  document.querySelector('#progress').style.width = `${((formStepsNum / (progressSteps.length - 1)) * 100)}%`; 
};


const formatCardNumber = (e) => {
  const value = e.target.value.replace(/-/g, '');

  if(value !== cardNumber) {
    cardNumber = value;
    const separation = cardNumber.match(/.{1,4}/g);
    if(separation) {
      const newValue = separation.join('-');
      cardNumberInput.value = newValue;
    };  
  };
};

const formatCardExpiration = (e) => {
  const value = e.target.value.replace(/\//g, '');

  if(value !== cardExpiration) {
    cardExpiration = value;
    const separation = cardExpiration.match(/.{1,2}/g);
    if(separation) {
      const newValue = separation.join('/');
      cardExpirationInput.value = newValue;
    };
  };
};

const formatCuitNumber = (e) => {
  const value = e.target.value.replace(/-/g, '');

  if(value !== cuitNumber) {
    cuitNumber = value;
    const arrayNumbers = cuitNumber.split('');

    let newValue = '';
   
    arrayNumbers.forEach((number, index) => {
      if(index === 2) {
        newValue += `-${number}`;
      }if(index === 10) {
        newValue += `-${number}`;
      }else {
        newValue += `${number}`;
      }
    });

    cuitNumberInput.value = newValue;
  };
};

const cargarResumen = (index) => {
  if(index === 2) {
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const valor = document.querySelector('#valor').value;
    const tipo = document.querySelector('#tipo').value;
    const causa = document.querySelector('#causa').value;
    const tarjeta = document.querySelector('#tarjeta').value;
    const resumenContainer = document.querySelector('#resumen');
    const textoTipo = `${tipo === 'unica'? 'por única vez' : tipo === 'mensual'? 'mensuales' : 'anuales'}`
    const textoCausa = `${causa === 'animales'? 'Salvar animales' : causa === 'risiduos'? 'Reducción de residuos' : 'Combatir la contaminación'}`;
    const textoTarjeta = `${tarjeta === 'mastercard'? 'Mastercard' : tarjeta === 'visa'? 'Visa' : 'American Express'}`;

    const template = `<p><b>Nombre completo:</b> ${nombre} ${apellido}</p>
                      <p><b>Donación:</b> $${valor} ${textoTipo}</p>
                      <p><b>Causa:</b> ${textoCausa}</p>
                      <p><b>Medio de pago:</b> Tarjeta de crédito ${textoTarjeta}</p>`;

                      
    resumenContainer.innerHTML = template;
  };
};
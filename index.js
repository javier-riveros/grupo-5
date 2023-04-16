document.addEventListener("DOMContentLoaded", loadListeners);

window.addEventListener('resize', () => {
  if(window.innerWidth < 576) {
    closeMenu();
  };
});

//VARIABLES
let formStepsNum = 0;


function loadListeners() {
  document.querySelector('#responsive-menu-button').addEventListener('click', openMenu);
  document.querySelector('#close-menu-button').addEventListener('click', closeMenu);
  document.querySelectorAll('.btn-next').forEach((btn, index) => btn.addEventListener('click', () => { 
    handleNextButton(index);
  }));
  document.querySelectorAll('.btn-prev').forEach(btn => btn.addEventListener('click', () => { 
    formStepsNum--; 
    updateFormSteps(); 
    updateProgressBar();
  }));

  document.querySelector('#cardNumber')?.addEventListener('input', formatCardNumber);
  document.querySelector('#expiration')?.addEventListener('input', formatCardExpiration);
  document.querySelector('#cuit')?.addEventListener('input', formatCuitNumber);
  //document.querySelector('#donation-form')?.addEventListener('submit', submitDonation);
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

  let newValue = '';

  for (let i = 0; i < value.length; i++) {
    if(i === 4 || i === 8 || i === 12) {
      newValue += '-';
    };

    newValue += value[i];
  };

  const cardNumberInput = document.querySelector('#cardNumber');
  cardNumberInput.value = newValue;
};


const formatCardExpiration = (e) => {
  const value = e.target.value.replace(/\//g, '');

  let newValue = '';

  for (let i = 0; i < value.length; i++) {
    if(i === 2) {
      newValue += '/';
    };

    newValue += value[i];
  };

  const cardExpirationInput = document.querySelector('#expiration');
  cardExpirationInput.value = newValue;
};


const formatCuitNumber = (e) => {
  const value = e.target.value.replace(/-/g, '');

  let newValue = '';

  for (let i = 0; i < value.length; i++) {
    if(i === 2 || i === 10) {
      newValue += '-';
    };

    newValue += value[i];
  };

  const cuitNumberInput = document.querySelector('#cuit');

  cuitNumberInput.value = newValue;
};


const handleNextButton = (index) => {

  if(index === 0) {
    const validat = new FormValidator('donation-form', [{ 
      name: 'nombre',    
      display: 'Nombre', 
      rules: 'required|alpha'       
    }, {
      name: 'apellido',
      display: 'Apellido',
      rules: 'required|alpha'
    }, {
      name: 'cuit',
      display: 'CUIT',
      rules: 'required|exact_length[13]|alpha_dash'
    }, {
      name: 'email',
      display: 'Email',
      rules: 'required|valid_email'
    }], function(errors, event) {
      event.preventDefault();

      document.querySelectorAll('.input-error').forEach(node => {
        node.classList.remove('input-error');
        document.querySelector(`#error-${node.id}`).innerText = '';
      });
      
      if (errors.length> 0) {
        errors.forEach(err => {
          document.querySelector(`#error-${err.id}`).innerText = `${err.messages[0]}`;
          document.querySelector(`#${err.id}`).classList.add('input-error');
        });

      }else {
        formStepsNum++; 
        updateFormSteps(); 
        updateProgressBar();  
      };
    });

    validat.setMessage('required', 'Completa el campo');
    validat.setMessage('alpha', 'Ingresa solo caracteres alfabéticos');
    validat.setMessage('exact_length', 'Ingresa un CUIT válido');
    validat.setMessage('alpha_dash', 'Ingresa un CUIT válido');
    validat.setMessage('valid_email', 'Ingresa un e-mail válido');
  };

  if(index === 1) {
    document.querySelectorAll('.input-error').forEach(node => {
      node.classList.remove('input-error');
      document.querySelector(`#error-${node.id}`).innerText = '';
    });

    const causa = document.querySelector('#causa');
    const tipo = document.querySelector('#tipo');
    const monto = document.querySelector('#monto');
    const message = 'Debes seleccionar una opción';

    if(!causa.value) {
      document.querySelector(`#${causa.id}`).classList.add('input-error');
      document.querySelector(`#error-${causa.id}`).innerText = message;
    };

    if(!tipo.value) {
      document.querySelector(`#${tipo.id}`).classList.add('input-error');
      document.querySelector(`#error-${tipo.id}`).innerText = message;
    };

    if(!monto.value) {
      document.querySelector(`#${monto.id}`).classList.add('input-error');
      document.querySelector(`#error-${monto.id}`).innerText = message;
    };

    if(causa.value !== '' && tipo.value !== '' && monto.value !== '') {
      formStepsNum++; 
      updateFormSteps(); 
      updateProgressBar();  
    };

  };


  if(index === 2) {
    const validat = new FormValidator('donation-form', [{ 
      name: 'cardNumber',                                             
      display: 'Numero de Tarjeta',                                  
      rules: 'required|valid_credit_card|exact_length[19]'                           
    }, {
      name: 'cardholder',
      display: 'Nombre del titular',
      rules: 'required'
    }, {
      name: 'expiration',
      display: 'Vencimiento',
      rules: 'required|exact_length[5]'
    }, {
      name: 'ccv',
      display: 'CCV',
      rules: 'required|numeric|exact_length[3]'
    }], function(errors, event) {
      event.preventDefault();

      document.querySelectorAll('.input-error').forEach(node => {
        node.classList.remove('input-error');
        document.querySelector(`#error-${node.id}`).innerText = '';
      });

      const card = document.querySelector('#card');

      if(!card.value) {
        document.querySelector(`#${card.id}`).classList.add('input-error');
        document.querySelector(`#error-${card.id}`).innerText = 'Debes seleccionar una opción';
      };
      
      if (errors.length> 0) {
        errors.forEach(err => {
          document.querySelector(`#error-${err.id}`).innerText = `${err.messages[0]}`;
          document.querySelector(`#${err.id}`).classList.add('input-error');
        });

      };
      
      if(card.value !== '' && errors.length === 0) {
        formStepsNum++; 
        updateFormSteps(); 
        updateProgressBar();  
      }
    });

    validat.setMessage('required', 'Completa el campo');
    validat.setMessage('valid_credit_card', 'Ingresa un número de tarjeta válido');
    validat.setMessage('exact_length', 'Ingresa un dato válido');
    validat.setMessage('numeric', 'Ingresa solo números');
  };

  if(index === 3) {
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const monto = document.querySelector('#monto').value;
    const tipo = document.querySelector('#tipo').value;
    const causa = document.querySelector('#causa').value;
    const card = document.querySelector('#card').value;
    const resumenContainer = document.querySelector('#resumen');
    const textoTipo = `${tipo === 'unica'? 'por única vez' : tipo === 'mensual'? 'mensuales' : 'anuales'}`
    const textoCausa = `${causa === 'animales'? 'Salvar animales' : causa === 'risiduos'? 'Reducción de residuos' : 'Combatir la contaminación'}`;
    const textoTarjeta = `${card === 'mastercard'? 'Mastercard' : card === 'visa'? 'Visa' : 'American Express'}`;

    const template = `<p><b>Nombre completo:</b> ${nombre} ${apellido}</p>
                      <p><b>Donación:</b> $${monto} ${textoTipo}</p>
                      <p><b>Causa:</b> ${textoCausa}</p>
                      <p><b>Medio de pago:</b> Tarjeta de crédito ${textoTarjeta}</p>`;

                      
    resumenContainer.innerHTML = template;
  };
};


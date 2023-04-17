document.addEventListener("DOMContentLoaded", loadListeners);

window.addEventListener('resize', () => {
  if(window.innerWidth < 992) {
    closeMenu();
  };
});

//VARIABLES
let formStepsNum = 0;
let donationFormErrors;
let jsPdf;


function loadListeners() {
  document.querySelector('#responsive-menu-button').addEventListener('click', openMenu);
  document.querySelector('#close-menu-button').addEventListener('click', closeMenu);
  document.querySelectorAll('.btn-prev').forEach(btn => btn.addEventListener('click', () => { 
    formStepsNum--; 
    updateFormSteps(); 
    updateProgressBar();
  }));

  document.querySelector('#cardNumber')?.addEventListener('input', formatCardNumber);
  document.querySelector('#expiration')?.addEventListener('input', formatCardExpiration);
  document.querySelector('#cuit')?.addEventListener('input', formatCuitNumber);
  handleErrors();
  document.querySelector('#donation-form')?.addEventListener('submit', submit);
  document.querySelector('#download').addEventListener('click', downloadPdf);

  const { jsPDF } = window.jspdf;
  jsPdf = jsPDF;
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



const handleErrors = () => {
  const validat = new FormValidator('donation-form', [{ 
    name: 'name',    
    display: 'Nombre', 
    rules: 'required|alpha'       
  }, {
    name: 'lastName',
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
  }, {
    name: 'cardNumber',                                             
    display: 'Numero de Tarjeta',                                  
    rules: 'required|valid_credit_card|exact_length[19]'                           
  }, {
    name: 'cardholder',
    display: 'Nombre del titular',
    rules: 'required|alpha'
  }, {
    name: 'expiration',
    display: 'Vencimiento',
    rules: 'required|exact_length[5]'
  }, {
    name: 'ccv',
    display: 'CCV',
    rules: 'required|numeric|exact_length[3]'
  }], function(errors, event) { 
    document.querySelectorAll('.input-error').forEach(node => {
      node.classList.remove('input-error');
      document.querySelector(`#error-${node.id}`).innerText = '';
    });
    
    if (errors.length> 0) {
      errors.forEach(err => {
        document.querySelector(`#error-${err.id}`).innerText = `${err.messages[0]}`;
        document.querySelector(`#${err.id}`).classList.add('input-error');
      });
    };

    donationFormErrors = errors;

  });

  validat.setMessage('required', 'Completa el campo');
  validat.setMessage('alpha', 'Ingresa solo caracteres alfabéticos');
  validat.setMessage('exact_length', 'Ingresa un dato válido');
  validat.setMessage('alpha_dash', 'Ingresa un CUIT válido');
  validat.setMessage('valid_email', 'Ingresa un e-mail válido');
  validat.setMessage('valid_credit_card', 'Ingresa un número de tarjeta válido');
  validat.setMessage('numeric', 'Ingresa solo números');
};


const submit = (e) => {
  e.preventDefault();

  const step0Errors = donationFormErrors.some(error => error.id === 'name' || error.id === 'lastName' || error.id === 'cuit' || error.id === 'email');

  if(!step0Errors && formStepsNum === 0) {
    formStepsNum++; 
    updateFormSteps(); 
    updateProgressBar();
    return;
  };


  const cause = document.querySelector('#cause');
  const type = document.querySelector('#type');
  const amount = document.querySelector('#amount');
  const message = 'Debes seleccionar una opción';

  if(!cause.value) {
    document.querySelector(`#${cause.id}`).classList.add('input-error');
    document.querySelector(`#error-${cause.id}`).innerText = message;
  };

  if(!type.value) {
    document.querySelector(`#${type.id}`).classList.add('input-error');
    document.querySelector(`#error-${type.id}`).innerText = message;
  };

  if(!amount.value) {
    document.querySelector(`#${amount.id}`).classList.add('input-error');
    document.querySelector(`#error-${amount.id}`).innerText = message;
  };

  if(cause.value !== '' && type.value !== '' && amount.value !== '' && formStepsNum === 1) {
    formStepsNum++; 
    updateFormSteps(); 
    updateProgressBar();

    document.querySelectorAll('.input-error').forEach(node => {
      node.classList.remove('input-error');
      document.querySelector(`#error-${node.id}`).innerText = '';
    });

    return;
  };


  const card = document.querySelector('#card');

  if(!card.value) {
    document.querySelector(`#${card.id}`).classList.add('input-error');
    document.querySelector(`#error-${card.id}`).innerText = 'Debes seleccionar una opción';
  };

  const step2Errors = donationFormErrors.some(error => error.id === 'cardNumber' || error.id === 'cardholder' || error.id === 'expiration' || error.id === 'ccv');

  if(card.value !== '' && !step2Errors && formStepsNum === 2) {
    formStepsNum++; 
    updateFormSteps(); 
    updateProgressBar();
    generateSummary();
    return;
  };


  if(formStepsNum === 3) {
    const summary = document.querySelector('#donation-summary-wrapper');
    const spinner = document.querySelector('#spinner-wrapper');

    summary.style.display = 'none';
    spinner.style.display = 'flex';


    setTimeout(() => {
      summary.style.display = 'flex';
      spinner.style.display = 'none';

      formStepsNum++; 
      updateFormSteps(); 
      updateProgressBar();

      return;
      
    }, 3000);

  };
};


const generateSummary = () => {
  const name = document.querySelector('#name').value;
  const lastName = document.querySelector('#lastName').value;
  const amount = document.querySelector('#amount').value;
  const type = document.querySelector('#type').value;
  const cause = document.querySelector('#cause').value;
  const card = document.querySelector('#card').value;
  const resumenContainer = document.querySelector('#resumen');
  const typeText = `${type === 'unica'? 'por única vez' : type === 'mensual'? 'mensuales' : 'anuales'}`
  const causeText = `${cause === 'animales'? 'Salvar animales' : cause === 'risiduos'? 'Reducción de residuos' : 'Combatir la contaminación'}`;
  const textoTarjeta = `${card === 'mastercard'? 'Mastercard' : card === 'visa'? 'Visa' : 'American Express'}`;

  const template = `<p><b>Nombre completo:</b> ${name} ${lastName}</p>
                    <p><b>Donación:</b> $${amount} ${typeText}</p>
                    <p><b>Causa:</b> ${causeText}</p>
                    <p><b>Medio de pago:</b> Tarjeta de crédito ${textoTarjeta}</p>`;

                    
  resumenContainer.innerHTML = template;
};


const downloadPdf = () => {
  const name = document.querySelector('#name').value;
  const lastName = document.querySelector('#lastName').value;
  const amount = document.querySelector('#amount').value;
  const type = document.querySelector('#type').value;
  const cause = document.querySelector('#cause').value;
  const card = document.querySelector('#card').value;
  const typeText = `${type === 'unica'? 'por única vez' : type === 'mensual'? 'mensuales' : 'anuales'}`
  const causeText = `${cause === 'animales'? 'Salvar animales' : cause === 'risiduos'? 'Reducción de residuos' : 'Combatir la contaminación'}`;
  const textoTarjeta = `${card === 'mastercard'? 'Mastercard' : card === 'visa'? 'Visa' : 'American Express'}`;

  const doc = new jsPdf();
  doc.setFontSize(20)
  doc.text("COMPROBANTE DE DONACIÓN", 50, 20);
  doc.setFontSize(12)
  doc.text(`Nombre completo: ${name} ${lastName}`, 10, 30);
  doc.text(`Donación: $${amount} ${typeText}`, 10, 40);
  doc.text(`Causa: ${causeText}`, 10, 50);
  doc.text(`Medio de pago: Tarjeta de crédito ${textoTarjeta}`, 10, 60);

  doc.save("donacion.pdf");

}
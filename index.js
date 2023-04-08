document.addEventListener("DOMContentLoaded", loadListeners);

window.addEventListener('resize', () => {
  if(window.innerWidth < 576) {
    closeMenu();
  };
});


function loadListeners() {
  document.querySelector('#responsive-menu-button').addEventListener('click', openMenu);
  document.querySelector('#close-menu-button').addEventListener('click', closeMenu);
  document.querySelectorAll('.btn-next')
  .forEach(btn => btn.addEventListener('click', () => { formStepsNum++; updateFormSteps(); }));
  document.querySelectorAll('.btn-prev')
  .forEach(btn => btn.addEventListener('click', () => { formStepsNum--; updateFormSteps(); }));
};

//VARIABLES
const formSteps = document.querySelectorAll('.form-step');
const progress = document.querySelector('#progress');
let formStepsNum = 0;


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
  formSteps.forEach(formStep => {formStep.classList.contains('form-step-active') && formStep.classList.remove('form-step-active');});
  formSteps[formStepsNum].classList.add('form-step-active');
};
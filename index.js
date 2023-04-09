document.addEventListener("DOMContentLoaded", loadListeners);

window.addEventListener('resize', () => {
  if(window.innerWidth < 576) {
    closeMenu();
  };
});


function loadListeners() {
  document.querySelector('#responsive-menu-button').addEventListener('click', openMenu);
  document.querySelector('#close-menu-button').addEventListener('click', closeMenu);
  document.querySelectorAll('.btn-next').forEach(btn => btn.addEventListener('click', () => { 
    formStepsNum++; 
    updateFormSteps(); 
    updateProgressBar();
  }));
  document.querySelectorAll('.btn-prev').forEach(btn => btn.addEventListener('click', () => { 
    formStepsNum--; 
    updateFormSteps(); 
    updateProgressBar();
  }));
};

//VARIABLES
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
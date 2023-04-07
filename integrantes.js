const modal__correo = document.getElementById('modal__correo')
if (modal__correo) {
  modal__correo.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = modal__correo.querySelector('.modal-title')
    const modalBodyInput = modal__correo.querySelector('.modal-body input')

    modalTitle.textContent = `Escribele un mensaje a ${recipient}`
    modalBodyInput.value = recipient
  })
}
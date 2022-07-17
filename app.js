const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');
const modalContainer = document.querySelector('.modal-container');
const modal = document.querySelector('.modal')

openButton.addEventListener('click', () => {
  modalContainer.classList.add('show')
  modal.classList.add('animation')
});

closeButton.addEventListener('click', () => {
  modalContainer.classList.remove('show')
  modal.classList.remove('animation')
});


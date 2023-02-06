(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-1]'),
    closeModalBtn: document.querySelector('[data-modal-close-1]'),
    modal: document.querySelector('[data-modal-1]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-2]'),
    closeModalBtn: document.querySelector('[data-modal-close-2]'),
    modal: document.querySelector('[data-modal-2]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-3]'),
    closeModalBtn: document.querySelector('[data-modal-close-3]'),
    modal: document.querySelector('[data-modal-3]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-4]'),
    closeModalBtn: document.querySelector('[data-modal-close-4]'),
    modal: document.querySelector('[data-modal-4]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

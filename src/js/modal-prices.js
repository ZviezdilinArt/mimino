(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-prices]'),
    closeModalBtn: document.querySelector('[data-modal-close-prices]'),
    modal: document.querySelector('[data-modal-prices]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-prices1]'),
    closeModalBtn: document.querySelector('[data-modal-close-prices1]'),
    modal: document.querySelector('[data-modal-prices1]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-prices2]'),
    closeModalBtn: document.querySelector('[data-modal-close-prices2]'),
    modal: document.querySelector('[data-modal-prices2]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

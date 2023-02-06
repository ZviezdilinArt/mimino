(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-table]'),
    closeModalBtn: document.querySelector('[data-modal-close-table]'),
    modal: document.querySelector('[data-modal-table]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-table1]'),
    closeModalBtn: document.querySelector('[data-modal-close-table1]'),
    modal: document.querySelector('[data-modal-table1]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

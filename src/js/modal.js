(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-buy-modal-open]"),
    closeModalBtn: document.querySelector("[data-buy-modal-close]"),
    modal: document.querySelector("[data-buy-modal]"),
    body: document.querySelector("body"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    if (!window.menuIsOpened) {
      refs.body.classList.toggle("no-scroll");
    }
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-franchise-modal-open]"),
    closeModalBtn: document.querySelector("[data-franchise-modal-close]"),
    modal: document.querySelector("[data-franchise-modal]"),
    body: document.querySelector("body"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    if (!window.menuIsOpened) {
      refs.body.classList.toggle("no-scroll");
    }
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-buy-menu-modal-open]"),
    modal: document.querySelector("[data-buy-modal]"),
    body: document.querySelector("body"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    if (!window.menuIsOpened) {
      refs.body.classList.toggle("no-scroll");
    }
  }
})();
(() => {
  const menuRefs = {
    openMenuBtn: document.querySelector(".menu-open-btn"),
    closeMenuBtn: document.querySelector(".menu-close-btn"),
    closeMenulinks: document.querySelectorAll(".js-mob-menu-list__item"),
    menu: document.querySelector(".mobile-menu"),
    body: document.querySelector("body"),
  };

  menuRefs.openMenuBtn.addEventListener("click", toggleMenu);
  menuRefs.closeMenuBtn.addEventListener("click", toggleMenu);
  
  for (let i = 0; i < menuRefs.closeMenulinks.length; i++){
    menuRefs.closeMenulinks[i].addEventListener("click", toggleMenu);
  }

  function toggleMenu() {
    menuRefs.menu.classList.toggle("is-hidden");
    menuRefs.body.classList.toggle("no-scroll");
    window.menuIsOpened = !window.menuIsOpened;
  }
})();
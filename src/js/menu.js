  const menuRefs = {
    openMenuBtn: document.querySelector(".menu-open-btn"),
    closeMenuBtn: document.querySelector(".menu-close-btn"),
    closeMenulink1: document.querySelector("[menu-close-link1]"),
    closeMenulink2: document.querySelector("[menu-close-link2]"),
    closeMenulink3: document.querySelector("[menu-close-link3]"),
    closeMenulink4: document.querySelector("[menu-close-link4]"),
    closeMenulink5: document.querySelector("[menu-close-link5]"),
    menu: document.querySelector(".mobile-menu"),
    body: document.querySelector("body"),
  };

  menuRefs.openMenuBtn.addEventListener("click", toggleMenu);
  menuRefs.closeMenuBtn.addEventListener("click", toggleMenu);
  menuRefs.closeMenulink1.addEventListener("click", toggleMenu);
  menuRefs.closeMenulink2.addEventListener("click", toggleMenu);
  menuRefs.closeMenulink3.addEventListener("click", toggleMenu);
  menuRefs.closeMenulink4.addEventListener("click", toggleMenu);
  menuRefs.closeMenulink5.addEventListener("click", toggleMenu);

  function toggleMenu() {
    menuRefs.menu.classList.toggle("is-hidden");
    menuRefs.body.classList.toggle("no-scroll");
  }
  
  function closeMenu() {
    menuRefs.menu.classList.add("is-hidden");
    menuRefs.body.classList.remove("no-scroll");
  }
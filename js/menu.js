(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-open__button'),
    closeMenuBtn: document.querySelector('.menu-close__button'),
    menu: document.querySelector('.mob-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
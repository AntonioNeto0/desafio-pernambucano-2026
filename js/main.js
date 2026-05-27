document.addEventListener('DOMContentLoaded', function () {
  // Preenche o link de inscrição a partir do config
  document.querySelectorAll('[data-config="registrationUrl"]').forEach(function (el) {
    el.href = EVENT.registrationUrl;
  });

  // Menu mobile
  var toggle = document.getElementById('nav-toggle');
  var menu = document.querySelector('.nav-links');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Fecha o menu ao clicar em um link
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});

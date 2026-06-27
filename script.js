  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    menu.classList.toggle('open');
  });
  function closeMobile() {
    btn.classList.remove('open');
    menu.classList.remove('open');
  }
 
  /* ─── FAQ ACCORDION ─── */
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const item = question.closest('.faq-item');
      const isOpen = item.classList.contains('open');
 
      // Cerrar todos
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        const ans = i.querySelector('.faq-answer');
        ans.style.maxHeight = null;
        ans.style.paddingTop = null;
        ans.style.paddingBottom = null;
        ans.style.overflow = 'hidden';
      });
 
      // Abrir el clickeado si estaba cerrado
      if (!isOpen) {
        item.classList.add('open');
        question.setAttribute('aria-expanded', 'true');
        const ans = item.querySelector('.faq-answer');
        ans.style.paddingTop = '16px';
        ans.style.paddingBottom = '20px';
        // Forzar reflow para que el navegador calcule con el padding ya aplicado
        ans.style.maxHeight = ans.scrollHeight + 40 + 'px';
        // Una vez terminada la transición, liberar overflow para no cortar nada
        ans.addEventListener('transitionend', () => {
          if (item.classList.contains('open')) ans.style.overflow = 'visible';
        }, { once: true });
      }
    });
  });
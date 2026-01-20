const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
  // 1. Verificamos el estado actual
  const isDark = document.body.getAttribute('data-theme') === 'dark';

  if (isDark) {
    // Pasar a modo claro
    document.body.removeAttribute('data-theme');
    toggleBtn.setAttribute('aria-pressed', 'false');
    toggleBtn.innerText = 'Activar modo oscuro';
  } else {
    // Pasar a modo oscuro
    document.body.setAttribute('data-theme', 'dark');
    toggleBtn.setAttribute('aria-pressed', 'true');
    toggleBtn.innerText = 'Desactivar modo oscuro';
  }
});
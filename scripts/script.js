  // ====== ACTIVIDAD 13: Interacciones JS ======
  document.addEventListener('DOMContentLoaded', () => {
      // Parte 1 — Alert de bienvenida
      alert('¡Bienvenido a mi CV en línea! 😊');

      // Parte 1 — Cambio de color del encabezado (H1 del HERO) al pasar el mouse
      const encabezado = document.querySelector('#home h1');
      if (encabezado) {
          encabezado.addEventListener('mouseover', () => encabezado.style.color = '#d4af37'); // dorado suave
          encabezado.addEventListener('mouseout', () => encabezado.style.color = '');
      }

      // Parte 1 — Botón con mensaje personalizado
      const btnSaludo = document.getElementById('btnSaludo');
      const mensaje = document.getElementById('mensaje');
      if (btnSaludo && mensaje) {
          btnSaludo.addEventListener('click', () => {
              mensaje.textContent = '¡Gracias por visitar mi CV, que tengas un excelente día! 😄';
          });
      }

      // Parte 2 — Modo oscuro / claro con persistencia
      const btnTheme = document.getElementById('btnTheme');
      const root = document.documentElement;

      // Cargar preferencia previa
      const stored = localStorage.getItem('theme');
      if (stored === 'dark' || stored === 'light') root.setAttribute('data-theme', stored);

      function paintThemeButton() {
          if (!btnTheme) return;
          const dark = root.getAttribute('data-theme') === 'dark';
          btnTheme.classList.toggle('btn-outline-dark', !dark);
          btnTheme.classList.toggle('btn-outline-light', dark);
          btnTheme.innerHTML = dark ?
              '<i class="bi bi-brightness-high"></i> Claro' :
              '<i class="bi bi-moon"></i> Oscuro';
      }

      paintThemeButton();

      if (btnTheme) {
          btnTheme.addEventListener('click', () => {
              const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
              root.setAttribute('data-theme', next);
              localStorage.setItem('theme', next);
              paintThemeButton();
          });
      }

      // Parte 2 — Hora en tiempo real
      function tick() {
          const el = document.getElementById('hora');
          if (!el) return;
          const ahora = new Date();
          el.textContent = ahora.toLocaleTimeString('es-MX');
      }
      tick();
      setInterval(tick, 1000);
  });
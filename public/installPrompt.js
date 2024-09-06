let deferredPrompt;
const installButton = document.querySelector('#installButton');

// Función para detectar si es una PWA
function isRunningStandalone() {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
}

// Ocultar el botón si ya está en modo standalone (PWA)
if (isRunningStandalone()) {
  installButton.style.display = 'none';  // Ocultar el botón si es una PWA
} else {
  // Mostrar el botón si el navegador soporta service workers y PWA
  if ('serviceWorker' in navigator && 'onbeforeinstallprompt' in window) {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      installButton.style.display = 'block';  // Mostrar el botón si es instalable
    });

    // Mostrar el prompt cuando se haga clic en el botón de instalación
    installButton.addEventListener('click', () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('El usuario aceptó instalar la PWA');
          } else {
            console.log('El usuario rechazó la instalación');
          }
          deferredPrompt = null;
        });
      } else {
        alert('La app ya está instalada o no es instalable en este navegador.');
      }
    });
  } else {
    installButton.style.display = 'none';  // Ocultar el botón si no es instalable
  }
}

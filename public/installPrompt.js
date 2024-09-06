let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {

    // Prevenir que Chrome muestre el diálogo por defecto
    e.preventDefault();

    // Guardar el evento para usarlo más tarde
    deferredPrompt = e;

    // Mostrar el botón de instalación o notificación personalizada
    const installButton = document.querySelector('#installButton');
    installButton.style.display = 'block';

    installButton.addEventListener('click', () => {
    // Mostrar el prompt de instalación

      deferredPrompt.prompt();
      // Esperar la respuesta del usuario
      deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
          console.log('El usuario aceptó la instalación');
          } else {
          console.log('El usuario rechazó la instalación');
          }
          deferredPrompt = null;
      });
  });
});

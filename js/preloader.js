/* =========================================================================
   PRELOADER.JS
   Lógica del preloader: oculta el componente una vez la página termina
   de cargarse (con un pequeño retraso para una transición suave).
   ========================================================================= */

window.addEventListener('load', function() {
    var preloader = document.getElementById('preloader');
    setTimeout(function() {
        preloader.classList.add('hidden');
    }, 800);
});

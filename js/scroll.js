/* =========================================================================
   SCROLL.JS
   Funcionalidades relacionadas con el scroll:
   - Botón "volver arriba" (mostrar / ocultar + acción)
   - Scroll suave para enlaces de ancla (#)
   ========================================================================= */

/* -------------------------------------------------------------------------
   BOTÓN SCROLL TO TOP: visibilidad
   ------------------------------------------------------------------------- */
var scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

/* -------------------------------------------------------------------------
   BOTÓN SCROLL TO TOP: acción
   ------------------------------------------------------------------------- */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/* -------------------------------------------------------------------------
   SCROLL SUAVE EN ENLACES DE ANCLA
   ------------------------------------------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var targetId = this.getAttribute('href');
        if (targetId === '#') return;
        var targetElement = document.querySelector(targetId);
        if (targetElement) {
            var navHeight = navbar.offsetHeight;
            var targetPosition = targetElement.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

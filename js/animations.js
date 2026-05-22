/* =========================================================================
   ANIMATIONS.JS
   Animaciones de la página:
   - IntersectionObserver para activar las clases .fade-up / .fade-left / .fade-right
   - Efecto parallax sobre los elementos flotantes del hero
   ========================================================================= */

/* -------------------------------------------------------------------------
   INTERSECTION OBSERVER (animaciones al hacer scroll)
   ------------------------------------------------------------------------- */
var observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach(function(el) {
    observer.observe(el);
});

/* -------------------------------------------------------------------------
   EFECTO PARALLAX EN ELEMENTOS FLOTANTES DEL HERO
   ------------------------------------------------------------------------- */
window.addEventListener('scroll', function() {
    var scrolled = window.scrollY;
    document.querySelectorAll('.floating-element').forEach(function(el, index) {
        var speed = 0.02 + (index * 0.01);
        el.style.transform = 'translateY(' + (scrolled * speed) + 'px)';
    });
});

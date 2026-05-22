/* =========================================================================
   NAVBAR.JS
   Lógica de la barra de navegación:
   - Efecto al hacer scroll (clase "scrolled")
   - Toggle del menú móvil
   - Cierre del menú móvil al seleccionar un enlace
   ========================================================================= */

/* -------------------------------------------------------------------------
   EFECTO SCROLL EN LA NAVBAR
   ------------------------------------------------------------------------- */
var navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

/* -------------------------------------------------------------------------
   TOGGLE DEL MENÚ MÓVIL
   ------------------------------------------------------------------------- */
function toggleMenu() {
    var navLinks = document.getElementById('navLinks');
    var menuBtn = document.getElementById('mobileMenuBtn');
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('active');
}

/* -------------------------------------------------------------------------
   CIERRE DEL MENÚ MÓVIL (al hacer clic en un enlace)
   ------------------------------------------------------------------------- */
function closeMenu() {
    var navLinks = document.getElementById('navLinks');
    var menuBtn = document.getElementById('mobileMenuBtn');
    navLinks.classList.remove('active');
    menuBtn.classList.remove('active');
}

// js/app.js
import megaMenu from './components/megaMenu.js';
import slider from './components/slider.js';
import loanCalculator from './components/loanCalculator.js';
import partnerCarousel from './components/partnersCarousel.js';
import userConsent from './components/userConsent.js';
import scrollReveal from './components/scrollReveal.js';
import whatsappWidget from './components/whatsappWidget.js';
import loader from './components/loader.js';
import testimonials from './components/testimonials.js';
import { loadPartials } from './utils/htmlLoader.js'

document.addEventListener('alpine:init', () => {
    Alpine.data('megaMenu', megaMenu);
    Alpine.data('slider', slider);
    Alpine.data('loanCalculator', loanCalculator);
    Alpine.data('partnerCarousel', partnerCarousel);
    Alpine.data('cookieConsent', userConsent);
    Alpine.data('scrollReveal', scrollReveal);
    Alpine.data('whatsappWidget', whatsappWidget);
    Alpine.data('loader', loader);
    Alpine.data('testimonials', testimonials);
});

// Función asíncrona para ordenar la carga
async function startApp() {

    // 1. Esperar a que se inyecte todo el HTML (Header, Footer, etc.)
    await loadPartials();

    // 2. Registrar componentes Alpine
    // 2. Registrar componentes Alpine
    // YA NO es necesario volver a registrar los listeners si se registran arriba globalmente.
    // Solo necesitamos asegurarnos de que Alpine descubra el nuevo HTML inyectado.

    // 3. Reiniciar Alpine si es necesario (solo si ya inició y necesitamos re-escanear)
    // Pero como estamos usando 'defer' en el script de Alpine y 'DOMContentLoaded' para app.js,
    // es posible que Alpine ya haya iniciado.
    // Si loadPartials inyectó nuevo HTML, necesitamos decirle a Alpine que lo procese.
    // Sin embargo, Alpine observa el DOM automáticamente.
    // Si loadPartials es async, el HTML se inyecta después.

    // Lo mejor es no hacer nada si Alpine usa MutationObserver (que lo hace por defecto).
    // Si acaso, initTree.

    // Simplificación: Eliminamos la lógica redundante.

    // --- NUEVO CÓDIGO AQUÍ ---
    // 4. Avisar al Loader que ya está todo listo
    // Despachamos un evento personalizado llamado 'finantel-loaded'
    window.dispatchEvent(new CustomEvent('finantel-loaded'));
}

startApp();

// efecto de targets 3D nuestros productos estrellas
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.product-card');

    cards.forEach(card => {
        const inner = card.querySelector('.product-card-inner');

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // Posición X relativa
            const y = e.clientY - rect.top;  // Posición Y relativa

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Calcula ángulos: máx 10 grados para sutileza
            const tiltX = (x - centerX) / centerX * 10;
            const tiltY = (centerY - y) / centerY * 10; // Invierte Y para naturalidad

            inner.style.setProperty('--tilt-x', `${tiltX}deg`);
            inner.style.setProperty('--tilt-y', `${tiltY}deg`);
            inner.classList.add('tilt');
        });

        card.addEventListener('mouseleave', () => {
            inner.classList.remove('tilt');
            inner.style.setProperty('--tilt-x', '0deg');
            inner.style.setProperty('--tilt-y', '0deg');
        });
    });
});
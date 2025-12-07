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

    // 3. Reiniciar Alpine si es necesario
    if (window.Alpine) {
        Alpine.start();
    }

    // --- NUEVO CÓDIGO AQUÍ ---
    // 4. Avisar al Loader que ya está todo listo
    // Despachamos un evento personalizado llamado 'finantel-loaded'
    window.dispatchEvent(new CustomEvent('finantel-loaded'));
}

startApp();
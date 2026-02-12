export default function megaMenu() {
    return {
        // Estado del menú
        isOpen: false,       // Desktop
        isMobileOpen: false, // Móvil (Visibilidad del panel)
        isSpinning: false,   // Móvil (Estado de rotación de la X)

        activeCategory: 'cuentas',
        closeTimer: null,

        // Estado del Navbar (Scroll)
        showNavbar: true,
        lastScrollY: 0,

        init() {
            this.lastScrollY = window.scrollY;
            window.addEventListener('scroll', () => {
                this.handleScroll();
            });
        },

        // --- LÓGICA DE ANIMACIÓN CORREGIDA ---
        toggleMobileMenu() {
            if (this.isMobileOpen) {
                // CERRAR
                this.isSpinning = false; // Gira de vuelta inmediatamente
                this.isMobileOpen = false;
            } else {
                // ABRIR
                this.isSpinning = false; // Asegurar estado inicial (0 grados)
                this.isMobileOpen = true;

                // --- CAMBIO CLAVE AQUÍ ---
                // Retraso de 400ms. El menú tarda 700ms en abrirse.
                // La rotación empezará cuando el menú ya esté visible en pantalla.
                setTimeout(() => {
                    this.isSpinning = true;
                }, 800);
            }
        },

        handleScroll() {
            const currentScrollY = window.scrollY;
            if (currentScrollY < 0) return;

            if (currentScrollY < 60) {
                this.showNavbar = true;
                this.lastScrollY = currentScrollY;
                return;
            }

            if (this.isOpen || this.isMobileOpen) {
                this.showNavbar = true;
                return;
            }

            if (currentScrollY > this.lastScrollY) {
                this.showNavbar = false;
            } else {
                this.showNavbar = true;
            }
            this.lastScrollY = currentScrollY;
        },

        openMenu() {
            if (this.closeTimer) {
                clearTimeout(this.closeTimer);
                this.closeTimer = null;
            }
            this.isOpen = true;
        },

        closeMenu() {
            this.closeTimer = setTimeout(() => {
                this.isOpen = false;
            }, 300);
        },

        // Datos de las categorías (Sin cambios)
        categories: {
            'cuentas': {
                name: 'Cuentas y Ahorros',
                icon: 'fas fa-wallet',
                description: 'Administra tu dinero día a día y hazlo crecer de forma segura.',
                items: [
                    { name: 'Cuenta Digital', description: 'Sin costo de mantenimiento.', link: '#' },
                    { name: 'Cuenta Sueldo', description: 'Beneficios exclusivos.', link: '#' },
                    { name: 'Plazo Fijo', description: 'Las mejores tasas (TREA).', link: '#' },
                    { name: 'Cuenta CTS', description: 'Alta rentabilidad.', link: '#' },
                ]
            },
            'tarjetas': {
                name: 'Tarjetas',
                icon: 'fas fa-credit-card',
                description: 'La tarjeta ideal para tu estilo de vida.',
                items: [
                    { name: 'Crédito Premium', description: 'Beneficios VIP y millas.', link: '#' },
                    { name: 'Cashback', description: 'Devolución en compras.', link: '#' },
                    { name: 'Débito Digital', description: 'Compras online seguras.', link: '#' },
                ]
            },
            'prestamos': {
                name: 'Préstamos',
                icon: 'fas fa-hand-holding-usd',
                description: 'Financiamiento rápido y flexible.',
                items: [
                    { name: 'Personal', description: 'Libre disponibilidad.', link: '#' },
                    { name: 'Hipotecario', description: 'Tu casa propia.', link: '#' },
                    { name: 'Vehicular', description: 'Auto nuevo o usado.', link: '#' },
                ]
            },
            'seguros': {
                name: 'Seguros',
                icon: 'fas fa-shield-alt',
                description: 'Protege lo que más valoras.',
                items: [
                    { name: 'Vehicular', description: 'Todo Riesgo.', link: '#' },
                    { name: 'Salud', description: 'Protección integral.', link: '#' },
                    { name: 'SOAT', description: 'Digital al instante.', link: '#' },
                ]
            },
            'inversiones': {
                name: 'Inversiones',
                icon: 'fas fa-chart-line',
                description: 'Potencia tu capital.',
                items: [
                    { name: 'Fondos Mutuos', description: 'Diversifica tu portafolio.', link: '#' },
                    { name: 'Depósitos a Plazo', description: 'Rentabilidad asegurada.', link: '#' },
                ]
            }
        }
    }
}
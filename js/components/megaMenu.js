 // 2. Componente: Mega Menú Interactivo (CORREGIDO)
export default function megaMenu() {
    return {
        // Estado del menú
        isOpen: false,
        isMobileOpen: false,
        activeCategory: 'cuentas',
        closeTimer: null,

        // Estado del Navbar (Scroll)
        showNavbar: true,
        lastScrollY: 0,

        init() {
            // El init se ejecuta automáticamente al cargar
            console.log("Menú inicializado. Escuchando scroll...");
            
            window.addEventListener('scroll', () => {
                this.handleScroll();
            });
        },

        handleScroll() {
            const currentScrollY = window.scrollY;
            
            // Ignorar el "rebote" del scroll en la parte superior (iOS/Mac)
            if (currentScrollY < 0) return;

            // Siempre mostrar si estamos en el tope de la página
            if (currentScrollY < 60) {
                this.showNavbar = true;
                this.lastScrollY = currentScrollY;
                return;
            }

            // Si el menú está abierto, no ocultamos la barra
            if (this.isOpen || this.isMobileOpen) {
                this.showNavbar = true;
                return;
            }

            // Detectar dirección: Si el actual es mayor que el anterior, bajamos
            if (currentScrollY > this.lastScrollY) {
                this.showNavbar = false; // Ocultar (Bajando)
            } else {
                this.showNavbar = true;  // Mostrar (Subiendo)
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

        // Datos de las categorías (Mismo contenido que tenías)
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
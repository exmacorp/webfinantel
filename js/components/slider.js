// js/components/slider.js
export default function slider() {
    return {
        activeSlide: 0,
        isPlaying: true,
        userPaused: false,
        interval: null,
        autoplaySpeed: 4000,
        
        // Mueve la data de slides AQUÍ dentro del return
        slides: [
            {
                id: 0,
                tagline: "Innovación y Confianza",
                title: "Tu futuro financiero, ahora <span class='text-accent'>100% digital.</span>",
                description: "Únete a la cooperativa que combina solidez tradicional con agilidad fintech. Accede a todos los servicios desde tu celular, sin filas.",
                ctaText: "Hazte Socio Ahora",
                ctaLink: "#",
                image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
            },
            {
                id: 1,
                tagline: "Aprobación Inmediata",
                title: "El crédito que necesitas, <span class='text-accent'>al instante</span> y sin filas.",
                description: "Simula tu préstamo de libre disponibilidad y recíbelo en tu cuenta en minutos. Tasas competitivas y transparentes.",
                ctaText: "Simula tu Crédito",
                ctaLink: "#simulador",
                image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3" 
            },
            {
                id: 2,
                tagline: "Rentabilidad Asegurada",
                title: "Ahorros que crecen de verdad. TREA hasta <span class='text-accent'>7.5%</span>",
                description: "Descubre nuestros depósitos a plazo fijo con las mejores tasas del mercado. Tu dinero seguro, rentable y respaldado.",
                ctaText: "Ver Tasas de Ahorro",
                ctaLink: "#ahorros",
                image: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
            }
        ],

        nextSlide() {
            this.activeSlide = (this.activeSlide + 1) % this.slides.length;
        },
        prevSlide() {
            this.activeSlide = (this.activeSlide - 1 + this.slides.length) % this.slides.length;
        },
        goToSlide(index) {
            this.activeSlide = index;
        },
        
        startAutoplay() {
            if (!this.interval && !this.userPaused) {
                 this.interval = setInterval(() => {
                    this.nextSlide();
                }, this.autoplaySpeed);
                this.isPlaying = true;
            }
        },
        stopAutoplay() {
            clearInterval(this.interval);
            this.interval = null;
        },
        handleMouseEnter() {
            this.stopAutoplay();
        },
        handleMouseLeave() {
            if (!this.userPaused) {
                this.startAutoplay();
            }
        },
        togglePlayPause() {
            if (this.isPlaying) {
                this.stopAutoplay();
                this.isPlaying = false;
                this.userPaused = true;
            } else {
                this.userPaused = false;
                this.startAutoplay();
            }
        },
        get isPaused() {
            return !this.isPlaying;
        },
        
        init() {
            this.startAutoplay();
        }
    }
}
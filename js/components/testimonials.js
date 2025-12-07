export default function testimonials() {
    return {
        current: 0,
        items: [
            {
                name: "Karina Gadea",
                role: "Jefa de Recursos Humanos",
                quote: "Hemos podido afianzar el trabajo de nuestros colaboradores porque les dan mayores facilidades de pago y sobre todo a través de Descuento por Planilla.",
                image: "https://randomuser.me/api/portraits/women/65.jpg",
                stars: 5
            },
            {
                name: "Hellevi Mallma",
                role: "Jefa de Clima y Cultura",
                quote: "Es muy importante contar con préstamos corporativos para ayudar a diferentes necesidades de nuestros colaboradores. La atención es rápida.",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                stars: 5
            },
            {
                name: "Angela Lyn",
                role: "Socia Activa",
                quote: "Recomiendo la Coopac por la experiencia, el buen trato y la información clara que nos dan a los socios. Nos detallan todo de forma transparente.",
                image: "https://randomuser.me/api/portraits/women/68.jpg",
                stars: 5
            },
            {
                name: "Jorge Ramírez",
                role: "Emprendedor",
                quote: "Gracias al crédito vehicular pude renovar mi herramienta de trabajo. Las tasas son competitivas y el trámite fue súper sencillo.",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                stars: 4
            },
            {
                name: "Lucía Fernández",
                role: "Socia Ahorrista",
                quote: "Mis ahorros están seguros y creciendo. La banca virtual me permite ver mis movimientos sin salir de casa.",
                image: "https://randomuser.me/api/portraits/women/12.jpg",
                stars: 5
            }
        ],
        
        // Variables para controlar el tamaño de pantalla
        visibleItems: 3,

        init() {
            // Calcular cuántos items se ven al cargar y al redimensionar
            this.updateVisibleItems();
            window.addEventListener('resize', () => {
                this.updateVisibleItems();
                // Resetear posición al redimensionar para evitar errores visuales
                this.current = 0;
            });
        },

        updateVisibleItems() {
            if (window.innerWidth >= 1024) {
                this.visibleItems = 3; // PC
            } else if (window.innerWidth >= 768) {
                this.visibleItems = 2; // Tablet
            } else {
                this.visibleItems = 1; // Móvil
            }
        },

        get maxIndex() {
            // El índice máximo es el total menos los que ya se están viendo
            return this.items.length - this.visibleItems;
        },

        get isAtStart() {
            return this.current === 0;
        },

        get isAtEnd() {
            return this.current >= this.maxIndex;
        },

        next() {
            // Solo avanza si no hemos llegado al final
            if (!this.isAtEnd) {
                this.current++;
            }
        },

        prev() {
            // Solo retrocede si no estamos al inicio
            if (!this.isAtStart) {
                this.current--;
            }
        }
    }
}
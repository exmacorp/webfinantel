export default function scrollReveal() {
    return {
        isVisible: false,
        
        // Este objeto se vincula con x-bind en el HTML
        trigger: {
            ['x-intersect:enter.once.margin.-20%']() {
                this.isVisible = true;
            },
            [':class']() {
                return {
                    'opacity-0 translate-y-10': !this.isVisible, // Estado inicial (oculto y abajo)
                    'opacity-100 translate-y-0': this.isVisible, // Estado final (visible y en su lugar)
                    'transition-all duration-1000 ease-out': true // Duración suave
                }
            }
        }
    }
}
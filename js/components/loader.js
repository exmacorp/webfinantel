export default function loader() {
    return {
        isLoading: true,

        init() {
            // Ya no usamos 'window.load' porque dispara muy rápido.
            // Ahora escuchamos nuestro evento personalizado.
            window.addEventListener('finantel-loaded', () => {
                
                // Agregamos un retraso INTENCIONAL (2000ms = 2 segundos)
                // Esto permite:
                // 1. Que Alpine termine de renderizar todo el HTML inyectado.
                // 2. Que el usuario aprecie tu animación de logo.
                setTimeout(() => {
                    this.isLoading = false;
                }, 2000); 
            });
        }
    }
}
// 4. Componente: Consentimiento de Cookies
export default function cookieConsent() {
            return {
                isVisible: false,

                init() {
                    // Verifica si el usuario ya aceptó las cookies usando localStorage
                    if (!localStorage.getItem('cookies_consent_status')) {
                        // Se añade un pequeño retraso para mejorar la UX
                        setTimeout(() => {
                            this.isVisible = true;
                        }, 500);
                    }
                },

                acceptCookies() {
                    console.log("Cookies aceptadas.");
                    localStorage.setItem('cookies_consent_status', 'accepted');
                    this.isVisible = false;
                },

                configureCookies() {
                    // Aquí iría la lógica para abrir un modal de configuración detallada
                    console.log("Configurando cookies...");
                    alert("Redirigiendo al panel de configuración de cookies...");
                },
            }
        }
export default function whatsappWidget() {
    return {
        isOpen: false,
        
        // Aquí defines a tus asesores. 
        // Puedes cambiar los números (phone) por los reales (formato internacional sin +).
        agents: [
            {
                name: 'Celeste López',
                area: 'Créditos y Préstamos',
                status: 'Online',
                avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
                phone: '51999999999' 
            },
            {
                name: 'Carlos Mendo',
                area: 'Ahorros e Inversiones',
                status: 'Online',
                avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
                phone: '51999999999'
            },
            {
                name: 'María Díaz',
                area: 'Atención al Socio',
                status: 'Online',
                avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
                phone: '51999999999'
            }
        ],

        toggle() {
            this.isOpen = !this.isOpen;
        },

        close() {
            this.isOpen = false;
        },

        // Función para abrir WhatsApp Web/App con el número del asesor
        contactAgent(phone, name) {
            const message = `Hola ${name}, soy socio de Finantel y tengo una consulta.`;
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        }
    }
}
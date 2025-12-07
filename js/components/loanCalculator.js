export default function loanCalculator() {
    return {
        amount: 25000,
        months: 24,
        rate: 0.159,
        monthlyPayment: 0,
        totalInterest: 0,
        totalPayment: 0,
        schedule: [],
        showSchedule: false,
        showModal: false,

        // Formulario de contacto
        form: {
            name: '',
            dni: '',
            email: '',
            phone: ''
        },

        calculate() {
            const monthlyRate = Math.pow(1 + this.rate, 1 / 12) - 1;

            if (this.amount > 0 && this.months > 0) {
                const numerator = monthlyRate * Math.pow(1 + monthlyRate, this.months);
                const denominator = Math.pow(1 + monthlyRate, this.months) - 1;

                if (denominator === 0) return;

                const payment = this.amount * (numerator / denominator);
                this.monthlyPayment = payment; // Guardamos numero puro para calculos

                const total = payment * this.months;
                this.totalPayment = total;
                this.totalInterest = total - this.amount;

                this.generateSchedule(payment, monthlyRate);
            }
        },

        generateSchedule(payment, monthlyRate) {
            let balance = this.amount;
            this.schedule = [];

            for (let i = 1; i <= this.months; i++) {
                let interest = balance * monthlyRate;
                let capital = payment - interest;

                // Ajuste para la ultima cuota
                if (i === this.months) {
                    capital = balance;
                    payment = capital + interest;
                    balance = 0;
                } else {
                    balance -= capital;
                }

                if (balance < 0) balance = 0;

                this.schedule.push({
                    number: i,
                    payment: payment,
                    principal: capital,
                    interest: interest,
                    balance: balance
                });
            }
        },

        formatMoney(value) {
            return Number(value).toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        },

        toggleSchedule() {
            this.showSchedule = !this.showSchedule;
        },

        openModal() {
            this.showModal = true;
            document.body.style.overflow = 'hidden';
        },

        closeModal() {
            this.showModal = false;
            document.body.style.overflow = 'auto';
        },

        submitForm() {
            alert(`Solicitud enviada para: ${this.form.name}\nMonto: S/ ${this.formatMoney(this.amount)}\nPlazo: ${this.months} meses`);
            this.closeModal();
            // Aqui iria la logica real de envio a backend/whatsapp
        },

        setMonths(m) {
            this.months = m;
            this.calculate();
        },

        init() {
            this.calculate();
            this.$watch('amount', () => this.calculate());
            this.$watch('months', () => this.calculate());
        }
    }
}
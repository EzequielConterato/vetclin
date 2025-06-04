document.addEventListener('DOMContentLoaded', function() {
    // Navegação por abas
    const tabs = document.querySelectorAll('nav ul li a');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove classe active de todas as abas e conteúdos
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Adiciona classe active à aba clicada
            this.classList.add('active');
            
            // Mostra o conteúdo correspondente
            const target = this.getAttribute('href');
            document.querySelector(target).classList.add('active');
            
            // Rolagem suave para o topo da seção
            document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Formulário de contato
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de envio
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData.entries());
            console.log('Dados do formulário:', formValues);
            
            // Feedback ao usuário
            alert('Obrigado por entrar em contato! Retornaremos em breve.');
            this.reset();
        });
    }

    // Verifica se há hash na URL ao carregar a página
    if (window.location.hash) {
        const targetTab = document.querySelector(`nav ul li a[href="${window.location.hash}"]`);
        if (targetTab) {
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            targetTab.classList.add('active');
            document.querySelector(window.location.hash).classList.add('active');
        }
    }
});
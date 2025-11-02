/*
    Conecta Mudanzas - JavaScript Principal
    
    Funcionalidades implementadas:
    1. Gestión de Modales
       - Modal de autenticación (login/registro)
       - Modal de código QR para descarga de app
       - Apertura/cierre y cambio de tabs
    
    2. Formularios
       - Manejo de formularios de login
       - Manejo de formularios de registro
       - Validación básica de campos
    
    3. Calculadora de Precios
       - Cálculo de estimados basado en volumen
       - Validación de campos requeridos
       - Presentación de resultados
    
    4. Navegación
       - Scroll suave a secciones
       - Manejo de eventos de click
    
    5. FAQ Accordion
       - Toggle de preguntas/respuestas
       - Animaciones de expansión/contracción
*/

// ====== VARIABLES GLOBALES ======
// Modales
const authModal = document.getElementById('authModal');
const qrModal = document.getElementById('qrModal');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const closeModal = document.querySelector('.close-modal');
const closeQrModal = document.getElementById('closeQrModal');
const modalTabs = document.querySelectorAll('.modal-tab');
const modalForms = document.querySelectorAll('.modal-form');
const ctaClientBtn = document.getElementById('ctaClientBtn');
const ctaProviderBtn = document.getElementById('ctaProviderBtn');
const heroClientBtn = document.getElementById('heroClientBtn');
const heroProviderBtn = document.getElementById('heroProviderBtn');

// Open modal
loginBtn.addEventListener('click', () => {
    authModal.style.display = 'flex';
    switchTab('login');
});

registerBtn.addEventListener('click', () => {
    authModal.style.display = 'flex';
    switchTab('register');
});

ctaClientBtn.addEventListener('click', () => {
    authModal.style.display = 'flex';
    switchTab('register');
    document.getElementById('userType').value = 'client';
});

ctaProviderBtn.addEventListener('click', () => {
    authModal.style.display = 'flex';
    switchTab('register');
    document.getElementById('userType').value = 'provider';
});

heroClientBtn.addEventListener('click', () => {
    authModal.style.display = 'flex';
    switchTab('register');
    document.getElementById('userType').value = 'client';
});

// Modificamos el comportamiento del botón de descarga para mostrar el QR
heroProviderBtn.addEventListener('click', () => {
    qrModal.style.display = 'flex';
});

// Close modals
closeModal.addEventListener('click', () => {
    authModal.style.display = 'none';
});

closeQrModal.addEventListener('click', () => {
    qrModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === authModal) {
        authModal.style.display = 'none';
    }
    if (e.target === qrModal) {
        qrModal.style.display = 'none';
    }
});

// Switch between login and register tabs
function switchTab(tabName) {
    modalTabs.forEach(tab => {
        if (tab.dataset.tab === tabName) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    modalForms.forEach(form => {
        if (form.id === `${tabName}Form`) {
            form.classList.add('active');
        } else {
            form.classList.remove('active');
        }
    });
}

modalTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        switchTab(tab.dataset.tab);
    });
});

// Form submission
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Inicio de sesión exitoso (simulado)');
    authModal.style.display = 'none';
});

document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const userType = document.getElementById('userType').value;
    if (userType === 'client') {
        alert('Registro de cliente exitoso (simulado)');
    } else if (userType === 'provider') {
        alert('Registro de proveedor exitoso (simulado)');
    }
    authModal.style.display = 'none';
});

// Calculate button
document.querySelector('.calculate-btn').addEventListener('click', () => {
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const volume = document.getElementById('volume').value;
    
    if (!origin || !destination || !volume) {
        alert('Por favor, completa todos los campos para calcular el precio');
        return;
    }
    
    // Simulate price calculation
    const prices = {
        'small': 'S/ 200 - S/ 400',
        'medium': 'S/ 450 - S/ 800',
        'large': 'S/ 900 - S/ 1500'
    };
    
    alert(`Precio estimado para tu mudanza: ${prices[volume]}\n\nNota: Los precios finales pueden variar según servicios adicionales y destinos específicos.`);
});

// FAQ functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentNode;
        item.classList.toggle('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});
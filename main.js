// main.js for Neighbiz app
// Handles modal logic, form submission, and accessibility improvements

// Modal logic
function showSignUp() {
    closeModal();
    document.getElementById('signUpModal').classList.remove('hidden');
    document.getElementById('signUpModal').classList.add('flex');
}

function showUserSignUp() {
    closeModal();
    showUserForm();
}

function showBusinessSignUp() {
    closeModal();
    showBusinessForm();
}

function showUserForm() {
    closeModal();
    document.getElementById('userSignUpForm').classList.remove('hidden');
    document.getElementById('userSignUpForm').classList.add('flex');
}

function showBusinessForm() {
    closeModal();
    document.getElementById('businessSignUpForm').classList.remove('hidden');
    document.getElementById('businessSignUpForm').classList.add('flex');
}

function showSignIn() {
    closeModal();
    document.getElementById('signInForm').classList.remove('hidden');
    document.getElementById('signInForm').classList.add('flex');
}

function showPrivacyPolicy() {
    closeModal();
    document.getElementById('privacyModal').classList.remove('hidden');
    document.getElementById('privacyModal').classList.add('flex');
}

function showTerms() {
    closeModal();
    document.getElementById('termsModal').classList.remove('hidden');
    document.getElementById('termsModal').classList.add('flex');
}

function closeModal() {
    const modals = ['signUpModal', 'userSignUpForm', 'businessSignUpForm', 'signInForm', 'privacyModal', 'termsModal'];
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    });
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modals = ['signUpModal', 'userSignUpForm', 'businessSignUpForm', 'signInForm', 'privacyModal', 'termsModal'];
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (event.target === modal) {
            closeModal();
        }
    });
});

// Form submissions (real backend integration)
const API_BASE = "https://your-backend.onrender.com"; // TODO: Replace with your actual backend URL
document.addEventListener('DOMContentLoaded', function() {
    // Create a reusable modal for messages
    let messageModal = document.createElement('div');
    messageModal.id = 'messageModal';
    messageModal.className = 'fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-50';
    messageModal.innerHTML = `
      <div class="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center relative">
        <h2 id="messageModalTitle" class="text-2xl font-bold text-navy mb-2"></h2>
        <p id="messageModalText" class="text-gray-700 mb-6"></p>
        <button id="messageModalClose" class="bg-teal text-white py-3 px-8 rounded-xl font-semibold hover:bg-opacity-90 transition-colors">OK</button>
        <button onclick="closeModal()" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>
      </div>
    `;
    document.body.appendChild(messageModal);
    function showMessage(title, text) {
      document.getElementById('messageModalTitle').textContent = title;
      document.getElementById('messageModalText').textContent = text;
      messageModal.classList.remove('hidden');
      messageModal.classList.add('flex');
    }
    document.getElementById('messageModalClose').onclick = closeModal;

    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            const isBusinessForm = form.closest('#businessSignUpForm');
            const isUserForm = form.closest('#userSignUpForm');
            const isSignInForm = form.closest('#signInForm');
            let endpoint = '';
            let payload = {};
            if (isBusinessForm) {
                endpoint = API_BASE + '/api/register-business';
                payload = {
                    businessName: form.querySelector('input[placeholder="Enter business name"]').value,
                    ownerName: form.querySelector('input[placeholder="Enter your full name"]').value,
                    email: form.querySelector('input[type="email"]').value,
                    category: form.querySelector('select').value,
                    password: form.querySelector('input[type="password"]').value,
                    appointmentBooking: form.querySelector('#appointmentBooking').checked
                };
            } else if (isUserForm) {
                endpoint = API_BASE + '/api/register-user';
                payload = {
                    firstName: form.querySelector('input[placeholder="Enter your first name"]').value,
                    lastName: form.querySelector('input[placeholder="Enter your last name"]').value,
                    email: form.querySelector('input[type="email"]').value,
                    password: form.querySelector('input[type="password"]').value
                };
            } else if (isSignInForm) {
                endpoint = API_BASE + '/api/login';
                payload = {
                    email: form.querySelector('input[type="email"]').value,
                    password: form.querySelector('input[type="password"]').value
                };
            }
            if (endpoint) {
                try {
                    const res = await fetch(endpoint, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });
                    const data = await res.json();
                    if (res.ok) {
                        showMessage('Success', data.message || 'Success!');
                        closeModal();
                    } else {
                        showMessage('Error', data.error || 'An error occurred.');
                    }
                } catch (err) {
                    showMessage('Network Error', 'Network error. Please try again.');
                }
            } else {
                showMessage('Demo', 'Form submitted successfully!');
                closeModal();
            }
        });
    });
});

// Accessibility: focus trap for modals, ARIA attributes, etc. (to be added as needed)

// Password strength indicator for registration forms
function getPasswordStrength(password) {
    let score = 0;
    if (!password) return 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score;
}

function strengthLabel(score) {
    switch (score) {
        case 5: return {text: 'Strong', color: 'bg-green-500'};
        case 4: return {text: 'Good', color: 'bg-yellow-500'};
        case 3: return {text: 'Medium', color: 'bg-orange-400'};
        case 2: return {text: 'Weak', color: 'bg-red-400'};
        default: return {text: 'Very Weak', color: 'bg-red-600'};
    }
}

function addPasswordStrengthListeners() {
    document.querySelectorAll('#userSignUpForm input[type="password"], #businessSignUpForm input[type="password"]').forEach(input => {
        let indicator = document.createElement('div');
        indicator.setAttribute('aria-live', 'polite');
        indicator.className = 'mt-1 mb-2 h-3 flex items-center';
        input.parentNode.appendChild(indicator);
        input.addEventListener('input', function() {
            const score = getPasswordStrength(input.value);
            const {text, color} = strengthLabel(score);
            indicator.innerHTML = `<div class='w-24 h-2 rounded-full ${color} mr-2'></div><span class='text-xs text-gray-700'>${text}</span>`;
        });
    });
}

document.addEventListener('DOMContentLoaded', addPasswordStrengthListeners);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log('Service worker registered:', reg.scope))
      .catch(err => console.log('Service worker registration failed:', err));
  });
}

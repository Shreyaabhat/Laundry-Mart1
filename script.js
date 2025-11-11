// Initialize EmailJS with your Public Key
(function() {
    emailjs.init("MejprptpnfSVrfaAH");
    console.log("EmailJS initialized successfully");
})();

const cart = {};

function addItem(button) {
    const serviceItem = button.closest('.service-item');
    const serviceId = serviceItem.dataset.service;
    const serviceName = serviceItem.dataset.name;
    const servicePrice = parseFloat(serviceItem.dataset.price);

    if (cart[serviceId]) {
        alert('This service is already in your cart!');
        return;
    }

    cart[serviceId] = {
        name: serviceName,
        price: servicePrice
    };

    button.classList.remove('btn-add');
    button.classList.add('btn-remove');
    button.innerHTML = 'Remove Item <i class="fas fa-minus-circle"></i>';
    button.onclick = function() { removeItem(this); };

    updateCart();
}

function removeItem(button) {
    const serviceItem = button.closest('.service-item');
    const serviceId = serviceItem.dataset.service;

    delete cart[serviceId];

    button.classList.remove('btn-remove');
    button.classList.add('btn-add');
    button.innerHTML = 'Add Item <i class="fas fa-plus-circle"></i>';
    button.onclick = function() { addItem(this); };

    updateCart();
}

function updateCart() {
    const cartTableBody = document.getElementById('cartTableBody');
    const totalAmountElement = document.getElementById('totalAmount');

    if (Object.keys(cart).length === 0) {
        cartTableBody.innerHTML = '<tr><td colspan="3" class="empty-cart">Your cart is empty. Add services to get started!</td></tr>';
        totalAmountElement.textContent = '₹0.00';
        return;
    }

    let html = '';
    let total = 0;
    let index = 1;

    for (const serviceId in cart) {
        const item = cart[serviceId];
        html += `
            <tr>
                <td>${index}</td>
                <td>${item.name}</td>
                <td>₹${item.price.toFixed(2)}</td>
            </tr>
        `;
        total += item.price;
        index++;
    }

    cartTableBody.innerHTML = html;
    totalAmountElement.textContent = `₹${total.toFixed(2)}`;
}

function handleBooking(event) {
    event.preventDefault();
    
    // Check if cart has items
    if (Object.keys(cart).length === 0) {
        alert('Please add at least one service to your cart before booking!');
        return;
    }

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Prepare services list for email
    let servicesList = '';
    let total = 0;
    
    for (const serviceId in cart) {
        const item = cart[serviceId];
        servicesList += `- ${item.name}: ₹${item.price.toFixed(2)}\n`;
        total += item.price;
    }

    // Prepare template parameters
    const templateParams = {
        user_name: fullName,
        user_email: email,
        user_phone: phone,
        services_list: servicesList,
        total_amount: `₹${total.toFixed(2)}`
    };

    // Disable the submit button to prevent multiple submissions
    const submitButton = document.getElementById('book-now');
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    // Send email using EmailJS
    // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual IDs
    emailjs.send("service_8575fv4","template_eqr8ek9", templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Booking successful! A confirmation email has been sent to ' + email);
            
            // Reset form and cart
            document.getElementById('bookingForm').reset();
            
            // Clear cart
            for (const serviceId in cart) {
                delete cart[serviceId];
            }
            
            // Reset all buttons to "Add Item"
            const allButtons = document.querySelectorAll('.btn-remove');
            allButtons.forEach(button => {
                button.classList.remove('btn-remove');
                button.classList.add('btn-add');
                button.innerHTML = 'Add Item <i class="fas fa-plus-circle"></i>';
                button.onclick = function() { addItem(this); };
            });
            
            updateCart();
            
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.textContent = 'Book now';
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send confirmation email. Please try again or contact us directly.');
            
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.textContent = 'Book now';
        });
}

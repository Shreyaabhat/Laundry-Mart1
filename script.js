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
            
            if (Object.keys(cart).length === 0) {
                alert('Please add at least one service to your cart before booking!');
                return;
            }

            alert('Booking successful! We will contact you shortly.');
            
            // Reset form
            event.target.reset();
        }
        document.getElementById("book-btn").addEventListener("click", function() {
    alert("Booking confirmed!");
  });

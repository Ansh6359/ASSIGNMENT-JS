document.addEventListener('DOMContentLoaded', function () {
    // Dynamically add student info
    document.getElementById('student-info').innerText = 'Student ID: 200542632, Name: Ansh Patel';
});

function submitOrder() {
    // Capture form values
    var pizzaSize = document.getElementById('pizza-size').value;
    var crustType = document.getElementById('crust-type').value;
    var toppings = document.getElementById('toppings').value;
    var quantity = document.getElementById('quantity').value;
    var deliveryAddress = document.getElementById('delivery-address').value;
    var deliveryTime = document.getElementById('delivery-time').value;

    // Create Pizza object
    var pizzaOrder = new Pizza(pizzaSize, crustType, toppings, quantity, deliveryAddress, deliveryTime);

    // Display pizza description
    document.getElementById('pizza-description').innerText = pizzaOrder.getDescription();
}

// Pizza class
class Pizza {
    constructor(size, crust, toppings, quantity, deliveryAddress, deliveryTime) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.quantity = quantity;
        this.deliveryAddress = deliveryAddress;
        this.deliveryTime = deliveryTime;
    }

    getDescription() {
        return `You ordered ${this.quantity} ${this.size} pizza(s) with ${this.crust} crust, ${this.toppings} toppings. 
        It will be delivered to ${this.deliveryAddress} by ${this.deliveryTime}.`;
    }
}

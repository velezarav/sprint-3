// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
// 1. Loop for to the array products to get the item to add to cart
// 2. Add found product to the cartList array
function buy(id) {
    for (let product of products) {
        if (product.id === id) {
            cartList.push(product);
        }
    }
}

// Exercise 2
function cleanCart() {
    cartList = [];
}

// Exercise 3
// Calculate total price of the cart using the "cartList" array
function calculateTotal() {
    let totalCompra = 0;
    for (let product of cartList) {
        let priceProduct = product.price;
        totalCompra += priceProduct;
    }
    return totalCompra;
}

// Exercise 4
function generateCart(cartlist) {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    cart = [];
    for (let product of cartList) {
        let encontrado = false;
        for (let productCart of cart) {
            if (productCart.id === product.id) {
                encontrado = true;
                productCart.quantity++;
                product.subtotal = product.quantity * product.price;
                break;
            }
        }
        if (encontrado === false) {
            product.quantity = 1;
            cart.push(product);
            product.subtotal = product.quantity * product.price;
        }
    }
    return cart;
}

// Exercise 5
function applyPromotionsCart(cart) {
    // Apply promotions to each item in the array "cart"

    for (let product of cart) {
        if (product.id === 1 && product.quantity >= 3) {
            product.subtotalWithDiscount = product.quantity * 10;
        } else if (product.id === 3 && product.quantity >= 10) {
            product.subtotalWithDiscount = ((product.subtotal * 2) / 3);
        }
    }

    return cart;

    // in cart iterar y encontrar id 1
    // si la cantidad es igual o mayor a 3 => agregar subtotalWithDiscount: 10 * this.quantity

    // in cart iterar y encontrar id 3
    // si la cantidad es igual o mayor a 10 => subtotalWithDiscount: (this.quantity * 2) / 3



}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 9
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}

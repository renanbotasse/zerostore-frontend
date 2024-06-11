// utils/cartUtils.ts

import { ProductState, CartItem } from './types'; // Adjust the import path as necessary

const triggerCartUpdate = () => {
    const event = new Event('cartUpdate');
    window.dispatchEvent(event);
};

export const addToCart = (product: ProductState, quantity: number) => {
    // Get the existing cart from local storage or initialize an empty array
    const cartJSON = localStorage.getItem('cart');
    let cart: CartItem[] = cartJSON ? JSON.parse(cartJSON) : [];

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex((item: CartItem) => item.product_reference === product.product_reference);
    if (existingProductIndex >= 0) {
        // Update the quantity of the existing product
        cart[existingProductIndex].quantity += quantity;
    } else {
        // Add the new product to the cart with the specified quantity
        cart.push({ ...product, quantity });
    }

    // Save the updated cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
    triggerCartUpdate();
};

export const getCartCount = (): number => {
    const cartJSON = localStorage.getItem('cart');
    const cart: CartItem[] = cartJSON ? JSON.parse(cartJSON) : [];
    return cart.reduce((count, item) => count + item.quantity, 0);
};
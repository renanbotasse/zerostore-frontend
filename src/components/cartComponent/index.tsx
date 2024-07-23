import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const navigateTo = useNavigate(); // 

    useEffect(() => {
        // Recupera os itens do carrinho do localStorage
        const storedCartItems = JSON.parse(localStorage.getItem('cart') || '[]');
        setCartItems(storedCartItems);
    }, []);

    useEffect(() => {
        // Calcula o preço total dos itens no carrinho
        const totalPrice = cartItems.reduce((total, item) => total + item.product_price * item.quantity, 0);
        setTotalPrice(totalPrice);
    }, [cartItems]);

    const handleQuantityChange = (index, newQuantity) => {
        const newCartItems = [...cartItems];
        newCartItems[index].quantity = newQuantity;
        setCartItems(newCartItems);
        localStorage.setItem('cart', JSON.stringify(newCartItems));
    };

    const handleRemoveItem = (index) => {
        const newCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(newCartItems);
        localStorage.setItem('cart', JSON.stringify(newCartItems));
    };

    const handleShopMore = () => {
        navigateTo('/');
    }

    const handleCheckout = async () => {
        const cartData = cartItems.map(item => ({
            product_reference: item.product_reference,
            quantity: item.quantity
        }));

        // Check if the "token" key exists in local storage
        const token = localStorage.getItem('Token');

        if (token) {
            localStorage.setItem('checkout', JSON.stringify(cartData));
            console.log(cartData)
            localStorage.removeItem('cart');

            // Make POST request to create order
            try {
                const response = await axios.patch('http://51.20.53.161:3000/cart', {
                    cart: cartData
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': token
                    }
                });
                console.log('Order created successfully:', response.data);
                // Navigate to the checkout page after order creation
                navigateTo('/checkout');
            } catch (error) {
                console.error('Error creating order:', error);
                // Handle error appropriately (e.g., show error message to user)
            }
        } else {
            // If token does not exist, navigate to /checkout/sign
            navigateTo('/checkout/sign');
        }
    }

    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 pt-28 m-10">
                <h2 className="text-2xl font-bold mb-4">CART</h2>
                {cartItems.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 border-b py-4">
                        <img src={item.product_img[0]} alt={item.product_name} className="w-20 h-20 object-contain" />
                        <div>
                            <h3 className="text-lg font-bold">{item.product_name}</h3>
                            <p className="text-gray-600">Price per unit: ${item.product_price}</p>
                            <div className="flex items-center">
                                <label htmlFor={`quantity-${index}`} className="mr-2">Quantity:</label>
                                <select
                                    id={`quantity-${index}`}
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                                    className="border border-gray-300 rounded-md p-1 mr-2"
                                >
                                    {[...Array(10).keys()].map((num) => (
                                        <option key={num + 1} value={num + 1}>{num + 1}</option>
                                    ))}
                                </select>
                                <button
                                    className="bg-red-500 text-white px-2 py-1 rounded-md"
                                    onClick={() => handleRemoveItem(index)}
                                >
                                    Remove
                                </button>
                            </div>
                            <p className="text-gray-600">Total: ${item.product_price * item.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="md:w-1/2 pt-24 m-10">
                <div className="mt-8">
                    <h3 className="text-xl font-bold mb-2">Resume</h3>
                    {cartItems.map((item, index) => (
                        <div key={index} className="flex justify-between mb-2">
                            <span>{item.quantity}x {item.product_name}</span>
                            <span>${item.product_price * item.quantity}</span>
                        </div>
                    ))}
                    <hr className="my-2" />
                    <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>${totalPrice}</span>
                    </div>
                </div>
                <div className="mt-8">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleShopMore}>Shop More</button>
                    <button className="ml-4 bg-green-500 text-white px-4 py-2 rounded-md" onClick={handleCheckout}>Checkout</button>
                </div>
            </div>
        </div>
    );
}

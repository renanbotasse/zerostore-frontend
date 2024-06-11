// src/components/CartIcon.tsx
import React, { useState, useEffect } from 'react';
import { SfIconShoppingCart } from '@storefront-ui/react';
import { getCartCount } from '../../utils/cartAdd';
import { useNavigate } from 'react-router-dom';

const CartIcon = () => {
    const [cartCount, setCartCount] = useState<number>(0);

    const navigateTo = useNavigate(); // 

    useEffect(() => {
        const updateCartCount = () => {
            setCartCount(getCartCount());
        };

        // Initial count
        updateCartCount();

        // Add an event listener to update the cart count when items are added
        window.addEventListener('storage', updateCartCount);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('storage', updateCartCount);
        };
    }, []);

    const handleCheckout = () => {
        navigateTo('/checkout');
    }
    console.log(cartCount)
    return (
        <div className="relative text-white bg-transparent hover:bg-white hover:text-black active:bg-white active:text-black rounded p-1">
            <SfIconShoppingCart  className="w-[32px] h-[32px]" onClick={handleCheckout} />
            {cartCount > 0 && (
                <span className=" w-8 h-4 absolute top-5 right-4 rounded-full bg-red-300 text-black font-extrabold text-sm flex items-center justify-center active:bg-white active:text-black">
                    {cartCount}
                </span>
            )}
        </div>
    );
};

export default CartIcon;

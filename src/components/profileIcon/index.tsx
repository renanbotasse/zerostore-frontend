// src/components/CartIcon.tsx
import React, { useState, useEffect } from 'react';
import { SfIconPerson } from '@storefront-ui/react';
import { useNavigate } from 'react-router-dom';

const ProfileIcon = () => {
    const [hasToken, setHasToken] = useState<boolean>(false);
    const navigateTo = useNavigate();

    useEffect(() => {
        const checkToken = () => {
            setHasToken(!!localStorage.getItem('Token'));
        };

        // Initial check
        checkToken();

        // Add an event listener to update the token status when localStorage changes
        window.addEventListener('storage', checkToken);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('storage', checkToken);
        };
    }, []);

    const handleProfileClick = () => {
        if (hasToken == false) {
            navigateTo('/sign');
        } else {
            navigateTo('/profile');
        }
    };

    return (
        <div className="relative text-white bg-transparent hover:bg-white hover:text-black active:bg-white active:text-black rounded p-1">
            <SfIconPerson className="w-[32px] h-[32px]" onClick={handleProfileClick} />
            {hasToken && (
                <span className="absolute top-5 right-4 rounded-full bg-green-300 text-black font-extrabold text-sm flex items-center justify-center active:bg-white active:text-black">
                    on
                </span>
            )}
        </div>
    );
};

export default ProfileIcon;

import { SfButton } from '@storefront-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {serverToken, userCart, userAddress, userInfo, userCheckout } from './reviewCheckoutData';


export default function ReviewCheckout() {

    const [token, setToken] = useState();
    const navigateTo = useNavigate();

    useEffect(() => {
        const tokenCheck = JSON.parse(localStorage.getItem('cart') || '[]');
        setToken(tokenCheck);
    }, []);

    if (token !== '') {
//1 - VERIFICA SE O JWT É VALIDO
        const userToken = serverToken;
//2 - SALVA NO BACK O CART
        const userCartFront = userCart;
//3 - PEDE DO BACK O CART, ENDEREÇO e INFO
        const userCheckoutCartFront = userCheckout;
        const userCheckoutAddress = userAddress;
        const userCheckoutInfo = userInfo;        
    } else {
        navigateTo('/checkout/sing');
    }

//5 Alterar a quantidade e atualizar no back (igual cart)
//6 Alterar endereço para entrega (igual cart)



    const navigateTo = useNavigate(); // 

    const handleRegister = () => {
        navigateTo('/register');
    }

    const handleSignIn = () => {
        const token = 'JWT'
        localStorage.setItem('token', JSON.stringify(token));
        navigateTo('/checkout');
    }

    return (
        <div className="flex flex-wrap gap-4 lg:gap-6 lg:flex-nowrap pt-36 pb-4 justify-center">
            {cardDetails.map(({ image, title, description, button1, button2 }) => (
                <div
                    key={title}
                    className="flex flex-col min-w-[400px] max-w-[400px] lg:w-[400px] relative border border-neutral-200 rounded-md hover:shadow-xl"
                >
                    <img src={image} alt={title} className="object-cover h-auto rounded-t-md" />

                    <div className="flex flex-col grow ">
                    <p className="font-medium typography-text-base  bg-white p-1 ">{title}</p>
                        <div className="flex justify-between mr-16 ml-16 pb-4">
                        <SfButton size="sm" variant="tertiary" className="relative mt-auto bg-gray-700 text-white hover:bg-yellow-700 hover:text-white active:bg-gray-700 active:text-white" onClick={handleRegister}>
                            {button1}
                        </SfButton>
                        <SfButton size="sm" variant="tertiary" className="relative mt-auto bg-red-900 text-white hover:bg-yellow-700 hover:text-white active:bg-red-900 active:text-white" onClick={handleSignIn}>
                            {button2}
                        </SfButton>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

//1 Verificar JWT

//2 Request - Salvar Cart do usuário

//3 Request - Pedir cart do usuário salvo para montar a página

//4 Request - Pedir endereço do Usuario

//8 Payment - Confirma valor da página com valor do back, sendo OK, manda para usário par ao serviço de pagamento

//9 Pagamento gerando Invoice, encaminha para profile/orders/ID


//5 Request - Permitir usuário alterar a quantidade e atualizar no back
//6  Permitir usuário alterar endereço para entrega específica
//7 Alterar informação pessoal só na página profile/info

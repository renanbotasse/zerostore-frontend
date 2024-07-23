import { SfButton } from '@storefront-ui/react';
import { FormEventHandler, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewOrderDelivery() {
    const navigate = useNavigate();
    const [deliveryInfo, setDeliveryInfo] = useState('');
    const [userId, setUserId] = useState(null); // Estado para armazenar o userId

    useEffect(() => {
        const fetchUserInfo = async () => {
            const jwtToken = localStorage.getItem('Token');
            try {
                const response = await fetch('http://51.20.53.161:3000/user/userId', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${jwtToken}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }

                const userData = await response.json();

                const address = userData.address[0]; // Assume the first address is the delivery address

                const info = `
                    Name: ${userData.name}
                    Email: ${userData.email}
                    Fiscal Number: ${userData.fiscalNumber}
                    Address: ${address.street}, ${address.numberAddress}, ${address.complement}
                    City: ${address.city}
                    State: ${address.state}
                    Country: ${address.country}
                    ZIP: ${address.zipCode}
                `;
                setDeliveryInfo(info);
                setUserId(userData.userId); // Armazena o userId no estado
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserInfo();
    }, []);

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        // Get token from localStorage
        const jwtToken = localStorage.getItem('Token');

        try {
            const response = await fetch('http://51.20.53.161:3000/order/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}`,
                },
                body: JSON.stringify({ userId: userId, amountPayments: 1 }), // Inclui userId no corpo da requisição
            });

            if (!response.ok) {
                throw new Error('Failed to submit order');
            }

            const responseData = await response.json();
            console.log('Order submitted successfully:', responseData);

            // Extract orderId from response and navigate to order details page
            const orderId = responseData.order.orderId;
            localStorage.setItem('orderId', JSON.stringify(orderId));
            navigate('/profile/neworder');
        } catch (error) {
            console.error('Error submitting order:', error);
        }
    };

    return (
        <form className="pt-32 flex p-6 gap-4 flex-wrap text-neutral-900" onSubmit={handleSubmit}>
            <h2 className="w-full typography-headline-4 md:typography-headline-3 font-bold">Billing & Delivery Information</h2>
            
            <label className="w-full flex flex-col gap-0.5">
                <span className="typography-text-sm font-medium">Order Details</span>
                <textarea 
                    className="border p-2 rounded-md"
                    readOnly
                    value={deliveryInfo}
                    rows={10}
                />
            </label>
        </form>
    );
}

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProfileOrdersProducts from './profileOrdersProducts';


export default function ProfileOrders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrderData = async () => {
            const jwtToken = localStorage.getItem('Token');
            if (!jwtToken) {
                setError('User is not authenticated');
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get('http://localhost:3000/order', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${jwtToken}`,
                    },
                });

                if (!response.data || response.data.length === 0) {
                    throw new Error('No orders found');
                }

                setOrders(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching order data:', error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchOrderData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {orders.map((orderData, index) => (
                <div key={index} className='flex-1'>
                    <ProfileOrdersProducts order={orderData} />
                </div>
            ))}
        </div>
    );
}

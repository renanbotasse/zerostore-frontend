import { useEffect, useState } from 'react';
import NewOrderProducts from './newOrderProducts';
import NewOrderUserInfo from './newOrderAddress';


export default function NewOrderFinalPage() {
    const [orderData, setOrderData] = useState(null);
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
                const response = await fetch('http://localhost:3000/order/neworder', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${jwtToken}`, // Fixing the issue here
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch order data');
                }

                const data = await response.json();
                setOrderData(data);
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
        <div className='flex flex-col md:flex-row items-center justify-center'>
            <div className='flex-1'>
                <NewOrderProducts order={orderData} />
            </div>
            <div className='flex-1'>
                <NewOrderUserInfo />
            </div>
        </div>
    );
}

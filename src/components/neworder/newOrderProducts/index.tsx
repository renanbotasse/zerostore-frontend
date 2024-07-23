import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function NewOrderProducts({ order }) {
    const [productDetails, setProductDetails] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [deliveryLimit, setDeliveryLimit] = useState('');

    useEffect(() => {
        const fetchProductDetails = async () => {
            if (!order || !order.orderProducts) return; // Verifica se order ou order.orderProducts estão definidos

            try {
                const detailsPromises = order.orderProducts.map(async (product) => {
                    const response = await axios.get(`http://51.20.53.161:3000/products/${product.product_reference}`);
                    return { ...response.data, ...product };
                });

                const details = await Promise.all(detailsPromises);
                setProductDetails(details);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchProductDetails();
    }, [order]);

    useEffect(() => {
        // Verifica se productDetails e order estão definidos antes de processar
        if (!productDetails.length || !order || !order.order || !order.order.date) return;

        // Calcula o preço total dos itens no pedido
        const totalPrice = productDetails.reduce((total, item) => total + item.price * item.quantity, 0);
        setTotalPrice(totalPrice);

        // Calcula a data limite de entrega (20 dias após a data do pedido)
        const orderDate = new Date(order.order.date);
        const deliveryDate = new Date(orderDate.setDate(orderDate.getDate() + 20));
        const formattedDeliveryDate = deliveryDate.toISOString().split('T')[0]; // Formato YYYY-MM-DD
        setDeliveryLimit(formattedDeliveryDate);
    }, [order, productDetails]);

    return (
        <div className="flex flex-col md:flex-col pl-20">
            <div className="md:w-1/3 pt-28 m-5">
                <h2 className="text-2xl font-bold mb-4">ORDER COMPLETE #{order.order.orderId} ✅</h2>
                {productDetails.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 border-b py-4">
                        <img src={item.product_img[0]} alt={item.product_name} className="w-20 h-20 object-contain" />
                        <div>
                            <h3 className="text-lg font-bold">{item.product_name}</h3>
                            <p className="text-gray-600">Price per unit: ${item.price}</p>
                            <div className="flex items-center">
                                <label htmlFor={`quantity-${index}`} className="mr-2">Quantity: {item.quantity}</label>
                            </div>
                            <p className="text-gray-600">Total: ${item.price * item.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="md:w-1/2 m-5">
                <div className="mt-8">
                    <h3 className="text-xl font-bold mb-2">Resume</h3>
                    <div className="flex justify-between mb-2">
                        <span>Payment ID:</span>
                        <span>{order.order.paymentId}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Date:</span>
                        <span>{order.order.date ? order.order.date.split('T')[0] : '-'}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Delivery Limit:</span>
                        <span>{deliveryLimit}</span>
                    </div>
                    {productDetails.map((item, index) => (
                        <div key={index} className="flex justify-between mb-2">
                            <span>{item.quantity}x {item.product_name}</span>
                            <span>${item.price * item.quantity}</span>
                        </div>
                    ))}
                    <hr className="my-2" />
                    <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>${totalPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

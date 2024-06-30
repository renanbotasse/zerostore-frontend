import { SfInput, SfButton } from '@storefront-ui/react';
import { FormEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';

const countries = ['Germany', 'Great Britain', 'Poland', 'United States of America'] as const;
const states = ['California', 'Florida', 'New York', 'Texas'] as const;

export default function CreditCardForm() {
    const navigate = useNavigate();

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;

        // data can be accessed in form of FormData
        const formData = new FormData(form);
        // or JSON object
        const formJSON = Object.fromEntries(formData.entries());

        // Add your additional data
        const requestBody = {
            ...formJSON,
            amountPayments: 1,
        };

        // Get token from localStorage
        const jwtToken = localStorage.getItem('Token');

        try {
            const response = await fetch('http://localhost:3000/order/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}`,
                },
                body: JSON.stringify(requestBody),
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
            <h2 className="w-full typography-headline-4 md:typography-headline-3 font-bold">Billing address</h2>
            <label className="w-full flex flex-col gap-0.5">
                <span className="typography-text-sm font-medium">Cardholder Name</span>
                <SfInput name="cardholderName" autoComplete="cc-name" required />
            </label>
            <label className="w-full flex flex-col gap-0.5">
                <span className="typography-text-sm font-medium">Card Number</span>
                <SfInput 
                    name="cardNumber" 
                    autoComplete="cc-number" 
                    type="number" 
                    required 
                />
            </label>
            <label className="w-full flex flex-col gap-0.5">
                <span className="typography-text-sm font-medium">Expiration Date</span>
                <SfInput 
                    name="expirationDate" 
                    autoComplete="cc-exp" 
                    placeholder="MM/YY" 
                    required 
                />
            </label>
            <label className="w-full flex flex-col gap-0.5">
                <span className="typography-text-sm font-medium">CVC</span>
                <SfInput 
                    name="cvc" 
                    autoComplete="cc-csc" 
                    type="number" 
                    required 
                />
            </label>
            
            <div className="w-full md:flex-grow-0">
                <SfButton type="submit" className="w-full md:flex-grow-0">
                    Order
                </SfButton>
            </div>
        </form>
    );
}

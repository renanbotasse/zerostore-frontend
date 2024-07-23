import { useState } from 'react';
import { SfButton, SfInput, SfIconEmail } from '@storefront-ui/react';
import { useNavigate } from 'react-router';

export default function SignInForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const sendForm = async (event) => {
        event.preventDefault();

        const userPersonalData = {
            email,
            password,
        };

        try {
            // Step 1: Register the user
            const registerResponse = await fetch('http://51.20.53.161:3000/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userPersonalData)
            });

            if (!registerResponse.ok) {
                throw new Error('Failed to register user');
            }

            const registerData = await registerResponse.json();
            const jwtToken = registerData.accessToken;

            // Save accessToken to localStorage
            localStorage.setItem('Token', jwtToken);
            console.log(jwtToken)

            // Step 2: Update the user address
            const responseGetCart = await fetch('http://51.20.53.161:3000/cart', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': jwtToken
                }
            });

            if (!responseGetCart.ok) {
                throw new Error('Failed to update address');
            }
            const cartData = await responseGetCart.json();

            // Transform cartData into the desired format
            const formattedCart = cartData.cart.map(item => ({
                product_reference: item.product.product_reference,
                product_name: item.product.product_name,
                product_description: item.product.product_description,
                product_price: item.price,
                product_quantity: item.quantity,
                product_platform: item.product.product_platform,
                product_type: item.product.product_type,
                product_img: item.product.product_img,
                product_video: item.product.product_video,
                product_status: item.product.product_status,
                quantity: item.quantity // assuming quantity is also needed
            }));

            // Save formattedCart to localStorage
            localStorage.setItem('cart', JSON.stringify(formattedCart));

            console.log('Cart updated:', formattedCart);
            
            setEmail('');
            setPassword('');
            setErrorMessage(''); // Clear any previous error message
            ///GET CART///
            navigate('/');

        } catch (error) {
            console.error('Error:', error.message);
            setErrorMessage('Failed to signin. Please try again.');
        }
    };

    return (
        <div className="px-4 pt-32 pb-8">
            <h1 className="mb-4 typography-headline-4 font-bold">Please SignIn</h1>
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
            <form onSubmit={sendForm}>
                <label className="block my-4">
                    <span className="typography-label-sm font-medium">Email *</span>
                    <SfInput
                        value={email}
                        type="email"
                        required
                        slotPrefix={<SfIconEmail />}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </label>
                <label className="block my-4">
                    <span className="typography-label-sm font-medium">Password *</span>
                    <SfInput
                        value={password}
                        type="password"
                        required
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </label>
                <div className="flex gap-x-4 md:justify-end mt-6">
                    <SfButton variant="secondary" className="flex-grow md:flex-grow-0">
                        Clear all
                    </SfButton>
                    <SfButton type="submit" className="flex-grow md:flex-grow-0">
                        Submit
                    </SfButton>
                </div>
            </form>
        </div>
    );
}

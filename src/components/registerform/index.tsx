import { useState } from 'react';
import { SfButton, SfInput, SfIconEmail } from '@storefront-ui/react';
import { useNavigate } from 'react-router';

export default function RegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fiscalNumber, setFiscalNumber] = useState('');
    const [street, setStreet] = useState('');
    const [numberAddress, setNumberAddress] = useState('');
    const [complement, setComplement] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const sendForm = async (event) => {
        event.preventDefault();

        const userPersonalData = {
            name,
            email,
            password,
            fiscalNumber
        };

        const userAddressData = {
            street,
            numberAddress: parseInt(numberAddress), // Convert to number
            complement,
            city,
            state,
            country,
            zipCode,
        };

        try {
            // Step 1: Register the user
            const registerResponse = await fetch('http://localhost:3000/user', {
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
            const updateAddressResponse = await fetch('http://localhost:3000/address', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': jwtToken
                },
                body: JSON.stringify(userAddressData)
            });

            if (!updateAddressResponse.ok) {
                throw new Error('Failed to update address');
            }

            const updateAddressData = await updateAddressResponse.json();
            console.log('Address updated:', updateAddressData);

            // Clear form after successful submission
            setName('');
            setEmail('');
            setPassword('');
            setFiscalNumber('');
            setStreet('');
            setNumberAddress('');
            setComplement('');
            setCity('');
            setState('');
            setCountry('');
            setZipCode('');
            setErrorMessage(''); // Clear any previous error message

            alert('Registration successful!');
            navigate('/');
            
        } catch (error) {
            console.error('Error:', error.message);
            setErrorMessage('Failed to register or update address. Please try again.');
        }
    };

    return (
        <div className="px-4 pt-32 pb-8">
            <h1 className="mb-4 typography-headline-4 font-bold">Personal information</h1>
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
            <form onSubmit={sendForm}>
                <label>
                    <span className="typography-label-sm font-medium">Name *</span>
                    <SfInput
                        value={name}
                        required
                        onChange={(event) => setName(event.target.value)}
                    />
                </label>
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
                <label className="block my-4">
                    <span className="typography-label-sm font-medium">Fiscal Number *</span>
                    <SfInput
                        value={fiscalNumber}
                        required
                        onChange={(event) => setFiscalNumber(event.target.value)}
                    />
                </label>
                <h1 className="mb-4 typography-headline-4 font-bold">Address information</h1>
                <label className="block my-4">
                    <span className="typography-label-sm font-medium">Street *</span>
                    <SfInput
                        value={street}
                        required
                        onChange={(event) => setStreet(event.target.value)}
                    />
                </label>
                <label className="block my-4">
                    <span className="typography-label-sm font-medium">Number *</span>
                    <SfInput
                        value={numberAddress}
                        type="number" // Ensure input type is number for number fields
                        required
                        onChange={(event) => setNumberAddress(event.target.value)}
                    />
                </label>
                <label className="block my-4">
                    <span className="typography-label-sm font-medium">Complement</span>
                    <SfInput
                        value={complement}
                        onChange={(event) => setComplement(event.target.value)}
                    />
                </label>
                <label className="block my-4">
                    <span className="typography-label-sm font-medium">City *</span>
                    <SfInput
                        value={city}
                        required
                        onChange={(event) => setCity(event.target.value)}
                    />
                </label>
                <label className="block my-4">
                    <span className="typography-label-sm font-medium">State *</span>
                    <SfInput
                        value={state}
                        required
                        onChange={(event) => setState(event.target.value)}
                    />
                </label>
                <label className="block my-4">
                    <span className="typography-label-sm font-medium">Country *</span>
                    <SfInput
                        value={country}
                        required
                        onChange={(event) => setCountry(event.target.value)}
                    />
                </label>
                <label className="block my-4">
                    <span className="typography-label-sm font-medium">Zip Code *</span>
                    <SfInput
                        value={zipCode}
                        required
                        onChange={(event) => setZipCode(event.target.value)}
                    />
                </label>
                <p className="text-neutral-500 typography-text-sm mt-8">* marked fields are required</p>
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

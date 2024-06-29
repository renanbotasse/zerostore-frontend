import { useState, useEffect } from 'react';
import { SfButton, SfInput, SfIconEmail } from '@storefront-ui/react';
import { useNavigate } from 'react-router';

export default function CheckoutRegisterForm() {
    const [name, setName] = useState('');
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

    useEffect(() => {
        const fetchUserData = async () => {
            const jwtToken = localStorage.getItem('Token');
            if (jwtToken) {
                try {
                    const response = await fetch('http://localhost:3000/user/userId', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${jwtToken}`
                        }
                    });

                    if (!response.ok) {
                        throw new Error('Failed to fetch user data');
                    }

                    const userData = await response.json();
                    setName(userData.name);
                    setFiscalNumber(userData.fiscalNumber);

                    if (userData.address && userData.address.length > 0) {
                        const address = userData.address[0];
                        setStreet(address.street);
                        setNumberAddress(address.numberAddress.toString());
                        setComplement(address.complement);
                        setCity(address.city);
                        setState(address.state);
                        setCountry(address.country);
                        setZipCode(address.zipCode);
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            }
        };

        fetchUserData();
    }, []);

    const handleEdit = () => {
        navigate('/profile/dashboard');
    };

    return (
        <div className="px-4 pt-32 pb-8">
            <h1 className="mb-4 typography-headline-4 font-bold">Personal information</h1>
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
            <form>
                <label>
                    <span className="typography-label-sm font-medium">Name *</span>
                    <SfInput
                        value={name}
                        readOnly
                    />
                </label>
                <label className="block my-4">
                    <span className="typography-label-sm font-medium">Fiscal Number *</span>
                    <SfInput
                        value={fiscalNumber}
                        readOnly
                    />
                </label>
                <h1 className="mb-4 typography-headline-4 font-bold">Address information</h1>
                <label className="block my-4">
                    <span className="typography-label-sm font-medium">Street *</span>
                    <SfInput
                        value={street}
                        readOnly
                    />
                </label>
                <label className="block my-4">
                    <span className="typography-label-sm font-medium">Number *</span>
                    <SfInput
                        value={numberAddress}
                        type="number"
                        readOnly
                    />
                </label>
                <label className="block my-4">
                    <span className="typography-label-sm font-medium">Complement</span>
                    <SfInput
                        value={complement}
                        readOnly
                    />
                </label>
                <label className="block my-4">
                    <span className="typography-label-sm font-medium">City</span>
                    <SfInput
                        value={city}
                        readOnly
                    />
                </label>
                <label className="block my-4">
                    <span className="typography-label-sm font-medium">State</span>
                    <SfInput
                        value={state}
                        readOnly
                    />
                </label>
                <label className="block my-4">
                    <span className="typography-label-sm font-medium">Country</span>
                    <SfInput
                        value={country}
                        readOnly
                    />
                </label>
                <label className="block my-4">
                    <span className="typography-label-sm font-medium">Zip Code</span>
                    <SfInput
                        value={zipCode}
                        readOnly
                    />
                </label>
                <div>
                    <SfButton type="button" className="w-full md:flex-grow-0" onClick={handleEdit}>
                        Edit
                    </SfButton>
                </div>
            </form>
        </div>
    );
}

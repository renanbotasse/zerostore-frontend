import { useState, useEffect } from 'react';
import { SfButton, SfInput, SfIconEmail } from '@storefront-ui/react';
import { useNavigate } from 'react-router';

export default function ProfileUserForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [fiscalNumber, setFiscalNumber] = useState('');
    const [street, setStreet] = useState('');
    const [numberAddress, setNumberAddress] = useState('');
    const [complement, setComplement] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState(''); // Estado para armazenar mensagem de erro ou sucesso
    const [isSuccess, setIsSuccess] = useState(false); // Estado para verificar se a operação foi bem-sucedida

    const navigate = useNavigate();



    useEffect(() => {
        const fetchUserData = async () => {
            const jwtToken = localStorage.getItem('Token');
            if (jwtToken) {
                try {
                    const response = await fetch('http://51.20.53.161:3000/user/userId', {
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
                    setEmail(userData.email);
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

    const sendUpdateUser = async (event) => {
        event.preventDefault();

        const userPersonalData = {
            name,
            email,
            fiscalNumber,
        };

        const jwtToken = localStorage.getItem('Token');

        try {
            const response = await fetch('http://51.20.53.161:3000/user/update-info', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}`,
                },
                body: JSON.stringify(userPersonalData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to update user information');
            }

            const responseData = await response.json();
            setSuccessMessage('User information updated successfully!');
            setErrorMessage('');

        } catch (error) {
            setSuccessMessage('');
            setErrorMessage(error.message);
        }
    };

    const sendUpdatePassword = async (event) => {
        event.preventDefault();

        const userPassword = {
            newPassword: newPassword,
            lastPassword: oldPassword
        };

        const jwtToken = localStorage.getItem('Token');
        if (jwtToken) {
            try {
                const response = await fetch('http://51.20.53.161:3000/user', {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${jwtToken}`
                    },
                    body: JSON.stringify(userPassword),
                });
                if (!response.ok) {
                    throw new Error('Failed to update password');
                }

                // Handle successful password update
                const responseData = await response.json();
                console.log('Password updated successfully:', responseData);
                setMessage('Success to Update');
                setIsSuccess(true);
            } catch (error) {
                console.error('Error updating password:', error);
                setMessage('Failed to update password. Please try again.');
                setIsSuccess(false);
            }
        } else {
            setMessage('Authorization token not found.');
            setIsSuccess(false);
        }
    };


    const sendUpdateAddress = async (event) => {
        event.preventDefault();

        const addressData = {
            street,
            numberAddress: parseInt(numberAddress),
            complement,
            city,
            state,
            country,
            zipCode
        };
        console.log(addressData)

        const jwtToken = localStorage.getItem('Token');
        if (jwtToken) {
            try {
                const response = await fetch('http://51.20.53.161:3000/address', {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': jwtToken
                    },
                    body: JSON.stringify(addressData),
                });
                if (!response.ok) {
                    throw new Error('Failed to update address');
                }

                // Handle successful address update
                const responseData = await response.json();
                console.log('Address updated successfully:', responseData);
                setMessage('Success to Update Address');
                setIsSuccess(true);
            } catch (error) {
                console.error(error);
                setMessage('Failed to update address. Please try again.');
                setIsSuccess(false);
            }
        } else {
            setMessage('Authorization token not found.');
            setIsSuccess(false);
        }
    };


    const handleOrders = () => {
        navigate('/profile/orders');
    };


    return (
        <div className='flex flex-row'>
            <div className='flex-1'>
                <div className="px-4 pt-32 pb-8">
                    <h1 className="mb-4 typography-headline-4 font-bold">Personal information</h1>
                    {errorMessage && <p className="text-red-600">{errorMessage}</p>}
                    {successMessage && <p className="text-green-600">{successMessage}</p>}
                    <form onSubmit={sendUpdateUser}>
                        <label>
                            <span className="typography-label-sm font-medium">Name *</span>
                            <SfInput
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </label>
                        <label className="block my-4">
                            <span className="typography-label-sm font-medium">Fiscal Number *</span>
                            <SfInput
                                value={fiscalNumber}
                                onChange={(event) => setFiscalNumber(event.target.value)}
                            />
                        </label>
                        <label className="block my-4">
                            <span className="typography-label-sm font-medium">Email *</span>
                            <SfInput
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </label>
                        <div className="flex gap-x-4 md:justify-end mt-6">
                            <SfButton type="submit" className="flex-grow md:flex-grow-0">
                                Submit
                            </SfButton>
                        </div>
                    </form>
                </div>
                <div className="px-4 pt-2 pb-8">
                    <h1 className="mb-4 typography-headline-4 font-bold">Update Password</h1>
                    {message && (
                        <p className={isSuccess ? 'text-green-600' : 'text-red-600'}>
                            {message}
                        </p>
                    )}
                    <form onSubmit={sendUpdatePassword}>
                        <label className="block my-4">
                            <span className="typography-label-sm font-medium">Old Password *</span>
                            <SfInput
                                value={oldPassword}
                                type="password"
                                required
                                onChange={(event) => setOldPassword(event.target.value)}
                            />
                        </label>
                        <label className="block my-4">
                            <span className="typography-label-sm font-medium">New Password *</span>
                            <SfInput
                                value={newPassword}
                                type="password"
                                required
                                onChange={(event) => setNewPassword(event.target.value)}
                            />
                        </label>
                        <div className="flex gap-x-4 md:justify-end mt-6">
                            <SfButton type="submit" className="flex-grow md:flex-grow-0">
                                Submit
                            </SfButton>
                        </div>
                    </form>
                </div>
                <div className="px-4 pt-2 pb-8">
                    <h1 className="mb-4 typography-headline-4 font-bold">Track your orders</h1>
                    {errorMessage && <p className="text-red-600">{errorMessage}</p>}
                    <form>

                        <div>
                            <SfButton type="button" className="w-full md:flex-grow-0" onClick={handleOrders}>
                                Orders
                            </SfButton>
                        </div>
                    </form>
                </div>
            </div>
            (
            <div className="flex-1 px-4 pt-32 pb-8">
                <h1 className="mb-4 typography-headline-4 font-bold">Address information</h1>
                {message && (
                    <p className={isSuccess ? 'text-green-600' : 'text-red-600'}>
                        {message}
                    </p>
                )}
                <form onSubmit={sendUpdateAddress}>
                    <label className="block my-4">
                        <span className="typography-label-sm font-medium">Street</span>
                        <SfInput
                            value={street}
                            onChange={(event) => setStreet(event.target.value)}
                        />
                    </label>
                    <label className="block my-4">
                        <span className="typography-label-sm font-medium">Number</span>
                        <SfInput
                            value={numberAddress}
                            type="number"
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
                        <span className="typography-label-sm font-medium">City</span>
                        <SfInput
                            value={city}
                            onChange={(event) => setCity(event.target.value)}
                        />
                    </label>
                    <label className="block my-4">
                        <span className="typography-label-sm font-medium">State</span>
                        <SfInput
                            value={state}
                            onChange={(event) => setState(event.target.value)}
                        />
                    </label>
                    <label className="block my-4">
                        <span className="typography-label-sm font-medium">Country</span>
                        <SfInput
                            value={country}
                            onChange={(event) => setCountry(event.target.value)}
                        />
                    </label>
                    <label className="block my-4">
                        <span className="typography-label-sm font-medium">Zip Code</span>
                        <SfInput
                            value={zipCode}
                            onChange={(event) => setZipCode(event.target.value)}
                        />
                    </label>
                    <div className="flex gap-x-4 md:justify-end mt-6">
                        <SfButton type="submit" className="flex-grow md:flex-grow-0">
                            Submit
                        </SfButton>
                    </div>
                </form>
            </div>
        </div>
    );
}

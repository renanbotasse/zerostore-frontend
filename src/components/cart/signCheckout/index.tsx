import { SfButton } from '@storefront-ui/react';
import { useNavigate } from 'react-router-dom';
import SignCheckoutRobot from '../../../assets/signcheckout.png'

const cardDetails = [
    {
        image: SignCheckoutRobot,
        title: 'Hello! To checkout, sign in or register!',
        description:
            '',
        button1: 'Register',
        button2: 'Sign In',
    }
];

export default function SignCheckout() {
    const navigateTo = useNavigate(); // 

    const handleRegister = () => {
        navigateTo('/register');
    }

    const handleSignIn = () => {
        navigateTo('/signin');
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
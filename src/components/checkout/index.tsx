import CheckoutPage from './checkoutCart/index';
import CheckoutRegisterForm from './checkoutAddress';
import CreditCardForm from './checkoutCard';

export default function CheckoutFinalPage() {
    return (
        <div className='flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
            <div className='flex-1'>
                <CheckoutPage />
            </div>
            <div className='flex-1'>
                <CheckoutRegisterForm />
            </div>
            <div className='flex-1'>
                <CreditCardForm />
            </div>
        </div>
    );
}

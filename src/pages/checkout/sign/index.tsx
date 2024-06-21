import Footer from '../../../components/footer'
import NavBarTop from '../../../components/navBarTop';
import SignCheckout from '../../../components/checkout/signCheckout';
import '../../../globals.css';

export default function CheckoutSignPage() {
    return (
        <div>
            <NavBarTop/>
            <SignCheckout/>
            <Footer />
        </div>
    );
}
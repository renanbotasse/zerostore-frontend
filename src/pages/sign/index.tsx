import Footer from '../../components/footer'
import NavBarTop from '../../components/navBarTop';
import SignCheckout from '../../components/cart/signCheckout';
import '../../globals.css';

export default function CheckoutSignPage() {
    return (
        <div>
            <NavBarTop/>
            <SignCheckout/>
            <Footer />
        </div>
    );
}
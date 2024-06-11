import Footer from '../../components/footer'
import NavBarTop from '../../components/navBarTop';
import CheckoutPage from '../../components/checkout';
import '../../globals.css';

export default function Checkout() {
    return (
        <div>
            <NavBarTop/>
            <CheckoutPage/>
            <Footer />
        </div>
    );
}
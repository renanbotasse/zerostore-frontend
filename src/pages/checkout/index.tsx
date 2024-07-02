import Footer from '../../components/footer'
import NavBarTop from '../../components/navBarTop';
import CheckoutFinalPage from '../../components/checkout/index';
import '../../globals.css';

export default function CheckoutPage() {
    return (
        <div>
            <NavBarTop/>
            <CheckoutFinalPage/>
            <Footer />
        </div>
    );
}
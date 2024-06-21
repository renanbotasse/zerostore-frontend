import Footer from '../../components/footer'
import NavBarTop from '../../components/navBarTop';
import CartComponent from '../../components/cartComponent';
import '../../globals.css';

export default function CartPage() {
    return (
        <div>
            <NavBarTop/>
            <CartComponent/>
            <Footer />
        </div>
    );
}
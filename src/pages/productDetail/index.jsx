import Footer from '../../components/footer'
import NavBarTop from '../../components/navBarTop';
import ProductDetail from '../../components/productDetail';
import '../../globals.css';

export default function ProductDetails() {
    return (
        <div>
            <NavBarTop/>
            <ProductDetail/>
            <Footer />
        </div>
    );
}
import Footer from '../../components/footer'
import NavBarTop from '../../components/navBarTop';
import ProductNewComponent from '../../components/productNewComponent';
import '../../globals.css';

export default function ProductNew() {
    return (
        <div>
            <NavBarTop/>
            <ProductNewComponent/>
            <Footer />
        </div>
    );
}
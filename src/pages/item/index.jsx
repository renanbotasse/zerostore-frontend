import Footer from '../../components/footer/index'
import Header from '../../components/header/index'
import NavbarMain from "../../components/navbar";
import ProductDetail from '../../components/product/index';
import './styles.css'

export default function Item() {
    return (
        <div className="itemPage">
            <Header />
            <NavbarMain />
            <ProductDetail/>
            <Footer />
        </div>
    );
}
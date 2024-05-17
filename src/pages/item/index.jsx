import Footer from '../../components/footer/index'
import TopNav from "../../components/topnavbar";
import ProductDetail from '../../components/product/index';
import './styles.css'

export default function Item() {
    return (
        <div className="itemPage">
            <Header />
            <TopNav/>
            <ProductDetail/>
            <Footer />
        </div>
    );
}
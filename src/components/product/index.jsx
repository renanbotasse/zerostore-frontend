import './styles.css';
import CarouselProduct from '../carouselProduct/index.jsx';
import ProductDescription from '../productDescription/index.jsx';

export default function ProductDetail() {
    return (
        <div className="ProductPage">
            <ProductDescription/>
            <CarouselProduct />
        </div>
    );
}

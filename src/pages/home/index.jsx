import Footer from '../../components/footer/index'
import Header from '../../components/header/index'
import Carousel from '../../components/carousel/index';
import DestaqueCard from '../../components/destaqueCard/index';
import NewCard from '../../components/newCard';
import NavbarMain from "../../components/navbar";

export default function Home() {
    return (
        <div>
            <Header />
            <NavbarMain />
            <Carousel />
            <DestaqueCard/>
            <NewCard/>
            <Footer />
        </div>
    );
}
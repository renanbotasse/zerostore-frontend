import Footer from '../../components/footer/index'
import NavBar from '../../components/navbar';
import ComponentFaq from '../../components/componentFaq/index';
import FaqBanner from '../../components/bannerFaq/index';
import '../../globals.css';

export default function Faq() {
    return (
        <div>
            <NavBar />
            <FaqBanner/>
            <ComponentFaq/>
            <Footer />
        </div>
    );
}
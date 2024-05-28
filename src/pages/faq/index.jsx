import Footer from '../../components/footer/index'
import NavBarTop from '../../components/navBarTop';
import AccordionFaq from '../../components/accordionFaq/index';
import BannerFaq from '../../components/bannerFaq/index';
import '../../globals.css';

export default function Faq() {
    return (
        <div>
            <NavBarTop />
            <BannerFaq/>
            <AccordionFaq/>
            <Footer />
        </div>
    );
}
import Footer from '../../components/footer/index'
import NavBarTop from '../../components/navBarTop';
import BannerLegal from '../../components/bannerLegal';
import '../../globals.css';

export default function LegalMentions() {
    return (
        <div>
            <NavBarTop />
            <BannerLegal />
            <Footer />
        </div>
    );
}
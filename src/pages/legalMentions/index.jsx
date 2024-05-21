import Footer from '../../components/footer/index'
import NavBar from '../../components/navbar';
import BannerLegal from '../../components/bannerLegal';
import '../../globals.css';

export default function LegalMentions() {
    return (
        <div>
            <NavBar />
            <BannerLegal />
            <Footer />
        </div>
    );
}
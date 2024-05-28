import Footer from '../../components/footer/index.tsx'
import BannerLanding from "../../components/bannerLanding/index";
import BannerHero from "../../components/bannerHero/index"
import NavBarTop from '../../components/navBarTop/index';
import '../../globals.css';

export default function Landing() {
    return (
        <div>
            <NavBarTop/>
            <BannerHero/>
            <BannerLanding/>
            <Footer />
        </div>
    );
}
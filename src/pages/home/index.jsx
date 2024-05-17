import Footer from '../../components/footer/index'
import DisplayHorizontalBlock from "../../components/banner";
import Hero from "../../components/herobanner/index"
import TopNav from '../../components/topnavbar';
import '../../globals.css';

export default function Home() {
    return (
        <div>
            <TopNav/>
            <Hero/>
            <DisplayHorizontalBlock/>
            <Footer />
        </div>
    );
}
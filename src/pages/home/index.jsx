import Footer from '../../components/footer/index'
import DisplayHorizontalBlock from "../../components/banner";
import Hero from "../../components/herobanner/index"
import NavBar from '../../components/navbar';
import '../../globals.css';

export default function Home() {
    return (
        <div>
            <NavBar/>
            <Hero/>
            <DisplayHorizontalBlock/>
            <Footer />
        </div>
    );
}
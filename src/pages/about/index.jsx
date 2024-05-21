import Footer from '../../components/footer/index'
import NavBar from '../../components/navbar';
import AboutUs from '../../components/aboutus';
import '../../globals.css';

export default function About() {
    return (
        <div>
            <NavBar/>
            <AboutUs/>
            <Footer />
        </div>
    );
}
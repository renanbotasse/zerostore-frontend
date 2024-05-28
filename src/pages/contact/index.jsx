import Footer from '../../components/footer/index'
import NavBarTop from '../../components/navBarTop';
import ContactUs from '../../components/contact-us';
import '../../globals.css';

export default function Contact() {
    return (
        <div>
            <NavBarTop/>
            <ContactUs/>
            <Footer />
        </div>
    );
}
import Footer from '../../components/footer/index'
import NavBar from '../../components/navbar';
import ContactUs from '../../components/contactus';
import '../../globals.css';

export default function Contact() {
    return (
        <div>
            <NavBar/>
            <ContactUs/>
            <Footer />
        </div>
    );
}
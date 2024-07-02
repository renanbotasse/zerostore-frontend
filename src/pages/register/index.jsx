import Footer from '../../components/footer'
import NavBarTop from '../../components/navBarTop';
import RegisterForm from '../../components/registerform';
import '../../globals.css';

export default function RegisterPage() {
    return (
        <div>
            <NavBarTop/>
            <RegisterForm/>
            <Footer />
        </div>
    );
}
import Footer from '../../components/footer'
import NavBarTop from '../../components/navBarTop';
import SignInForm from '../../components/sign-in-form';
import '../../globals.css';

export default function SignInPage() {
    return (
        <div>
            <NavBarTop/>
            <SignInForm/>
            <Footer />
        </div>
    );
}
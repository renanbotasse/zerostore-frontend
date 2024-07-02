import Footer from '../../components/footer'
import NavBarTop from '../../components/navBarTop';
import ProfileUserForm from '../../components/profile/index';
import '../../globals.css';

export default function ProfilePage() {
    return (
        <div>
            <NavBarTop/>
            <ProfileUserForm/>
            <Footer />
        </div>
    );
}
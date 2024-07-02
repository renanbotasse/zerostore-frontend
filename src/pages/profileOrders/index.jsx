import Footer from '../../components/footer'
import NavBarTop from '../../components/navBarTop';
import ProfileOrders from '../../components/profileOrders/index';
import '../../globals.css';

export default function ProfileOrdersPage() {
    return (
        <div>
            <NavBarTop/>
            <ProfileOrders/>
            <Footer />
        </div>
    );
}
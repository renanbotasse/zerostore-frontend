import Footer from '../../components/footer'
import NavBarTop from '../../components/navBarTop';
import NewOrderFinalPage from '../../components/neworder/index';
import '../../globals.css';

export default function NewOrder() {
    return (
        <div>
            <NavBarTop/>
            <NewOrderFinalPage/>
            <Footer />
        </div>
    );
}
import Footer from '../../components/footer'
import NavBarTop from '../../components/navBarTop';
import SalesComponent from '../../components/salesComponent';
import '../../globals.css';

export default function Sales() {
    return (
        <div>
            <NavBarTop/>
            <SalesComponent/>
            <Footer />
        </div>
    );
}
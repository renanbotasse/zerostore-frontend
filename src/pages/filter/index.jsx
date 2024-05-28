import NavBarTop from '../../components/navBarTop';
import SidePanelProductFilter from '../../components/sidePanelProductFilter/index';
import Footer from '../../components/footer';
import '../../globals.css';

export default function Filters() {
    return (
        <div>
            <NavBarTop />
            <SidePanelProductFilter/>
            <Footer />
        </div>
    );
}
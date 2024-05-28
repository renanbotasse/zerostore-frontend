import NavBarTop from '../../components/navBarTop';
import SidePanelProductFilter from '../../components/sidePanelProductFilter/index';
import '../../globals.css';

export default function Filters() {
    return (
        <div>
            <NavBarTop />
            <SidePanelProductFilter/>
        </div>
    );
}
import SearchNavBarTop from '../../components/searchNavBarTop';
import SearchSidePanelProductFilter from '../../components/searchPage/index';
import Footer from '../../components/footer';
import '../../globals.css';

export default function Search() {
    return (
        <div>
            <SearchNavBarTop />
            <SearchSidePanelProductFilter/>
            <Footer />
        </div>
    );
}
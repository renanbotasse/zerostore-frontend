import NavBar from '../../components/navbar';
import FiltersSidepanel from '../../components/filterssidepanel/index';
import '../../globals.css';

export default function Filters() {
    return (
        <div>
            <NavBar />
            <FiltersSidepanel/>
        </div>
    );
}
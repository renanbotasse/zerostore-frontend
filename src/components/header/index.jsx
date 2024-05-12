import { RiSearchEyeLine } from "react-icons/ri";
import { BsCartCheckFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import './styles.css';

export default function Header() {
    return (
        <>
            <header className="header">
                <div className="logo">
                    <img src='../../../src/assets/logo.png' alt="Logo" width={220} height={100} />
                </div>
                <div className="SearchDiv">
                    <input className='SearchInput' type="text" placeholder="Pesquisar..." style={{ width: '300px', height: '30px' }} /> 
                    <RiSearchEyeLine size={30} />
                </div>
                <div className='cart'>
                    <BsCartCheckFill size={30} />
                    <p className='cartPrice'> | R$0,00 | </p>
                </div>
                <div className='Profile'>
                    <CgProfile size={30} />
                </div>
            </header>

        </>
    )
}
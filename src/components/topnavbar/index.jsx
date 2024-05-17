import { useState } from 'react';
import {
    SfButton,
    SfIconShoppingCart,
    SfIconFavorite,
    SfIconPerson,
    SfIconExpandMore,
    SfInput,
    SfIconSearch,
    SfIconMenu,
} from '@storefront-ui/react';
import './styles.css'

import masterIcon from '../../assets/mastersystem.png';
import megaIcon from '../../assets/megadrive.png';
import n64Icon from '../../assets/n64icon.png';
import snesIcon from '../../assets/snes.png';
import nesIcon from '../../assets/nes.png';
import psxIcon from '../../assets/psxicon.jpg';
import zerologo from '../../assets/zerologo.png';




export default function TopNav() {
    const [inputValue, setInputValue] = useState('');
    const [dropdownOpenGame, setDropdownOpenGame] = useState(false);
    const [dropdownOpenExclusive, setDropdownOpenExclusive] = useState(false);

    const handleMouseGames = () => {
        setDropdownOpenGame(true);
    };

    const handleMouseGamesLeave = () => {
        setDropdownOpenGame(false);
    };

    const handleMouseExclusive = () => {
        setDropdownOpenExclusive(true);
    };

    const handleMouseExclusiveLeave = () => {
        setDropdownOpenExclusive(false);
    };

    const actionItems = [
        {
            icon: <SfIconShoppingCart />,
            label: '',
            ariaLabel: 'Cart',
            role: 'button',
        },
        {
            icon: <SfIconFavorite />,
            label: '',
            ariaLabel: 'Wishlist',
            role: 'button',
        },
        {
            label: 'Log in',
            icon: <SfIconPerson />,
            ariaLabel: 'Log in',
            role: 'login',
        },
    ];

    const search = (event) => {
        event.preventDefault();
        alert(`Successfully found 10 results for ${inputValue}`);
    };

    return (
        <header className="flex top-0 w-full py-2 px-4 lg:py-5 lg:px-6 bg-[#8c000f] border-b border-neutral-200 fixed z-50">
            <div className="flex flex-wrap lg:flex-nowrap items-center flex-row justify-start h-full max-w-[1536px] w-full">
                <a
                    href="#"
                    aria-label="SF Homepage"
                    className="inline-block mr-4 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm shrink-0"
                >
                    <picture>
                        <source srcSet='../../../src/assets/zerologo.png' media="(min-width: 768px)" />
                        <img
                            src='../../../src/assets/zerologo.png'
                            alt="Sf Logo"
                            className="w-8 h-8 md:h-6 md:w-[176px] lg:w-[6rem] lg:h-[3rem]"
                        />
                    </picture>
                </a>
                <div className="NavbarLink" onMouseEnter={handleMouseGames} onMouseLeave={handleMouseGamesLeave}>
                    <a href="#">
                        GAMES
                    </a>
                    {dropdownOpenGame && (
                        <div className="DropdownLinks">
                            <div className="DropdownItem">
                                <img className="DropdownItemIcon" src={snesIcon} alt="SNES Icon" width={16} height={16} />
                                <span>SUPER NINTENDO</span>
                            </div>
                            <div className="DropdownItem">
                                <img className="DropdownItemIcon" src={nesIcon} alt="SNES Icon" width={16} height={16} />
                                <span>NINTENDO</span>
                            </div>
                            <div className="DropdownItem">
                                <img className="DropdownItemIcon" src={megaIcon} alt="SNES Icon" width={16} height={16} />
                                <span>MEGA DRIVE</span>
                            </div>
                            <div className="DropdownItem">
                                <img className="DropdownItemIcon" src={masterIcon} alt="SNES Icon" width={16} height={16} />
                                <span>MASTER SYSTEM</span>
                            </div>
                            <div className="DropdownItem">
                                <img className="DropdownItemIcon" src={psxIcon} alt="SNES Icon" width={16} height={16} />
                                <span>PSX</span>
                            </div>
                            <div className="DropdownItem">
                                <img className="DropdownItemIcon" src={n64Icon} alt="SNES Icon" width={16} height={16} />
                                <span>N64</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className="NavbarLink" onMouseEnter={handleMouseExclusive} onMouseLeave={handleMouseExclusiveLeave}>
                    <a href="#">
                        CONSOLES
                    </a>
                    {dropdownOpenExclusive && (
                        <div className="DropdownLinks">
                            <div className="DropdownItem">
                                <img className="DropdownItemIcon" src={snesIcon} alt="SNES Icon" width={16} height={16} />
                                <span>SUPER NINTENDO</span>
                            </div>
                            <div className="DropdownItem">
                                <img className="DropdownItemIcon" src={nesIcon} alt="SNES Icon" width={16} height={16} />
                                <span>NINTENDO</span>
                            </div>
                            <div className="DropdownItem">
                                <img className="DropdownItemIcon" src={megaIcon} alt="SNES Icon" width={16} height={16} />
                                <span>MEGADRIVE</span>
                            </div>
                            <div className="DropdownItem">
                                <img className="DropdownItemIcon" src={masterIcon} alt="SNES Icon" width={16} height={16} />
                                <span>MASTER SYSTEM</span>
                            </div>
                            <div className="DropdownItem">
                                <img className="DropdownItemIcon" src={psxIcon} alt="SNES Icon" width={16} height={16} />
                                <span>PSX</span>
                            </div>
                            <div className="DropdownItem">
                                <img className="DropdownItemIcon" src={n64Icon} alt="SNES Icon" width={16} height={16} />
                                <span>N64</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className="NavbarLink">AYNEO</div>
                <div className="NavbarLink">SALES</div>
                <div className="NavbarLink">NEW</div>
                <div className="NavbarLink">Z STORE</div>
                <div className="NavbarComplet">
                    <div className="SearchDivBar">
                        <input className="SearchInputBar" type="text" placeholder="Search..." />
                        <SfIconSearch size={30} />
                    </div>
                    <div className="cartBar">
                        <SfIconShoppingCart size={30} />
                        <p className="cartPriceBar"> | R$0,00 | </p>
                    </div>
                    <div className="ProfileBar">
                        <SfIconPerson size={30} />
                    </div>
                </div>
            </div>
        </header>
    );
}

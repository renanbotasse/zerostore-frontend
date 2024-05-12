// Navbar.js
import { useState, useEffect } from 'react';
import snesIcon from '../../../src/assets/snes.png'; // Importando a imagem do ícone de SNES
import nesIcon from '../../../src/assets/nes.png'; // Importando a imagem do ícone de SNES
import megaIcon from '../../../src/assets/megadrive.png'; // Importando a imagem do ícone de SNES
import masterIcon from '../../../src/assets/mastersystem.png'; // Importando a imagem do ícone de SNES
import retroXIcon from '../../../src/assets/retroX.png'; // Importando a imagem do ícone de SNES
import premiumIcon from '../../../src/assets/premium.png'; // Importando a imagem do ícone de SNES
import translateBrIcon from '../../../src/assets/translateBr.png'; // Importando a imagem do ícone de SNES
import collectionIcon from '../../../src/assets/collection.png'; // Importando a imagem do ícone de SNES
import { RiSearchEyeLine } from "react-icons/ri";
import { BsCartCheckFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

import './styles.css';

export default function Navbar() {
    const [dropdownOpenGame, setDropdownGame] = useState(false);
    const [dropdownOpenExclusive, setDropdownExclusive] = useState(false);

    const handleMouseGames = () => {
        setDropdownGame(true);
    };

    const handleMouseGamesLeave = () => {
        setDropdownGame(false);
    };

    const handleMouseExclusive = () => {
        setDropdownExclusive(true);
    };

    const handleMouseExclusiveLeave = () => {
        setDropdownExclusive(false);
    };

    const [navbarfixed, setNavbarfixed] = useState(false);

    useEffect(() => {
        const fixedNavbar = () => {
            if (window.scrollY >= 80) {
                setNavbarfixed(true);
            } else {
                setNavbarfixed(false);
            }
        };

        window.addEventListener('scroll', fixedNavbar);

        return () => {
            window.removeEventListener('scroll', fixedNavbar);
        };
    }, []);

    return (
        <div className={navbarfixed ? 'Navbar Navbar-bg' : 'Navbar'}>
            <nav className="NavbarItems">
                <div className="NavbarLink" onMouseEnter={handleMouseGames} onMouseLeave={handleMouseGamesLeave}>
                    <a href="#">
                        JOGOS
                    </a>
                    {dropdownOpenGame && (
                        <div className="DropdownLinks">
                            <div className="DropdownItem">
                                <img className="DropdownItemIcon" src={snesIcon} alt="SNES Icon" width={16} height={16} />
                                <span>SUPER NINTENDO</span>
                            </div>
                            <div className="DropdownItem">
                                <img className="DropdownItemIcon" src={nesIcon} alt="SNES Icon" width={16} height={16} />
                                <span>NINTENDO CLASSICO</span>
                            </div>
                            <div className="DropdownItem">
                                <img className="DropdownItemIcon" src={megaIcon} alt="SNES Icon" width={16} height={16} />
                                <span>MEGA DRIVE</span>
                            </div>
                            <div className="DropdownItem">
                                <img className="DropdownItemIcon" src={masterIcon} alt="SNES Icon" width={16} height={16} />
                                <span>MASTER SYSTEM</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className="NavbarLink" onMouseEnter={handleMouseExclusive} onMouseLeave={handleMouseExclusiveLeave}>
                    <a href="#">
                        EXCLUSIVO
                    </a>
                    {dropdownOpenExclusive && (
                        <div className="DropdownLinks">
                            <div className="DropdownItem">
                                <img className="DropdownItemIcon" src={collectionIcon} alt="SNES Icon" width={16} height={16} />
                                <span>COLETANEA</span>
                            </div>
                            <div className="DropdownItem">
                                <img className="DropdownItemIcon" src={premiumIcon} alt="SNES Icon" width={16} height={16} />
                                <span>BOX PREMIUM</span>
                            </div>
                            <div className="DropdownItem">
                                <img className="DropdownItemIcon" src={translateBrIcon} alt="SNES Icon" width={16} height={16} />
                                <span>TRADUZIDO</span>
                            </div>
                            <div className="DropdownItem">
                                <img className="DropdownItemIcon" src={retroXIcon} alt="SNES Icon" width={16} height={16} />
                                <span>CASEIRO</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className="NavbarLink">CONSOLES</div>
                <div className="NavbarLink">PROMOÇÕES</div>
                <div className="NavbarLink">CONTATO</div>
                <div className="NavbarLink">RETROX</div>
                <div className={navbarfixed ? 'NavbarComplet' : 'Navbar-hidde'}>
                    <div className="SearchDivBar">
                        <input className="SearchInputBar" type="text" placeholder="Pesquisar..." />
                        <RiSearchEyeLine size={30} />
                    </div>
                    <div className="cartBar">
                        <BsCartCheckFill size={30} />
                        <p className="cartPriceBar"> | R$0,00 | </p>
                    </div>
                    <div className="ProfileBar">
                        <CgProfile size={30} />
                    </div>
                </div>

            </nav>

        </div>
    );
}

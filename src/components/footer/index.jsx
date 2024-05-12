import React from "react";
import './styles.css';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import cookiesIcon from '../../../src/assets/cookies.png'; // Importando a imagem do ícone de SNES
import termosIcon from '../../../src/assets/termos.png'; // Importando a imagem do ícone de SNES
import emailIcon from '../../../src/assets/email.png'; // Importando a imagem do ícone de SNES
import marketIcon from '../../../src/assets/market.png'; // Importando a imagem do ícone de SNES
import phoneIcon from '../../../src/assets/phone.png'; // Importando a imagem do ícone de SNES
import openIcon from '../../../src/assets/open.png'; // Importando a imagem do ícone de SNES

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footerDiv">
                    <div className="footerItem">
                        <img src={openIcon} alt="SNES Icon" width={16} height={16} />
                        <span>09h às 20h de Segunda-Feira a Domingo</span>
                    </div>
                    <div className="footerItem">
                        <img src={marketIcon} alt="SNES Icon" width={16} height={16} />
                        <span>Rua José Campos, Numero 190, Jardim Atlântico, Balneario Arroio do Silva/SC - CEP 88914-000</span>
                    </div>
                    <div className="footerItem">
                        <img src={phoneIcon} alt="SNES Icon" width={16} height={16} />
                        <span>(48) 99941-9515</span>
                    </div>
                    <div className="footerItem">
                        <img src={emailIcon} alt="SNES Icon" width={16} height={16} />
                        <span>contato@retroxeletronics.com.br</span>
                    </div>
                </div>
                <div className="footerDiv">
                    <p>Redes Sociais</p>
                    <br></br>
                    <div className="socialFooter">
                        <a href="https://www.facebook.com/retroxeletronics/" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={30} />
                        </a>
                        <a href="https://www.instagram.com/retroxeletronics/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={30} />
                        </a>
                        <a href="https://www.instagram.com/retroxeletronics/" target="_blank" rel="noopener noreferrer">
                            <IoLogoWhatsapp size={30} />
                        </a>
                    </div>

                </div>
                <div className="footerDiv">
                    <p>Links Uteis</p>
                    <div>
                        <a>Termos e Condições</a>
                    </div>
                    <div>
                        <a>Politica de Cookies</a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
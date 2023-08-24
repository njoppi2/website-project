import React from 'react';
import './styles.css';
import instagramLogo from '../../images-svg/images/instagram.png';
import twitterLogo from '../../images-svg/images/twitter.png';
import facebookLogo from '../../images-svg/images/facebook.png';
import americanExpressLogo from '../../images-svg/images/americanExpress.png';
import visaLogo from '../../images-svg/images/visa.png';
import masterCardLogo from '../../images-svg/images/mastercard.png';
import pixLogo from '../../images-svg/images/pix.png';

const Footer: React.FC = () => (
    <div className='footer'>
        <div id="footer-top">
            <img className="media-icons" alt="Instagram logo" src={instagramLogo} />
            <img className="media-icons" alt="Twitter logo" src={twitterLogo} />
            <img className="media-icons" alt="Facebook logo" src={facebookLogo} />
        </div>
        <div id="footer-bottom">
            <ul>
                <li>
                    <h4>ENDEREÇO</h4>
                    <p>R. Eng. Agronômico Andrei Cristian Ferreira, s/n - Trindade, Florianópolis - SC, 88040-900</p>
                </li>
                <li>
                    <h4>CONTATO</h4>
                    <p>infos@spacetravel.com Tel: 048 1234-5678</p>
                </li>
                <li>
                    <h4>ACEITAMOS</h4>
                    <div id="payment-container">
                        <img className="payment-icons" alt="Visa logo" src={visaLogo} />
                        <img className="payment-icons" alt="American Express logo" src={americanExpressLogo} />
                        <img className="payment-icons" alt="MasterCard logo" src={masterCardLogo} />
                        <img className="payment-icons" alt="Pix logo" src={pixLogo} />
                    </div>
                </li>
            </ul>
            <p id="copyright-text">© 2021 by Space Travel</p>
        </div>
    </div>
);

export default Footer;

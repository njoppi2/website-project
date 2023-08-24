import React, { useState } from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';
import image from '../../images-svg/svgs/3-lines.svg';

const NavLinks: React.FC = () => (
    <ul className='Navbar-links'>
        <li className='Navbar-link'><NavLink to='/website-project/'>Início</NavLink></li>
        <li className='Navbar-link'><NavLink to='/website-project/sign-in'>Login</NavLink></li>
        <li className='Navbar-link'><NavLink to='/website-project/sign-up'>Cadastro</NavLink></li>
    </ul>
);

const Navigation: React.FC = () => {
    const [isMenuOpen, toggleMenu] = useState(false);

    return (
        <>
            <nav className='Navbar'>
                <div className='Navbar-logo'>Space Travel</div>
                <img className='three-lines' alt='three lines' src={image} onClick={() => toggleMenu(!isMenuOpen)} />
                <NavLinks />
            </nav>
            <div className={`navbar-links-mobile-container ${isMenuOpen ? 'show' : ''}`}>
                <NavLinks />
            </div>
        </>
    );
};

export default Navigation;

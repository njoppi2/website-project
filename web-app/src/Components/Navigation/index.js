import './styles.css';
import { NavLink } from 'react-router-dom';
import image from '../../images-svg/svgs/3-lines.svg'
import { useState } from 'react';



const NavLinks = () => (
  <ul class='Navbar-links'>
    <li class='Navbar-link'><NavLink to='/'>Início</NavLink></li>
    <li class='Navbar-link'><NavLink to='/sign-in'>Login</NavLink></li>
    <li class='Navbar-link'><NavLink to='/sign-up'>Cadastro</NavLink></li>
  </ul>
);

const Navigation = () => {
  const [isMenuOpen, toggleMenu] = useState(false);

  return (
    <>
      <nav className='Navbar'>
        <div class='Navbar-logo'>Space Travel</div>
        <img class='three-lines' src={image} onClick={(prev) => {
          console.log(isMenuOpen);
          toggleMenu(!isMenuOpen);
        }}/>
        <NavLinks />
      </nav>
      <div className={`navbar-links-mobile-container ${isMenuOpen ? 'show' : ''}`}>
        <NavLinks />
      </div>
      
    </>
  )
};

export default Navigation
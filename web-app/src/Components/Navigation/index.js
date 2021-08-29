import './styles.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <nav className='Navbar'>
      <div class='Navbar-logo'>Space Travel</div>
      <ul class='Navbar-links'>
        <li class='Navbar-link'><NavLink to='/'>Início</NavLink></li>
        <li class='Navbar-link'><NavLink to='/sign-in'>Login</NavLink></li>
        <li class='Navbar-link'><NavLink to='/sign-up'>Cadastro</NavLink></li>
      </ul>
    </nav>
  );

export default Navigation
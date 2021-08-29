import './styles.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <nav className='Navbar'>
      <div class='Navbar-logo'>Space Travel</div>
      <ul class='Navbar-links'>
        <li class='Navbar-link'><NavLink to='/'>Home</NavLink></li>
        <li class='Navbar-link'><NavLink to='/sign-in'>Sign-in</NavLink></li>
        <li class='Navbar-link'><NavLink to='/sign-up'>Sign-up</NavLink></li>
      </ul>
    </nav>
  );

export default Navigation
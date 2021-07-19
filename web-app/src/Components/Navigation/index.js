import './styles.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <nav>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/sign-in'>Sign-in</NavLink></li>
        <li><NavLink to='/sign-up'>Sign-up</NavLink></li>
      </ul>
    </nav>
  );

export default Navigation
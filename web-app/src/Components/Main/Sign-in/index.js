import './styles.css';
import { NavLink } from 'react-router-dom';

const SignIn = () => (
  <div className='main sign-in'>
    <div class='login-floating-card'>
      LOGIN
      <div class='login-subline'>
        Email ou senha de usuário
        <input class='login-input' placeholder='usuario@gmail.com'></input>
      </div>
      <div class='login-subline'>
        Senha
        <input class='login-input' type='password'></input>
      </div>
      <button class='login-entry'>
        Entrar
      </button>
    </div>
  </div>
  );

export default SignIn
import './styles.css';
import { NavLink } from 'react-router-dom';

const SignIn = () => (
  <div className='main sign-in'>
    <div class='form-floating-card'>
      <h2>LOGIN</h2>
      <div class='form-subline'>
        <p>Email ou senha de usuário</p>
        <input class='form-input' placeholder='usuario@gmail.com'></input>
      </div>
      <div class='form-subline'>
        <p>Senha</p>
        <input class='form-input' type='password'></input>
      </div>
      <button class='form-entry'>
        Entrar
      </button>
    </div>
  </div>
  );

export default SignIn
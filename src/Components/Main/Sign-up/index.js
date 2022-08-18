import './styles.css';
import { NavLink } from 'react-router-dom';

const SignUp = () => (
  <div className='main sign-up'>
    <div class='form-floating-card'>
      <h2>Formulário de registro</h2>
      <p>Por favor preencha o formulário abaixo</p>
      <div class='form-subline'>
        <p>Nome</p>
        <div class='input-container'>
          <input class='form-input' placeholder='nome'></input>
          <input class='form-input' placeholder='sobrenome'></input>
        </div>
      </div>
      <div class='form-subline'>
        <p>Endereço</p>
        <input class='form-input' placeholder='Rua'></input>
        <div class='input-container'>
          <input class='form-input' placeholder='cidade'></input>
          <input class='form-input' placeholder='estado'></input>
        </div>
        <div class='input-container'>
          <input class='form-input' placeholder='CEP'></input>
          <input class='form-input' placeholder='País'></input>
        </div>
      </div>
      <div class='form-subline'>
        <p>Telefone</p>
        <input class='form-input' placeholder='48-991234567' type='tel' pattern="[0-9]{2}-[0-9]{9}"></input>
      </div>
      <div class='form-subline'>
        <p>E-mail</p>
        <input class='form-input' placeholder='usuario@gmail.com' type='email'></input>
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

export default SignUp
import React from 'react';
import './styles.css';

const SignIn: React.FC = () => (
    <div className='main sign-in'>
        <div className='form-floating-card'>
            <h2>LOGIN</h2>
            <div className='form-subline'>
                <p>Email ou senha de usuário</p>
                <input className='form-input' placeholder='usuario@gmail.com'></input>
            </div>
            <div className='form-subline'>
                <p>Senha</p>
                <input className='form-input' type='password'></input>
            </div>
            <button className='form-entry'>
                Entrar
            </button>
        </div>
    </div>
);

export default SignIn;

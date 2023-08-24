import React from 'react';
import './styles.css';

const SignUp: React.FC = () => (
    <div className='main sign-up'>
        <div className='form-floating-card'>
            <h2>Formulário de registro</h2>
            <p>Por favor, preencha o formulário abaixo</p>
            <div className='form-subline'>
                <p>Nome</p>
                <div className='input-container'>
                    <input className='form-input' placeholder='nome'></input>
                    <input className='form-input' placeholder='sobrenome'></input>
                </div>
            </div>
            <div className='form-subline'>
                <p>Endereço</p>
                <input className='form-input' placeholder='Rua'></input>
                <div className='input-container'>
                    <input className='form-input' placeholder='cidade'></input>
                    <input className='form-input' placeholder='estado'></input>
                </div>
                <div className='input-container'>
                    <input className='form-input' placeholder='CEP'></input>
                    <input className='form-input' placeholder='País'></input>
                </div>
            </div>
            <div className='form-subline'>
                <p>Telefone</p>
                <input className='form-input' placeholder='48-991234567' type='tel' pattern="[0-9]{2}-[0-9]{9}"></input>
            </div>
            <div className='form-subline'>
                <p>E-mail</p>
                <input className='form-input' placeholder='usuario@gmail.com' type='email'></input>
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

export default SignUp;

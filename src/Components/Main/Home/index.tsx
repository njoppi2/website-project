import React from 'react';
import './styles.css';

const Content: React.FC = () => (
    <div className='main home'>
        <h2 className='home-h2'>SINTA-SE EM CASA</h2>
        <h1 className='home-h1'>MESMO ESTANDO LONGE</h1>
        <div className="form-opacity">
            <form className="form-inline">
                <div className='label-input-container'>
                    <label className="input-label" htmlFor="email">Check-in:</label>
                    <input className="date-input" type="date" id="email" placeholder="Enter email" name="email"></input>
                </div>
                <div className='label-input-container'>
                    <label className="input-label" htmlFor="pwd">Check-out:</label>
                    <input type="date" className="date-input" id="pwd" placeholder="Enter password" name="pwd"></input>
                </div>
                <div className='label-input-container'>
                    <input type="number" id="numberInput1" className="number-input" min="1" max="50" ></input>
                    <input type="number" id="numberInput2" className="number-input" min="1" max="50" ></input>
                </div>
                <div className='label-input-container'>
                    <button className='home-button' type="submit"><i></i> Pesquisar</button>
                </div>
            </form>
        </div>
    </div>
);

export default Content;

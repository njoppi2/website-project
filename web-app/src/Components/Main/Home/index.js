import './styles.css';
import { NavLink } from 'react-router-dom';


const Content = () => (
  <div className='main home'>
    <h2>SINTA-SE EM CASA</h2>
    <h1>MESMO ESTANDO LONGE</h1>
    <div class="form-opacity">
      <form class="form-inline">
        <div>
            <label class="input-label" for="email">Check-in:</label>
            <input class="date-input" type="date" id="email" placeholder="Enter email" name="email"></input>
        </div>
        <div>
          <label class="input-label" for="pwd">Check-out</label>
          <input type="date" class="date-input" id="pwd" placeholder="Enter password" name="pwd"></input>
        </div>
        <div>
          <input type="number" id="numberInput1" class="number-input" min="1" max="50" ></input>
          <input type="number" id="numberInput2" class="number-input" min="1" max="50" ></input>
        </div>
        <div>
          <button type="submit"><i ></i> Pesquisar</button>
        </div>
      </form> 
    </div>
  </div>
  );

export default Content
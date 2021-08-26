import { useHistory } from 'react-router-dom';
// import {gameStart} from '../game/game'
import Game from '../game/game';

const ArcadePage = () => {
  const history = useHistory();

  
  return (
    <div>
      <h1>Arcade</h1>
      <button onClick={() => history.push('/')}>Back</button>
      <canvas id="game"></canvas>
      <div>
        <h2>Directions</h2>
        <p>Its time to escape, Boris! You better get going!</p>
        <ul>
          <li>L/R - Move left and right</li>
          <li>Space - Jump</li>
        </ul>
      </div>
      <Game/>
    </div>
  );
}


export default ArcadePage;

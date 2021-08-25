import { useHistory } from 'react-router-dom';

import Game from '../Game/game';

function ArcadePage() {
  const history = useHistory();

  return (
    <div>
      <h1>Arcade</h1>
      <button onClick={() => history.push('/')}>Back</button>
      <Game />
      <div>
        <h2>Directions</h2>
        <p>Its time to escape, Boris! You better get going!</p>
        <ul>
          <li>L/R, A/D - Move left and right</li>
          <li>Space - Jump</li>
          <li>Shift - Crouch</li>
        </ul>
      </div>
    </div>
  );
}

export default ArcadePage;

import { useHistory } from 'react-router-dom';
import tempBoris from "./images/tempBoris.gif"

const LandingPage = () => {
  const history = useHistory();

  return (
    <div>
      <h2>Game Title</h2>

      <div>
        <h3>Story</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div>
        <img src={tempBoris} alt="Our hero, Boris" />
      </div>

      <button onClick={() => history.push('/arcade')}>Play Game</button>

      <div>
        <h3>Technology Used</h3>
        <p>Javascript, ReactDOM, Kaboom.js</p>
      </div>

      <div>
        <h3>Developers</h3>

        <div>Bem</div>

        <div>Grant</div>

        <div>Vada</div>
      </div>
    </div>
  );
}

export default LandingPage;

import { useHistory } from 'react-router-dom';
import tempBoris from './images/tempBoris.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
// import pic from "./images/pic.jpg"
import grant from './images/grant.jpg';
import vada from './images/vada.jpg';
import bem from './images/bem.jpeg';
// import Button from 'react-bootstrap/Button'
// import Figure from 'react-bootstrap/Figure'
import logo from './images/logo.jpeg';
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import Dropdown from 'react-bootstrap/Dropdown'
// import { className } from 'postcss-selector-parser';
import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image'
// import { height } from 'dom-helpers';

const LandingPage = () => {
  const history = useHistory();

  return (
    <div className="container">
      <div className="logo">
        <img className="logoPic" src={logo} alt="logoPic" />
        <h2 id="title">The Peaceful Pursuit of Boris Bones</h2>
      </div>
      <div>
        <h3>Story</h3>
        <p>
          Hail, Adventurer! Master Skeletor has ruled over this decrepit place
          for 1,000 years and nary a prisoner has escaped. The evil mastermind
          has ruled with a bony fist, supported by his skeletal minions.
          Adventurers often arrive to seek fame in challenging the lord of the
          dungeon and setting the prisoners free, but none have succeeded.
        </p>
        <p>
          However, our hero Boris Bones is tired of the dampness of this cave.
          Tired by the constant seiges. Tired of the non-existent pay... just
          all over tired of this life! Or, well. Life so to speak. Its time he
          broke out of this evil lair once and for all, and felt the sun on his
          boney face!
        </p>
      </div>

      <div>
        <img src={tempBoris} alt="Our hero, Boris" />
      </div>
      <div className="mb-2">
        <button className="btn" onClick={() => history.push('/arcade')}>
          Play Game
        </button>
      </div>

      <div className="block">
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={bem} />
            <Card.Body>
              <Card.Title>Bermet Tariel</Card.Title>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://www.linkedin.com/in/bermet-tariel/">
                linkedin
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={vada} />
            <Card.Body>
              <Card.Title>Vada Karlen</Card.Title>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://www.linkedin.com/in/vadak/">
                linkedin
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={grant} />
            <Card.Body>
              <Card.Title>Grant Nichols</Card.Title>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://www.linkedin.com/in/grant-nichols-dev/">
                linkedin
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

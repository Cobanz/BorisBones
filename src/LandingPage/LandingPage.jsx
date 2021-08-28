import { useHistory } from 'react-router-dom';
import tempBoris from "./images/tempBoris.gif"
import 'bootstrap/dist/css/bootstrap.min.css'
// import pic from "./images/pic.jpg"
import grant from "./images/grant.jpg"
import vada from "./images/vada.jpg"
import bem from "./images/bem.jpeg"
// import Button from 'react-bootstrap/Button'
// import Figure from 'react-bootstrap/Figure'
import logo from './images/logo.jpeg'
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import Dropdown from 'react-bootstrap/Dropdown'
// import { className } from 'postcss-selector-parser';
import Card from 'react-bootstrap/Card'
// import Image from 'react-bootstrap/Image'
// import { height } from 'dom-helpers';

const LandingPage = () => {
  const history = useHistory();

  return (
    <div className="container">
      <div className="logo">
        <img className='logoPic' src={logo} alt="logoPic"/>
        <h2 id='title'> Game Title</h2>
      </div>
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
      <div className="mb-2">
      <button className="btn" onClick={() => history.push('/arcade')}>Play Game</button>
      </div>

      <div className="block">
        <div>
      <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={bem} />
        <Card.Body>
          <Card.Title>Bermet Tariel</Card.Title>
        </Card.Body>
        <Card.Body>
          <Card.Link href="https://www.linkedin.com/in/bermet-tariel/">linkedin</Card.Link>
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
          <Card.Link href="https://www.linkedin.com/in/vadak/">linkedin</Card.Link>
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
          <Card.Link href="https://www.linkedin.com/in/grant-nichols-dev/">linkedin</Card.Link>
        </Card.Body>
      </Card>
      </div>   
      </div>

    </div>
  );
}

export default LandingPage;

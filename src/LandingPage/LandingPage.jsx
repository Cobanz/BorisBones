import { useHistory } from 'react-router-dom';

import grant from './images/grant.jpeg';
import vada from './images/vada.jpeg';
import bem from './images/bem.jpeg';
import borisPic from './images/BorisPic.png';
import bp from './images/bs.jpeg';
import jt from './images/js.jpeg';
import km from './images/kaboomjs.jpg';
import rt from './images/react.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Row, Col, Image } from 'react-bootstrap';

const LandingPage = () => {
  const history = useHistory();

  return (
    <Container>
      <Row>
        <header className="site-head text-center pt-4 mt-2 pb-4">
          <h1>The Peaceful Pursuit of Boris Bones</h1>
        </header>
      </Row>

      <Row className="align-items-stretch">
        <Col className="m-3">
          <Card id="story-container" text="black">
            <Card.Title>Hail, Adventurer!</Card.Title>
            <Card.Text>
              <p>
                Master Skeletor has ruled over this decrepit dungeon for 1,000
                years and nary a prisoner has escaped. The evil mastermind has
                ruled with a bony fist, supported by his skeletal minions.
                Adventurers often arrive to seek fame in challenging the lord of
                the dungeon and setting the prisoners free, but none have
                succeeded.
              </p>

              <p>
                However, our hero Boris Bones is tired of the dampness of this
                cave. Tired by the constant seiges. Tired of the non-existent
                pay... just all over tired of this life! Or, well. Life so to
                speak. Its time he broke out of this evil lair once and for all,
                and felt the sun on his boney face!
              </p>
            </Card.Text>
          </Card>
        </Col>

        <Col className="m-2 mb-4">
          <img src={borisPic} className="landing-pic" alt="Our hero, Boris" />
        </Col>
      </Row>

      <Row className="m-3">
        <Button
          variant="danger"
          size="lg"
          onClick={() => history.push('/arcade')}
        >
          Play Game
        </Button>
      </Row>

      <Row className="justify-content-around m-3 mt-4">
        <h2>Technologies Used</h2>
        <Col xs={8}>
          <Card className="p-2">
            {/* Add icons */}
            <Container className="text-center">
              <Row>
                <Col xs={1} md={3}>
                  <Card.Link href="https://reactjs.org/">
                    <Image src={rt} className="tech-icon" rounded />
                  </Card.Link>
                </Col>
                <Col xs={1} md={3}>
                  <Card.Link href="https://www.javascript.com/">
                    <Image src={jt} className="tech-icon" rounded />
                  </Card.Link>
                </Col>
                <Col xs={1} md={3}>
                  <Card.Link href="https://getbootstrap.com/">
                    <Image src={bp} className="tech-icon" rounded />
                  </Card.Link>
                </Col>
                <Col xs={1} md={3}>
                  <Card.Link href="https://kaboom.org/">
                    <Image src={km} className="tech-icon" rounded />
                  </Card.Link>
                </Col>
              </Row>
            </Container>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-around m-3">
        <h2>The Developers</h2>
        <Col xs={3}>
          <Card className="text-center">
            <Image src={bem} className="dev-pic" roundedCircle />

            <Card.Body>
              <Card.Title style={{ backgroundColor: '#7db1b3' }}>
                Bermet Tariel
              </Card.Title>

              <Card.Link href="linkedin.com/in/bermet-tariel">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  class="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </Card.Link>

              <Card.Link href="https://github.com/bermet-tariel">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={3}>
          <Card className="text-center">
            <Image src={vada} className="dev-pic" roundedCircle />
            <Card.Body>
              <Card.Title style={{ backgroundColor: '#7db1b3' }}>
                Vada Karlen
              </Card.Title>

              <Card.Link href="https://www.linkedin.com/in/vadak/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  class="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </Card.Link>

              <Card.Link href="https://github.com/vkarlen">
                {/* <i class="bi bi-github"></i> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={3}>
          <Card className="text-center">
            <Image src={grant} className="dev-pic" roundedCircle />

            <Card.Body>
              <Card.Title style={{ backgroundColor: '#7db1b3' }}>
                Grant Nichols
              </Card.Title>

              <Card.Link href="https://www.linkedin.com/in/grant-nichols-dev/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  class="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </Card.Link>

              <Card.Link href="https://github.com/Cobanz">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;

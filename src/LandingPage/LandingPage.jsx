import { useHistory } from 'react-router-dom';
import React from 'react';

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
        <header className="site-head text-center pt-2 mt-2 pb-2">
          <h1>The Peaceful Pursuit of Boris Bones</h1>
        </header>
      </Row>

      <Row className="align-items-stretch">
        <Col className="m-3" xs={7}>
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

          <h2 id="tech-header">Technologies Used</h2>

          <Col xs={12} className="mt-2">
            <Card className="p-2">
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
        </Col>

        <Col className="m-3 landing-pic" xs={4}>
          <img src={borisPic} alt="Our hero, Boris" />
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
    </Container>
  );
};

export default LandingPage;

import { useHistory } from 'react-router-dom';
import React from 'react';

import vid from './images/Boris.mov';

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

      <Row className="align-items-stretch justify-content-center">
        <Col className="m-3 " xs={5}>
          <Row>
            <Card id="story-container" text="black">
              <Card.Title>Hail, Adventurer!</Card.Title>
              <Card.Text>
                <p>
                  Master Skeletor has ruled over this decrepit dungeon for 1,000
                  years and nary a prisoner has escaped. The evil mastermind has
                  ruled with a bony fist, supported by his skeletal minions.
                  Adventurers often arrive to seek fame in challenging the lord
                  of the dungeon and setting the prisoners free, but none have
                  succeeded.
                </p>

                <p>
                  However, our hero Boris Bones is tired of the dampness of this
                  cave. Tired by the constant seiges. Tired of the non-existent
                  pay... just all over tired of this life! Or, well. Life so to
                  speak. Its time he broke out of this evil lair once and for
                  all, and felt the sun on his boney face!
                </p>
              </Card.Text>
            </Card>
          </Row>

          <Row className="mt-4">
            <Button
              variant="danger"
              size="lg"
              onClick={() => history.push('/arcade')}
            >
              Play Game
            </Button>
          </Row>
        </Col>

        <Col className="m-3 landing-pic" xs={5}>
          <video controls autoPlay muted loop>
            <source src={vid} type="video/mp4" />
            <source src={vid} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;

import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';

import Game from '../game/game';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

const ArcadePage = () => {
  const history = useHistory();

  // On page load, trigger game function
  useEffect(() => {
    Game();
  }, []);

  return (
    <Container className="arcade-page" fluid>
      <Button
        variant="danger"
        size="md"
        className="m-2"
        onClick={() => history.push('/')}
      >
        &#8592; Back
      </Button>

      <Row className="justify-content-center">
        <Col>
          <canvas id="gamecontainer" />
        </Col>

        <Col xs={2}>
          <Card clasName="p-2">
            <Card.Body>
              <Card.Title>Directions</Card.Title>
              <p>Its time to escape, Boris. You better get going!</p>

              <ul>
                {/* Add arrow icons */}
                <li>&#8592; - Move left</li>
                <li>&#8594; - Move right</li>
                <li>&#8593; - Jump</li>
                <li>R - Restart</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ArcadePage;

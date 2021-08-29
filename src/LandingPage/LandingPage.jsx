import { useHistory } from 'react-router-dom';
import tempBoris from "./images/tempBoris.gif"
import 'bootstrap/dist/css/bootstrap.min.css'
import grant from "./images/grant.jpg"
import vada from "./images/vada.jpg"
import bem from "./images/bem.jpeg"
import { Button, Card, ListGroup, Container, Row, Col } from 'react-bootstrap'

const LandingPage = () => {
  const history = useHistory();

  return (
  <div style={{display: 'flex'}, {justifyContent: 'center'}, {alignItems: 'center'}, {textAlign: 'center'}}>
    <div id="bg-image"></div>
    <header className="site-head text-center pt-4 mt-2 pb-4">
      <h1 >Peaceful Pursuit of Boris Bones</h1>
    </header>
    <Container>
      <Row>
      <Card className="mb-2" style={{ width: '18rem'}} bg='secondary' text='dark'>
          <Card.Title>Hail, Adventurer, to the Dungeon,</Card.Title>
          <Card.Text>
           its Master Skeletor has ruled over this decrepit place for 1000 years and has never let 
           a prisoner escape, the evil mastermind has ruled with a bony fist supported by his 
           skeletal minions! Adventures often arrive to challenge the lord of the dungeon,
            to find fame or set the prisoners free, But none have succeeded.
          Our hero, Boris Bones, is tired of this life, tired of the dampness of this cave,
          he wants to get out of this world of violence and see the sun!
          </Card.Text>
      </Card></Row>
      <Row>
      <Row>
      <div>
        <img src={tempBoris} alt="Our hero, Boris" />
      </div>
      </Row>
      <Row>
      <div className="mb-2">
      <Button variant="danger" size="lg" onClick={() => history.push('/arcade')}>Play Game</Button>
      </div>
      </Row>
      </Row>
      <Row>
          <Card style={{ width: '11rem'}}>
            <Card.Img variant="top" src={bem} />
              <Card.Body style={{backgroundColor: 'gray'}}>
                <Card.Title>Bermet Tariel</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
              </ListGroup>
              <Card.Body>
                <Card.Link href="linkedin.com/in/bermet-tariel">
                <i class="bi bi-linkedin"></i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </Card.Link> 
                <Card.Link href="https://github.com/bermet-tariel">
                <i class="bi bi-github"></i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </Card.Link>
              </Card.Body>
          </Card>
          <Card style={{ width: '11rem'}}>
            <Card.Img variant="top" src={vada} />
              <Card.Body style={{backgroundColor: 'gray'}}>
                <Card.Title>Vada Karlen</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
              </ListGroup>
              <Card.Body>
                <Card.Link href="https://www.linkedin.com/in/vadak/">
                <i class="bi bi-linkedin"></i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </Card.Link> 
                <Card.Link href="https://github.com/vkarlen">
                <i class="bi bi-github"></i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </Card.Link>
              </Card.Body>
          </Card>
          <Card style={{ width: '11rem'}}>
            <Card.Img variant="top" src={grant} />
              <Card.Body style={{backgroundColor: 'gray'}}>
                <Card.Title>Grant Nichols</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
              </ListGroup>
              <Card.Body>
                <Card.Link href="https://www.linkedin.com/in/grant-nichols-dev/">
                <i class="bi bi-linkedin"></i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </Card.Link> 
                <Card.Link href="https://github.com/Cobanz">
                <i class="bi bi-github"></i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </Card.Link>
              </Card.Body>
          </Card>
      </Row>
    </Container>
    </div>
  );
}

export default LandingPage;

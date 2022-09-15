import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default () => {
  return (
    <Container fluid>
      <div className="dog">
        <h1 className="h1-dog">
          Adopta un perrito o una perrita
        </h1>
      </div>
      <br />
      <Row>

        <Col className="col-card">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../afador.jpg" />
            <Card.Body>
              <Card.Title>Afador</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nulla, praesentium vero libero ut impedit odit deleniti nemo velit veniam.
              </Card.Text>
              <Link
                to="/contacto" className="text-white ms-3 text-decoration-none">
                <Button     className="btn-to-adopt">
                  Adoptar 
                </Button>
              </Link>
            </Card.Body>
          </Card>        
        </Col>

        <Col className="col-card">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../american.jpg" />
            <Card.Body>
              <Card.Title>American Leopard Hound</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nulla, praesentium vero libero ut impedit odit deleniti nemo velit veniam.
              </Card.Text>
              <Link
                to="/contacto" className="text-white ms-3 text-decoration-none">
                <Button     className="btn-to-adopt">
                  Adoptar 
                </Button>
              </Link>
            </Card.Body>
          </Card>        
        </Col>

        <Col className="col-card">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../basset.jpg" />
            <Card.Body>
              <Card.Title>Basset Fauve de Bretagne</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nulla, praesentium vero libero ut impedit odit deleniti nemo velit veniam.
              </Card.Text>
              <Link
                to="/contacto" className="text-white ms-3 text-decoration-none">
                <Button     className="btn-to-adopt">
                  Adoptar 
                </Button>
              </Link>
            </Card.Body>
          </Card>        
        </Col>

      </Row>
    </Container>
  );
};
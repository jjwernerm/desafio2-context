import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default () => {
  return (
    <Container fluid>
      <div className="cat">
        <h1 className="h1-cat">
          Adopta un gatito o a una gatita
        </h1>
      </div>
      <br />
      <Row>

        <Col className="col-card">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../birman.jpg" />
            <Card.Body>
              <Card.Title>Birman Cat Breed</Card.Title>
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
            <Card.Img variant="top" src="../chartruese.jpg" />
            <Card.Body>
              <Card.Title>Chartreux Cat Breed</Card.Title>
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
            <Card.Img variant="top" src="../british.jpg" />
            <Card.Body>
              <Card.Title>British Shorthair Cat Breed</Card.Title>
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
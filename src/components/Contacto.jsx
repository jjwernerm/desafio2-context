import {Container, Col, FloatingLabel, Form, Row, Button} from 'react-bootstrap/';

function FormFloatingLayoutExample() {
  return (
    <Container className="contacto">
      <Row className="g-2">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Nombre">
            <Form.Control type="text" placeholder="nombre" />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Email">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </Col>
      </Row>
      <br />
      <Row className="g-2">
        <Col md>
        <FloatingLabel controlId="floatingTextarea2" label="Comentario">
          <Form.Control
            as="textarea"
            placeholder="Deja un comentario aquí"
            style={{ height: '100px' }}
          />
        </FloatingLabel>
        </Col>
      </Row>
      <br />
      <Row className="g-2">
        <Col md>
        <Button className="btn-happy-pet">Enviar</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default FormFloatingLayoutExample;
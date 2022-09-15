import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FcHome, FcLikePlaceholder, FcLike, FcAssistant } from "react-icons/fc";

function BasicExample() {
  return (
    <Navbar expand="md" variant="dark" className="nav-bar">
      <Container fluid>        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/" className="text-white ms-3 text-decoration-none"><FcHome /> Home
            </Link>
            <Link
              to="/dog" className="text-white ms-3 text-decoration-none"><FcLikePlaceholder /> Dog
            </Link>
            <Link
              to="/cat" className="text-white ms-3 text-decoration-none"><FcLike /> Cat
            </Link>
            <Link
              to="/contacto" className="text-white ms-3 text-decoration-none"><FcAssistant /> Contacto
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand className="fw-bold"><h1>Happy Pet <img src="../logo.png" alt="" /></h1></Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default BasicExample;




import { Nav, Navbar, Container } from 'react-bootstrap';//importando componentes de bootstrap
import { FcHome, FcLike } from "react-icons/fc";//importando componentes para íconos
import { Link } from "react-router-dom";//importando componente de react router

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
              to="/like" className="text-white ms-3 text-decoration-none"><FcLike /> Favoritas
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand className="fw-bold"><h1>Natural Pic</h1></Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default BasicExample;




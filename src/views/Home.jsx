import { Container, Button } from "react-bootstrap";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

export default () => {
  return (
    <Container fluid>
      <div className="header">
        <h1 className="h1-header">Bienvenido a 
          <span className="fw-bold"> Happy Pet</span> 
        </h1>
        <h5 className="h1-header">
          aquí podrás adoptar tu mascota preferida
        </h5>
      </div>
      <br />
      <div className="dog">
        <h1 className="h1-dog">
          Adopta un perrito o una perrita
        </h1>
        <Link
          to="/dog" className="text-white ms-3 text-decoration-none">
          <Button className="btn-happy-pet">
            <FcLikePlaceholder /> 
              Ver Perritos 
            <FcLikePlaceholder />
          </Button>
        </Link>
      </div>
      <br />
      <div className="cat">
        <h1 className="h1-cat">
          Adopta un gatito o a una gatita
        </h1>
        <Link
          to="/cat" className="text-white ms-3 text-decoration-none">
          <Button className="btn-happy-pet">
            <FcLike /> 
              Ver Gatitos 
            <FcLike />
          </Button>
        </Link>
      </div>
    </Container>
  );
};
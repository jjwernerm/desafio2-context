import { Container } from "react-bootstrap";
import Contacto from "../components/Contacto";

export default () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Contacta a <span className="fw-bold">Happy Pet</span> 🐶
      </h1>
      <h5>y adquiere tu mascota ideal</h5>
      <br />
      <Contacto />
    </Container>
  );
};
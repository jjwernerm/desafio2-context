import { Container } from "react-bootstrap";//Importando componente de bootstrap
import { useContext } from "react";//importando hooks
import MyContext from "../my_context";//importando el context

export default () => {

  const { fotos } = useContext(MyContext);

  return (
    <Container>
      <div className="home">
        <h1>Natural Pic</h1>
      </div>
      <div className="galeria">
        {fotos.map((foto, i) => (
          <div className="img-natural"
            style={{ backgroundImage: `url(${foto.src})` }}
            key={i}
          ></div>
        ))}
      </div>
    </Container>
  );
};
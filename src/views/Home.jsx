import { Container } from "react-bootstrap";//Importando componente de bootstrap
import { useContext } from "react";//importando hooks
import MyContext from "../my_context";//importando el context

export default () => {

  const { fotos, setFotos } = useContext(MyContext);

  const setFavorito = (id) => {
    const fotoIndex = fotos.findIndex((f) => f.id === id);
    fotos[fotoIndex].favorito = !fotos[fotoIndex].favorito;
    setFotos([...fotos]);
  };

  return (
    <Container fluid>
      <div className="home">
        <h1>Natural Pic</h1>
      </div>
      <br />

      {fotos.map((foto, i) => (
        <div
          onClick={() => setFavorito(foto.id)}
          className="foto"
          style={{ backgroundImage: `url(${foto.src})` }}
          key={i}
        >
          {/* <Heart filled={foto.favorito} /> */}

          <p> {foto.desc} </p>
        </div>
      ))}

    </Container>
  );
};
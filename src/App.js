import { BrowserRouter, Routes, Route } from "react-router-dom";//importando los routes
import "bootstrap/dist/css/bootstrap.min.css";//importando react bootstrap
import { useState, useEffect } from "react";//importando los hooks
import MyContext from "./my_context";//importando el context

//importando los componentes
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

//importando los componentes de la carpeta views
import NotFound from "./views/NotFound";
import Home from "./views/Home";
import Like from "./views/Like";

function App() {

  const [fotos, setFotos] = useState([]);

  const endpoint = "/fotos.json";
  const getFotosNaturales = async () => {
    const res = await fetch(endpoint);
    let { photos } = await res.json();
    photos = photos.map((photo) => ({
      id: photo.id,
      src: photo.src.tiny,
      desc: photo.alt,
      favorito: false
    }));
    setFotos(photos);
  };

  useEffect(() => {
    getFotosNaturales();
  }, []);

  return (
    <>
      <MyContext.Provider value={{ fotos, setFotos }}>
        <BrowserRouter>
          <Navbar />
          <br />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/like" element={<Like />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <br />
          <Footer />
        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./views/Home";
import Dog from "./views/Dog";
import Cat from "./views/Cat";
import Contacto from "./views/Contacto";
import NotFound from "./views/NotFound";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dog" element={<Dog />} />
          <Route path="/cat" element={<Cat />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <br />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

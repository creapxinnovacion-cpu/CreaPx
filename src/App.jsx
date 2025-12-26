import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./assets/components/layout/Navbar";
import Footer from "./assets/components/layout/Footer";
import Servicios from "./pages/Servicios";
import Soluciones from "./pages/Soluciones";
import Tecnologia from "./pages/tecnologia";
import Contacto from "./pages/contacto";
function App() {
  return (
    <BrowserRouter>
      {/* CONTENEDOR GLOBAL */}
      <div className="min-h-screen w-full flex flex-col">
        {/* NAVBAR */}
        <Navbar />

        {/* CONTENIDO */}
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/Soluciones" element={<Soluciones />} />
            <Route path="/tecnologia" element={<Tecnologia />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

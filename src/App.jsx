import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./assets/components/layout/Navbar";
import Footer from "./assets/components/layout/Footer";
import Servicios from "./pages/Servicios";
import Soluciones from "./pages/Soluciones";
import Tecnologia from "./pages/tecnologia";
import Contacto from "./pages/contacto";
import Portafolio from "./pages/Portafolio";

function ScrollToTopAndTrackPageView() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Google Analytics 4 - Pageview tracking on SPA navigation
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: pathname + search,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [pathname, search]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTopAndTrackPageView />
      {/* CONTENEDOR GLOBAL */}
      <div className="min-h-screen w-full flex flex-col">
        {/* NAVBAR */}
        <Navbar />

        {/* CONTENIDO */}
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/soluciones" element={<Soluciones />} />
            <Route path="/tecnologia" element={<Tecnologia />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/portafolio" element={<Portafolio />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

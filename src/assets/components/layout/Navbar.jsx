import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import logoImg from "../img/Logo.jpg";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/soluciones", label: "Soluciones" },
  { to: "/portafolio", label: "Portafolio" },
  { to: "/tecnologia", label: "Tecnología" },
  { to: "/contacto", label: "Contacto" },
];

function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-950/85 border-b border-slate-800/60 transition-all">
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex justify-between items-center gap-4">
        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-3 text-xl font-bold tracking-tight text-white group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg py-1"
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-white/20 shadow-md shadow-blue-500/20 group-hover:scale-105 group-hover:border-blue-400 transition-all duration-300">
            <img
              src={logoImg}
              alt="Creapx Logo"
              className="w-full h-full object-cover object-center transform scale-105"
              loading="eager"
            />
          </div>
          <span className="font-extrabold tracking-tight">
            Crea<span className="text-blue-500">px</span>
          </span>
        </Link>

        {/* BOTÓN MÓVIL */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Abrir menú</span>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* NAVEGACIÓN DESKTOP / MÓVIL */}
        <nav
          id="nav-menu"
          aria-label="Principal"
          className={[
            "flex flex-col md:flex-row md:items-center gap-1 md:gap-1.5 absolute md:static left-0 right-0 top-full bg-slate-950/95 md:bg-transparent px-6 py-4 md:p-0 border-b border-slate-800 md:border-0 z-40 transition-all",
            open ? "flex shadow-2xl" : "hidden md:flex",
          ].join(" ")}
        >
          {links.map(({ to, label }) => {
            const isActive = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={[
                  "text-sm font-medium px-3.5 py-2 rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                  isActive
                    ? "text-blue-400 bg-blue-500/10 font-semibold"
                    : "text-slate-300 hover:text-white hover:bg-white/5",
                ].join(" ")}
              >
                {label}
              </Link>
            );
          })}

          <div className="pt-2 md:pt-0 md:ml-3">
            <Link
              to="/contacto"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm shadow-blue-500/25 hover:shadow-blue-500/40 transition-all active:scale-95"
            >
              <span>Cotizar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

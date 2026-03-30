import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

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

  const linkClass = (to) =>
    [
      "rounded-md px-2 py-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
      pathname === to
        ? "text-blue-400 font-medium"
        : "hover:text-blue-400",
    ].join(" ");

  return (
    <nav
      className="w-full bg-black text-white"
      aria-label="Principal"
    >
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex justify-between items-center gap-4">
        <Link
          to="/"
          className="text-xl font-bold shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
        >
          Creapx
        </Link>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Abrir menú</span>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <ul
          id="nav-menu"
          className={[
            "flex flex-col md:flex-row md:items-center gap-1 md:gap-6 absolute md:static left-0 right-0 top-[72px] md:top-auto bg-black md:bg-transparent px-6 pb-4 md:p-0 border-t border-white/10 md:border-0 z-40",
            open ? "flex" : "hidden md:flex",
          ].join(" ")}
        >
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                className={linkClass(to)}
                to={to}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

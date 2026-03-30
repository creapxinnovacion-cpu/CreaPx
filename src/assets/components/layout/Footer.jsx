import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6 text-center">
      <p className="font-bold">
        © {new Date().getFullYear()} CREAPX · Negocios Inteligentes
      </p>

      <p className="text-sm opacity-80 mt-1">
        Automatización · Sistemas Web · Soporte Digital
      </p>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-5 text-sm">
        <Link to="/portafolio" className="hover:text-blue-400 transition">
          Portafolio Digital
        </Link>
        <a
          href="https://github.com/creapxinnovacion-cpu/CreaPx"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          Repositorio Digital
        </a>
      </div>
    </footer>
  );
}

export default Footer;

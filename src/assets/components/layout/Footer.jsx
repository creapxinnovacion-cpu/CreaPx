import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import logoImg from "../img/Logo.jpg";

function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-400 py-12 px-6 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
            <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 border border-white/20 shadow-sm shadow-blue-500/20">
              <img
                src={logoImg}
                alt="Creapx Logo"
                className="w-full h-full object-cover object-center transform scale-105"
                loading="lazy"
              />
            </div>
            <span className="font-bold text-lg text-white tracking-tight">
              Crea<span className="text-blue-500">px</span>
            </span>
          </div>
          <p className="text-sm text-slate-400">
            Automatización administrativa, sistemas web y soporte digital para empresas modernas.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <Link to="/servicios" className="hover:text-blue-400 transition">
            Servicios
          </Link>
          <Link to="/soluciones" className="hover:text-blue-400 transition">
            Soluciones
          </Link>
          <Link to="/tecnologia" className="hover:text-blue-400 transition">
            Tecnologías
          </Link>
          <Link to="/portafolio" className="hover:text-blue-400 transition flex items-center gap-1">
            <span>Portafolio</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <Link to="/contacto" className="text-blue-400 hover:text-blue-300 font-semibold transition">
            Contacto
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-800/60 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
        <p>© {new Date().getFullYear()} CREAPX · Negocios Inteligentes. Todos los derechos reservados.</p>
        <p className="text-slate-400">Diseñado con excelencia digital.</p>
      </div>
    </footer>
  );
}

export default Footer;

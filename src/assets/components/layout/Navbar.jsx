import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">Creapx</h2>

        <ul className="flex gap-6">
          <li>
            <Link className="hover:text-blue-400" to="/">
              Inicio
            </Link>
          </li>

          <li>
            <Link className="hover:text-blue-400" to="/servicios">
              Servicios
            </Link>
          </li>

          <li>
            <Link className="hover:text-blue-400" to="/soluciones">
              Soluciones
            </Link>
          </li>

          <li>
            <Link className="hover:text-blue-400" to="/contacto">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

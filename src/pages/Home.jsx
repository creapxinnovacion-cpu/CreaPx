import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="min-h-screen w-full bg-gradient-to-b from-blue-900 to-black text-white flex flex-col items-center justify-center text-center px-6">

        {/* LOGO */}
        <img
          src="/creapx.jpg"
          alt="Creapx Logo"
          className="creapx"
        />

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Negocios Inteligentes en un Solo Click
        </h1>

        <p className="max-w-2xl text-lg md:text-xl mb-8 opacity-90">
          Automatizamos procesos administrativos para que tu negocio crezca sin complicaciones.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900"
          >
            Solicitar asesoría
          </Link>

          <Link
            to="/soluciones"
            className="inline-flex items-center justify-center px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900"
          >
            Ver soluciones
          </Link>
        </div>
      </section>

      {/* ================= PROBLEMA → SOLUCIÓN ================= */}
      <section className="w-full py-20 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Problema → Solución
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* PROBLEMAS */}
            <div>
              <h3 className="text-xl font-semibold text-red-600 mb-6">
                Problemas comunes del cliente
              </h3>
              <ul className="space-y-4">
                <li className="p-4 border rounded-lg">Procesos manuales</li>
                <li className="p-4 border rounded-lg">Errores administrativos</li>
                <li className="p-4 border rounded-lg">Uso excesivo de Excel</li>
                <li className="p-4 border rounded-lg">Pérdida de información</li>
              </ul>
            </div>

            {/* SOLUCIONES */}
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-6">
                Nuestra solución
              </h3>
              <ul className="space-y-4">
                <li className="p-4 border rounded-lg">Sistemas digitales</li>
                <li className="p-4 border rounded-lg">Automatización</li>
                <li className="p-4 border rounded-lg">Reportes claros</li>
                <li className="p-4 border rounded-lg">Soporte continuo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

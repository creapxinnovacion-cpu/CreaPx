import { Link } from "react-router-dom";

const proyectos = [
  {
    rubro: "Comercio minorista",
    problema: "Control manual de ventas e inventario con errores frecuentes.",
    solucion:
      "Sistema web administrativo con inventario, caja y reportes automáticos.",
    resultado: "Menos errores operativos y mejor visibilidad del negocio diario.",
    stack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    rubro: "Servicios profesionales",
    problema: "Seguimiento de clientes y tareas en hojas de cálculo dispersas.",
    solucion:
      "CRM ligero con pipeline comercial, agenda y recordatorios automatizados.",
    resultado: "Proceso comercial más ordenado y mayor tasa de seguimiento.",
    stack: ["React", "Laravel", "MySQL"],
  },
  {
    rubro: "Operación administrativa",
    problema: "Documentos repetitivos y tiempos altos en procesos internos.",
    solucion:
      "Flujos de automatización para generación de reportes y documentos.",
    resultado: "Ahorro de tiempo y estandarización de tareas críticas.",
    stack: ["Python", "APIs", "Excel/PDF"],
  },
];

function Portafolio() {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-900 px-6 py-12">
      <section className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Portafolio Digital</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Proyectos orientados a resolver problemas reales de operación, ventas y
          gestión administrativa.
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {proyectos.map((proyecto) => (
          <article
            key={proyecto.rubro}
            className="bg-white rounded-xl border shadow-sm p-6"
          >
            <p className="text-sm font-semibold text-blue-700 mb-2">
              {proyecto.rubro}
            </p>
            <h2 className="text-lg font-bold mb-3">Caso de transformación</h2>
            <p className="text-sm mb-2">
              <span className="font-semibold">Problema:</span> {proyecto.problema}
            </p>
            <p className="text-sm mb-2">
              <span className="font-semibold">Solución:</span> {proyecto.solucion}
            </p>
            <p className="text-sm mb-4">
              <span className="font-semibold">Resultado:</span> {proyecto.resultado}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-800">Stack:</span>{" "}
              {proyecto.stack.join(" · ")}
            </p>
          </article>
        ))}
      </section>

      <section className="max-w-6xl mx-auto mt-12 bg-black text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">
          ¿Quieres un sistema similar para tu negocio?
        </h2>
        <p className="opacity-90 mb-6">
          Diseñamos soluciones a la medida para automatizar procesos y escalar tu
          operación.
        </p>
        <Link
          to="/contacto"
          className="inline-flex px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold"
        >
          Solicitar asesoría
        </Link>
      </section>
    </div>
  );
}

export default Portafolio;

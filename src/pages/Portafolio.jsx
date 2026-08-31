import { Link } from "react-router-dom";
import MaintenanceGallery from "../assets/components/portfolio/MaintenanceGallery";

const proyectos = [
  {
    rubro: "Finanzas & Contabilidad SaaS",
    titulo: "API Agente Contable 🚀",
    problema: "Procesar de manera ágil y segura Documentos Tributarios Electrónicos (DTE) en una arquitectura multi-tenant sin comprometer el rendimiento.",
    solucion: "Backend robusto modular desarrollado con FastAPI y SQLAlchemy ORM, seguridad JWT encriptada con Bcrypt, y endpoints estructurados para la gestión CRUD y roles de usuarios.",
    resultado: "Sistema altamente seguro con base de datos Neon DB (PostgreSQL) y SQLite, reduciendo tiempos de integración y garantizando la trazabilidad contable.",
    stack: ["FastAPI", "Python", "SQLAlchemy", "PostgreSQL", "Neon DB", "JWT", "SQLite"],
  },
  {
    rubro: "Salud & Clínicas",
    titulo: "Panel Médico de Control e Impresión 🏥",
    problema: "Gestión ineficiente de expedientes, agendamiento de citas y emisión manual de recetas médicas con potencial de errores.",
    solucion: "Aplicación web con interfaz glassmorphism interactiva, control inteligente de citas con coloreado condicional de expedientes y un generador de recetas PDF de alta fidelidad.",
    resultado: "Optimización del flujo clínico en tiempo real, permitiendo exportar recetas y reportes médicos limpios en PDF (escala 2.5x) para el paciente.",
    stack: ["HTML5", "CSS3 Vanilla", "Bootstrap 5", "SweetAlert2", "html2pdf.js", "JavaScript"],
  },
  {
    rubro: "Logística & Gestión de Inventarios",
    titulo: "Control de Inventario de Botiquín 📦",
    problema: "Control de mermas por vencimiento de fármacos y dificultad para valorar el costo financiero contable de manera precisa.",
    solucion: "Desarrollo en React + TypeScript sincronizado en tiempo real mediante Google Apps Script con Google Sheets. Implementación de motor dual: FEFO para entrega física y PEPS para costeo financiero.",
    resultado: "Alertas inteligentes de stock mínimo y vencimientos (crítica <30 días, preventiva <90 días). Código dockerizado y listo para orquestación en Kubernetes.",
    stack: ["React", "TypeScript", "Google Apps Script", "Google Sheets", "Docker", "Kubernetes", "GitHub Actions"],
  },
  {
    rubro: "Distribución & Transporte",
    titulo: "Gas Flama ⚡",
    problema: "Falta de coordinación en la entrega de cilindros de gas y dificultad para que los clientes e integradores rastreen la ubicación del camión en tiempo real.",
    solucion: "Aplicación móvil y web multiplataforma en Flutter con arquitectura limpia BLoC/Cubit. Integra rastreo satelital con OpenStreetMap, geolocalización en segundo plano y WebSockets.",
    resultado: "Rastreo satelital activo de la flota, asignación automatizada de pedidos y control preciso de estados del repartidor (online/offline).",
    stack: ["Flutter", "BLoC / Cubit", "OpenStreetMap", "WebSockets", "Geolocator", "JWT"],
  },
  {
    rubro: "Automatización & Administración",
    titulo: "CreaPx - Recolector de Facturas ⚙️",
    problema: "Horas hombre perdidas buscando, descargando y organizando facturas XML/JSON y PDFs desde correos electrónicos recibidos.",
    solucion: "Software de escritorio con PySide6 (Qt) y procesamiento asíncrono con QThread que escanea de forma autónoma bandejas IMAP, descarga adjuntos y valida licencias en la nube.",
    resultado: "Descarga e indexación automatizada de comprobantes en carpetas locales organizada por tipo, con bitácora de auditoría y base de datos Neon.",
    stack: ["Python", "PySide6 (Qt)", "IMAP / Gmail", "PostgreSQL", "Neon DB", "QThread", "Cryptography"],
  },
  {
    rubro: "Soporte Técnico & Hardware",
    titulo: "Mantenimiento de Computadoras 💻",
    problema: "Lentitud, calentamiento extremo, fallas de hardware y acumulación de polvo que comprometen el rendimiento y vida útil de los equipos de oficina.",
    solucion: "Limpieza física profunda, sustitución de pasta térmica, optimización de sistema operativo, diagnóstico de discos y ordenamiento interno de componentes.",
    resultado: "Reducción de temperaturas de operación (hasta 20°C menos), incremento en velocidad del sistema y extensión del ciclo de vida útil del hardware.",
    stack: ["Diagnóstico", "Limpieza Física", "Pasta Térmica", "Optimización SO", "Mantenimiento Preventivo"],
    hasGallery: true
  }
];

function Portafolio() {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-900 px-6 py-12">
      {/* ================= HERO SECTION ================= */}
      <section className="max-w-6xl mx-auto text-center mb-16">
        <span className="text-sm font-bold tracking-wider text-blue-600 uppercase bg-blue-50 px-4 py-1.5 rounded-full">
          Casos de Éxito
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-900">
          Portafolio de Software & Automatizaciones
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Desarrollamos soluciones a medida orientadas a optimizar la administración, logística, finanzas y operaciones de tu negocio.
        </p>
      </section>

      {/* ================= PROJECTS GRID ================= */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {proyectos.map((proyecto, index) => (
          <article
            key={index}
            className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 overflow-hidden"
          >
            {/* Si el proyecto tiene galería, la renderizamos al inicio de la tarjeta */}
            {proyecto.hasGallery && <MaintenanceGallery />}

            {/* Header decorativo de la categoría */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-4 text-white">
              <span className="text-xs font-bold uppercase tracking-wider opacity-90 block">
                {proyecto.rubro}
              </span>
              <h2 className="text-xl font-bold mt-1 leading-tight">
                {proyecto.titulo}
              </h2>
            </div>

            {/* Contenido principal */}
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div className="space-y-4">
                {/* Problema */}
                <div className="flex gap-3 items-start">
                  <span className="text-red-500 mt-1 shrink-0 font-bold">❌</span>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wide text-gray-400">Problema</h3>
                    <p className="text-sm text-gray-700 font-medium">{proyecto.problema}</p>
                  </div>
                </div>

                {/* Solución */}
                <div className="flex gap-3 items-start">
                  <span className="text-blue-500 mt-1 shrink-0 font-bold">💡</span>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wide text-gray-400">Solución</h3>
                    <p className="text-sm text-gray-700 font-medium">{proyecto.solucion}</p>
                  </div>
                </div>

                {/* Resultado */}
                <div className="flex gap-3 items-start">
                  <span className="text-green-500 mt-1 shrink-0 font-bold">🎯</span>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wide text-gray-400">Resultado</h3>
                    <p className="text-sm text-gray-700 font-semibold">{proyecto.resultado}</p>
                  </div>
                </div>
              </div>

              {/* Stack de Tecnologías */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h3 className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2.5">Stack Tecnológico</h3>
                <div className="flex flex-wrap gap-1.5">
                  {proyecto.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-semibold bg-gray-100 text-gray-800 rounded-md hover:bg-blue-50 hover:text-blue-700 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="max-w-6xl mx-auto mt-16 bg-gradient-to-r from-gray-900 via-indigo-950 to-black text-white rounded-3xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-blue-500/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            ¿Buscas automatizar procesos en tu empresa?
          </h2>
          <p className="opacity-90 text-sm md:text-base mb-8 max-w-xl mx-auto">
            Creamos soluciones robustas, desde integraciones en la nube y aplicaciones de escritorio hasta APIs de alto rendimiento que digitalizan tu negocio.
          </p>
          <Link
            to="/contacto"
            className="inline-flex px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 hover:scale-105 active:scale-95 transition font-bold shadow-lg shadow-blue-500/20"
          >
            Solicitar asesoría gratuita
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Portafolio;

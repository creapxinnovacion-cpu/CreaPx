import { Link } from "react-router-dom";
import {
  Cpu,
  Receipt,
  Smartphone,
  FileCheck2,
  Wind,
  Cctv,
  Share2,
  Wrench,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const serviciosData = [
  {
    id: "automatizacion",
    title: "Automatización Administrativa",
    badge: "Eficiencia",
    desc: "Elimina tareas manuales y optimiza la productividad de tu equipo con flujos de trabajo inteligentes.",
    icon: Cpu,
    points: [
      "Procesos automáticos sin intervención manual",
      "Reducción drástica de errores operativos",
      "Ahorro de hasta un 60% de tiempo diario",
    ],
  },
  {
    id: "facturacion",
    title: "Facturación Electrónica (DTE)",
    badge: "Fiscal",
    desc: "Sistemas homologados y conectados para emisión y recepción de documentos tributarios.",
    icon: Receipt,
    points: [
      "Cumplimiento legal y normativo vigente",
      "Generación y reportes automáticos en tiempo real",
      "Integración directa con tu software existente",
    ],
  },
  {
    id: "sistemas",
    title: "Sistemas Web y Móviles",
    badge: "Desarrollo",
    desc: "Software a medida para centralizar la gestión de tu negocio en una plataforma segura y moderna.",
    icon: Smartphone,
    points: [
      "Apps móviles y portales administrativos a la medida",
      "Sistemas internos personalizados y escalables",
      "Acceso seguro en la nube desde cualquier dispositivo",
    ],
  },
  {
    id: "digitalizacion",
    title: "Digitalización de Documentos",
    badge: "Datos",
    desc: "Transforma papeles y planillas dispersas en bases de datos organizadas y accesibles al instante.",
    icon: FileCheck2,
    points: [
      "Generación y extracción de PDFs estructurados",
      "Plantillas y procesos en Excel automatizados",
      "Extracción inteligente de datos y gestión de DTE",
    ],
  },
  {
    id: "community-manager",
    title: "Community Manager & Redes",
    badge: "Marketing",
    desc: "Construye una presencia digital profesional y atrae clientes reales a través de contenido estratégico.",
    icon: Share2,
    points: [
      "Estrategia, diseño y calendario de publicaciones",
      "Campañas publicitarias de alto retorno (Meta y Google)",
      "Gestión de comunidad, comentarios y atención comercial",
    ],
  },
  {
    id: "camaras",
    title: "Cámaras de Seguridad & CCTV",
    badge: "Seguridad",
    desc: "Protege tus instalaciones comerciales o residenciales con monitoreo y grabación continua.",
    icon: Cctv,
    points: [
      "Instalación de cámaras IP y sistemas DVR analógicos",
      "Monitoreo remoto en vivo desde tu celular",
      "Mantenimiento correctivo y preventivo de circuitos",
    ],
  },
  {
    id: "climatizacion",
    title: "Climatización de Aire Acondicionado",
    badge: "Infraestructura",
    desc: "Confort térmico y eficiencia energética para oficinas, servidores e instalaciones comerciales.",
    icon: Wind,
    points: [
      "Instalación profesional de aires acondicionados",
      "Mantenimiento preventivo, limpieza y recarga",
      "Optimización de consumo y flujo de aire",
    ],
  },
  {
    id: "soporte",
    title: "Soporte Técnico & Mantenimiento",
    badge: "IT Helpdesk",
    desc: "Asistencia integral en hardware, software y redes para asegurar que tu operación nunca se detenga.",
    icon: Wrench,
    points: [
      "Planes mensuales de soporte preventivo y correctivo",
      "Instalación de computadoras, pantallas y proyectores",
      "Configuración de software, redes e impresoras",
    ],
  },
];

function Servicios() {
  return (
    <>
      {/* ================= HERO SERVICIOS ================= */}
      <section className="relative min-h-[50vh] w-full bg-gradient-to-b from-slate-950 via-[#0a1526] to-[#0d1f38] text-white flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-5">

            <span>Catálogo Especializado</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Nuestros Servicios
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal">
            Diseñamos soluciones digitales, de automatización y soporte para que tu empresa opere con máxima fluidez y rentabilidad.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              to="/tecnologia"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold shadow-lg shadow-blue-600/25 transition-all hover:-translate-y-0.5 active:scale-95"
            >
              <span>Conoce nuestro Stack Tecnológico</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= LISTADO DE SERVICIOS ================= */}
      <section className="w-full py-20 px-6 bg-slate-50 text-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {serviciosData.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="group bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Header de la Card */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                      </span>
                      <span className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                        {item.badge}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h2>

                    <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="border-t border-slate-100 pt-5 space-y-2.5">
                      {item.points.map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-700 font-medium">
                            {pt}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    <Link
                      to="/contacto"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 group-hover:translate-x-1 transition-all"
                    >
                      <span>Cotizar este servicio</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Servicios;

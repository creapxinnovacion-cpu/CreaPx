import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  FileSpreadsheet,
  Clock,
  Sparkles,
  Layers,
  Cpu,
  BarChart3,
  Headphones,
} from "lucide-react";

function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-[92vh] w-full bg-gradient-to-b from-slate-950 via-[#0a1526] to-[#0d1f38] text-white flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        {/* Glow de fondo decorativo */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6">

            <span>Automatización & Transformación Digital</span>
          </div>

          {/* LOGO */}
          <img
            src="/creapx.jpg"
            alt="Creapx Logo"
            className="creapx"
          />

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.15]">
            Negocios Inteligentes en un{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
              Solo Click
            </span>
          </h1>

          <p className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-normal">
            Optimizamos y automatizamos los procesos operativos de tu empresa para que ahorres tiempo, elimines errores y escales sin complicaciones.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span>Solicitar asesoría</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/soluciones"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900/60 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 rounded-xl font-semibold transition-all hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              <Layers className="w-4 h-4 text-slate-400" />
              <span>Ver soluciones</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= PROBLEMA → SOLUCIÓN ================= */}
      <section className="w-full py-24 px-6 bg-slate-50 text-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100/70 px-3 py-1 rounded-full">
              Transformación Real
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
              ¿Por qué digitalizar con Creapx?
            </h2>
            <p className="text-slate-600 text-base">
              Identificamos las fricciones que frenan tu productividad y las convertimos en ventajas competitivas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* PROBLEMAS */}
            <div className="bg-white p-8 rounded-2xl border border-rose-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="p-2.5 rounded-xl bg-rose-50 text-rose-600">
                  <AlertCircle className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Obstáculos cotidianos
                  </h3>
                  <p className="text-xs text-rose-600 font-medium">Costos ocultos y lentitud operativa</p>
                </div>
              </div>

              <div className="space-y-3.5">
                {[
                  { title: "Procesos manuales repetitivos", desc: "Horas invertidas en tareas que pueden ejecutarse en segundos.", icon: Clock },
                  { title: "Errores humanos administrativos", desc: "Equivocaciones en facturas, inventarios y cuentas que cuestan dinero.", icon: AlertCircle },
                  { title: "Saturación y desorden en hojas de cálculo", desc: "Archivos pesados, fórmulas rotas y falta de trazabilidad segura.", icon: FileSpreadsheet },
                  { title: "Pérdida de información clave", desc: "Datos dispersos sin respaldos automáticos ni control de accesos.", icon: Layers },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-rose-50/40 border border-rose-100/60 flex items-start gap-3.5"
                    >
                      <Icon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold text-slate-800">{item.title}</h4>
                        <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* SOLUCIONES */}
            <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                  <CheckCircle2 className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Nuestra solución integral
                  </h3>
                  <p className="text-xs text-blue-600 font-medium">Automatización, claridad y respaldo</p>
                </div>
              </div>

              <div className="space-y-3.5">
                {[
                  { title: "Sistemas digitales a la medida", desc: "Plataformas web y móviles adaptadas al flujo exacto de tu empresa.", icon: Cpu },
                  { title: "Automatización de flujos y tareas", desc: "Eliminación de pasos redundantes e integración continua.", icon: TrendingUp },
                  { title: "Métricas y reportes en tiempo real", desc: "Dashboards analíticos para toma de decisiones rápida e informada.", icon: BarChart3 },
                  { title: "Soporte técnico continuo y seguro", desc: "Acompañamiento especializado en hardware, software e infraestructura.", icon: Headphones },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-blue-50/40 border border-blue-100/60 flex items-start gap-3.5"
                    >
                      <Icon className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold text-slate-800">{item.title}</h4>
                        <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home

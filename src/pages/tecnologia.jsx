import React from "react";
import {
  Laptop,
  Terminal,
  Database,
  Link2,
  Cloud,
  Wrench,
  Sparkles,
  Check,
} from "lucide-react";

const categorias = [
  {
    title: "Frontend, Móvil y Escritorio",
    icon: Laptop,
    badge: "Interfaces",
    items: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "Flutter (Móvil/Web)",
      "PySide6 (Qt Desktop)",
      "HTML5 / CSS3 Vanilla",
      "Tailwind CSS",
      "Bootstrap 5",
      "html2pdf.js",
      "SweetAlert2",
      "Astro",
      "Bulma",
      "C# ASP.NET",
      "WPF / WinForms",
      "Java JSP",
      "PHP",
    ],
  },
  {
    title: "Backend & Lógica de Negocio",
    icon: Terminal,
    badge: "Core & APIs",
    items: [
      "FastAPI (Python)",
      "Python 3",
      "Node.js",
      "Cloudflare Workers",
      "Google Apps Script",
      "Laravel (PHP)",
      "Java Spring Boot",
      "WebSockets",
      "QThread (Multihilo)",
      "SQLAlchemy ORM",
      "BLoC / Cubit (Flutter)",
    ],
  },
  {
    title: "Bases de Datos & Storage",
    icon: Database,
    badge: "Persistencia",
    items: [
      "PostgreSQL",
      "Neon DB (Serverless)",
      "MySQL",
      "SQL Server",
      "SQLite",
      "Google Sheets (Nube)",
      "MongoDB",
      "Firebase",
    ],
  },
  {
    title: "Integraciones & Seguridad",
    icon: Link2,
    badge: "Conectividad",
    items: [
      "JWT (Auth & Tokens)",
      "EmailJS Integration",
      "IMAP / Gmail APIs",
      "OpenStreetMap (Mapas)",
      "Facturación Electrónica (DTE)",
      "REST APIs (JSON/XML)",
      "Cryptography (Cifrado)",
      "Generación Excel / PDF",
    ],
  },
  {
    title: "Infraestructura & DevOps",
    icon: Cloud,
    badge: "Despliegue",
    items: [
      "Docker / Docker Compose",
      "Kubernetes (Kustomize)",
      "GitHub Actions (CI/CD)",
      "Vercel (Hosting Frontend)",
      "Cloudflare (CDN & Workers)",
    ],
  },
  {
    title: "Soporte, Redes y Climatización",
    icon: Wrench,
    badge: "Operaciones",
    items: [
      "Cámaras de Seguridad IP",
      "Sistemas DVR y Analógicos",
      "Mantenimiento de Hardware",
      "Aire Acondicionado & Clima",
      "Ventilación & Filtración",
      "Community Manager",
    ],
  },
];

const Tecnologia = () => {
  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-900 px-6 py-16">
      {/* ================= HEADER ================= */}
      <header className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">

          <span>Stack Tecnológico Verificado</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">
          Tecnologías y Herramientas
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Utilizamos herramientas modernas, robustas y consolidadas en la industria para construir soluciones rápidas, seguras y altamente escalables.
        </p>
      </header>

      {/* ================= CATEGORIES GRID ================= */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categorias.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div
              key={idx}
              className="group bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2.5 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {cat.badge}
                  </span>
                </div>

                <h2 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {cat.title}
                </h2>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
                  {cat.items.map((tech, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Tecnologia;

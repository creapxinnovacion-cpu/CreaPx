import React from "react";

const Tecnologia = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-900 px-6 py-12">
      {/* ================= HEADER ================= */}
      <header className="max-w-5xl mx-auto text-center mb-16">
        <span className="text-sm font-bold tracking-wider text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full uppercase">
          Stack Tecnológico
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-900">
          Tecnologías y Herramientas
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Utilizamos herramientas modernas y consolidadas en la industria para construir software rápido, seguro y escalable.
        </p>
      </header>

      {/* ================= CATEGORIES GRID ================= */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Frontend / Interfaces */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">💻</span>
            <h2 className="text-xl font-bold text-blue-700">Frontend, Móvil y Escritorio</h2>
          </div>
          <ul className="grid grid-cols-2 gap-y-2.5 text-sm text-gray-600 font-medium">
            <li className="flex items-center gap-2"><span>•</span> React</li>
            <li className="flex items-center gap-2"><span>•</span> TypeScript</li>
            <li className="flex items-center gap-2"><span>•</span> JavaScript</li>
            <li className="flex items-center gap-2"><span>•</span> Flutter (Móvil/Web)</li>
            <li className="flex items-center gap-2"><span>•</span> PySide6 (Qt Desktop)</li>
            <li className="flex items-center gap-2"><span>•</span> HTML5 / CSS3 Vanilla</li>
            <li className="flex items-center gap-2"><span>•</span> Tailwind CSS</li>
            <li className="flex items-center gap-2"><span>•</span> Bootstrap 5</li>
            <li className="flex items-center gap-2"><span>•</span> html2pdf.js</li>
            <li className="flex items-center gap-2"><span>•</span> SweetAlert2</li>
            <li className="flex items-center gap-2"><span>•</span> Astro</li>
            <li className="flex items-center gap-2"><span>•</span> Bulma</li>
            <li className="flex items-center gap-2"><span>•</span> C# ASP</li>
            <li className="flex items-center gap-2"><span>•</span> WPF / WinForms</li>
            <li className="flex items-center gap-2"><span>•</span> Java JSP</li>
            <li className="flex items-center gap-2"><span>•</span> PHP</li>
          </ul>
        </div>

        {/* Backend & APIs */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">⚙️</span>
            <h2 className="text-xl font-bold text-blue-700">Backend & Lógica de Negocio</h2>
          </div>
          <ul className="grid grid-cols-2 gap-y-2.5 text-sm text-gray-600 font-medium">
            <li className="flex items-center gap-2"><span>•</span> FastAPI (Python)</li>
            <li className="flex items-center gap-2"><span>•</span> Python 3</li>
            <li className="flex items-center gap-2"><span>•</span> Node.js</li>
            <li className="flex items-center gap-2"><span>•</span> Cloudflare Workers</li>
            <li className="flex items-center gap-2"><span>•</span> Google Apps Script</li>
            <li className="flex items-center gap-2"><span>•</span> Laravel (PHP)</li>
            <li className="flex items-center gap-2"><span>•</span> Java Spring Boot</li>
            <li className="flex items-center gap-2"><span>•</span> WebSockets</li>
            <li className="flex items-center gap-2"><span>•</span> QThread (Multihilo)</li>
            <li className="flex items-center gap-2"><span>•</span> SQLAlchemy ORM</li>
            <li className="flex items-center gap-2"><span>•</span> BLoC / Cubit (Flutter)</li>
          </ul>
        </div>

        {/* Bases de Datos */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🗄️</span>
            <h2 className="text-xl font-bold text-blue-700">Bases de Datos & Almacenamiento</h2>
          </div>
          <ul className="grid grid-cols-2 gap-y-2.5 text-sm text-gray-600 font-medium">
            <li className="flex items-center gap-2"><span>•</span> PostgreSQL</li>
            <li className="flex items-center gap-2"><span>•</span> Neon DB (Serverless)</li>
            <li className="flex items-center gap-2"><span>•</span> MySQL</li>
            <li className="flex items-center gap-2"><span>•</span> SQL Server</li>
            <li className="flex items-center gap-2"><span>•</span> SQLite</li>
            <li className="flex items-center gap-2"><span>•</span> Google Sheets (Nube)</li>
            <li className="flex items-center gap-2"><span>•</span> MongoDB</li>
            <li className="flex items-center gap-2"><span>•</span> Firebase</li>
          </ul>
        </div>

        {/* Integraciones & Seguridad */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🔗</span>
            <h2 className="text-xl font-bold text-blue-700">Integraciones & Seguridad</h2>
          </div>
          <ul className="grid grid-cols-2 gap-y-2.5 text-sm text-gray-600 font-medium">
            <li className="flex items-center gap-2"><span>•</span> JWT (Auth & Tokens)</li>
            <li className="flex items-center gap-2"><span>•</span> EmailJS Integration</li>
            <li className="flex items-center gap-2"><span>•</span> IMAP / Gmail APIs</li>
            <li className="flex items-center gap-2"><span>•</span> OpenStreetMap (Mapas)</li>
            <li className="flex items-center gap-2"><span>•</span> Facturación Electrónica (DTE)</li>
            <li className="flex items-center gap-2"><span>•</span> REST APIs (JSON/XML)</li>
            <li className="flex items-center gap-2"><span>•</span> Cryptography (Cifrado)</li>
            <li className="flex items-center gap-2"><span>•</span> Generación Excel / PDF</li>
          </ul>
        </div>

        {/* Infraestructura & DevOps */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🚀</span>
            <h2 className="text-xl font-bold text-blue-700">Infraestructura & DevOps</h2>
          </div>
          <ul className="grid grid-cols-2 gap-y-2.5 text-sm text-gray-600 font-medium">
            <li className="flex items-center gap-2"><span>•</span> Docker / Docker Compose</li>
            <li className="flex items-center gap-2"><span>•</span> Kubernetes (Kustomize)</li>
            <li className="flex items-center gap-2"><span>•</span> GitHub Actions (CI/CD)</li>
            <li className="flex items-center gap-2"><span>•</span> Vercel (Hosting Frontend)</li>
            <li className="flex items-center gap-2"><span>•</span> Cloudflare (CDN & Workers)</li>
          </ul>
        </div>

        {/* Otras Áreas de Servicio */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🛠️</span>
            <h2 className="text-xl font-bold text-blue-700">Soporte, Redes y Climatización</h2>
          </div>
          <ul className="grid grid-cols-2 gap-y-2.5 text-sm text-gray-600 font-medium">
            <li className="flex items-center gap-2"><span>•</span> Cámaras de Seguridad IP</li>
            <li className="flex items-center gap-2"><span>•</span> Sistemas DVR y Analógicos</li>
            <li className="flex items-center gap-2"><span>•</span> Mantenimiento de Hardware</li>
            <li className="flex items-center gap-2"><span>•</span> Aire Acondicionado & Clima</li>
            <li className="flex items-center gap-2"><span>•</span> Ventilación & Filtración</li>
            <li className="flex items-center gap-2"><span>•</span> Community Manager</li>
          </ul>
        </div>

      </section>
    </div>
  );
};

export default Tecnologia;

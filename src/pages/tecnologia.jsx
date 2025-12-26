import React from "react";

const Tecnologia = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">TECNOLOGÍA</h1>
      </header>

      <section className="space-y-8">
        {/* Frontend */}
        <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4 text-center">
            Frontend
          </h2>
          {/* Cambiamos la lista a un grid de 3 columnas */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2 list-disc list-inside text-gray-600">
            <li>Astro</li>
            <li>React</li>
            <li>Tailwind</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
            <li>HTML</li>
            <li>C# ASP</li>
            <li>Java JSP</li>
            <li>PHP</li>
            <li>WPF</li>
            <li>Windows Forms</li>
            <li>JavaScript</li>
            <li>typeScript</li>
          </ul>
        </div>

        {/* Backend */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Backend</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2 list-disc list-inside text-gray-600 ">
            <li>Python</li>
            <li>Node.js</li>
            <li>Laravel</li>
            <li>java SpringBoot</li>
            <li>PHP</li>
          </ul>
        </div>

        {/* Bases de Datos */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Bases de Datos
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2 list-disc list-inside text-gray-600">
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Neon DB</li>
            <li>FireBase</li>
            <li>SQL server</li>
          </ul>
        </div>

        {/* Integraciones */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Integraciones
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2 list-disc list-inside text-gray-600">
            <li>APIs</li>
            <li>Excel</li>
            <li>PDF</li>
            <li>Facturación electrónica</li>
            <li>Mantenimiento preventivo y correctivo</li>
            <li>Community manager</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Tecnologia;

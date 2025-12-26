import React from 'react';

const SolucionesPorRubro = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">SOLUCIONES POR RUBRO</h1>
        <p className="text-lg text-gray-600">Objetivo: Venta directa por problema.</p>
      </header>

      <section className="space-y-8">
        {/* Para Microempresas */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Para Microempresas</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium text-gray-700">Problema</h3>
              <p className="text-gray-600">Descripción del problema específico que enfrentan las microempresas, como gestión ineficiente de recursos o falta de herramientas digitales.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-700">Solución</h3>
              <p className="text-gray-600">Implementación de una plataforma digital personalizada para automatizar procesos y optimizar operaciones.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-700">Beneficios</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Reducción de costos operativos en un 30%.</li>
                <li>Mejora en la eficiencia y productividad.</li>
                <li>Acceso a herramientas escalables para crecimiento.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Para Contadores */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Para Contadores</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium text-gray-700">Problema</h3>
              <p className="text-gray-600">Dificultades en la gestión de contabilidades complejas y cumplimiento normativo.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-700">Solución digital</h3>
              <p className="text-gray-600">Software de contabilidad automatizado con integración a sistemas fiscales y reportes en tiempo real.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-700">Resultado esperado</h3>
              <p className="text-gray-600">Ahorro de tiempo en procesos contables y reducción de errores en un 50%.</p>
            </div>
          </div>
        </div>

        {/* Para Clínicas y Hospitales */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Para Clínicas y Hospitales</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium text-gray-700">Problema</h3>
              <p className="text-gray-600">Gestión ineficiente de pacientes y registros médicos, con riesgos de errores en tratamientos.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-700">Solución digital</h3>
              <p className="text-gray-600">Sistema de gestión hospitalaria con historiales electrónicos y telemedicina integrada.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-700">Resultado esperado</h3>
              <p className="text-gray-600">Mejora en la atención al paciente y optimización de recursos hospitalarios.</p>
            </div>
          </div>
        </div>

        {/* Para Inmobiliarias */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Para Inmobiliarias</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium text-gray-700">Problema</h3>
              <p className="text-gray-600">Dificultades en la gestión de propiedades y ventas, con procesos manuales lentos.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-700">Solución digital</h3>
              <p className="text-gray-600">Plataforma inmobiliaria con CRM integrado y tours virtuales para propiedades.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-700">Resultado esperado</h3>
              <p className="text-gray-600">Incremento en las ventas y reducción del tiempo de cierre de transacciones.</p>
            </div>
          </div>
        </div>

        {/* Para Empresas Medianas */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Para Empresas Medianas</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium text-gray-700">Problema</h3>
              <p className="text-gray-600">Escalabilidad limitada y gestión de equipos distribuidos sin herramientas adecuadas.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-700">Solución digital</h3>
              <p className="text-gray-600">Suite de herramientas empresariales con ERP y colaboración en la nube.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-700">Resultado esperado</h3>
              <p className="text-gray-600">Mejora en la eficiencia operativa y crecimiento sostenible del negocio.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolucionesPorRubro;
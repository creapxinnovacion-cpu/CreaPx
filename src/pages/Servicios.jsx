import { Link } from "react-router-dom";
function Servicios() {
  return (
    <>
      {/* ================= HERO SERVICIOS ================= */}
      <section className="min-h-screen w-full bg-gradient-to-b from-blue-900 to-black text-white flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Nuestros Servicios
        </h1>

        <p className="max-w-3xl text-lg md:text-xl opacity-90">
          Diseñamos soluciones digitales para optimizar, automatizar y escalar
          tu negocio.
        </p>
      </section>

      {/* ================= LISTADO DE SERVICIOS ================= */}
      <section className="w-full py-20 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center items-center py-10">
            <Link
              to="/tecnologia"
              className="no-underline px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-600 hover:-translate-y-1 transform transition-all duration-300 ease-in-out active:scale-95"
            >
              Tecnologías
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Automatización Administrativa */}
            <div className="p-8 border rounded-xl hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Automatización Administrativa
              </h2>
              <ul className="space-y-2 text-gray-700 list-disc pl-5">
                <li>Procesos automáticos</li>
                <li>Reducción de errores</li>
                <li>Ahorro de tiempo operativo</li>
              </ul>
            </div>

            {/* Facturación Electrónica */}
            <div className="p-8 border rounded-xl hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Facturación Electrónica
              </h2>
              <ul className="space-y-2 text-gray-700 list-disc pl-5">
                <li>Cumplimiento legal</li>
                <li>Reportes automáticos</li>
                <li>Integración con sistemas existentes</li>
              </ul>
            </div>

            {/* Sistemas Web y Móviles */}
            <div className="p-8 border rounded-xl hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Sistemas Web y Móviles
              </h2>
              <ul className="space-y-2 text-gray-700 list-disc pl-5">
                <li>Apps administrativas</li>
                <li>Sistemas internos personalizados</li>
                <li>Acceso seguro desde cualquier dispositivo</li>
              </ul>
            </div>

            {/* Digitalización de Documentos */}
            <div className="p-8 border rounded-xl hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Digitalización de Documentos
              </h2>
              <ul className="space-y-2 text-gray-700 list-disc pl-5">
                <li>PDFs estructurados</li>
                <li>Excel automatizado</li>
                <li>Extracción inteligente de datos</li>
              </ul>
            </div>
 {/* climatización de aires a condicionados */}
            <div className="p-8 border rounded-xl hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Climatización de Aire Acondicionado
              </h2>
              <ul className="space-y-2 text-gray-700 list-disc pl-5">
                <li>Instalación de aires acondicionados</li>
                <li>Mantenimiento de aires acondicionados</li>
                <li>Reparación de aires acondicionados</li>
              </ul>
            </div>
            {/* Instalacion de Camaras de Seguridad */}
            <div className="p-8 border rounded-xl hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Instalación de Camaras de Seguridad
              </h2>
              <ul className="space-y-2 text-gray-700 list-disc pl-5">
                <li>Instalación de camaras de seguridad</li>
                <li>Mantenimiento de camaras de seguridad</li>
                <li>Reparación de camaras de seguridad</li>
              </ul>
            </div>

            {/* Soporte y Mantenimiento */}
            <div className="md:col-span-2 p-8 border rounded-xl hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
                Soporte y Mantenimiento
              </h2>
              <ul className="space-y-2 text-gray-700 list-disc pl-5 max-w-xl mx-auto">
                <li>Planes mensuales</li>
                <li>Escalabilidad del sistema</li>
                <li>Acompañamiento continuo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Servicios;

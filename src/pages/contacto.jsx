import React, { useState } from "react";
import emailjs from "@emailjs/browser";

// ================= IMÁGENES =================
import javierImg from "../assets/components/img/javier.png";
import cuaImg from "../assets/components/img/cua.jpeg";
import cajulImg from "../assets/components/img/cajul.jpg";

const Contacto = () => {
  // ================= STATE =================
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);

  // ================= EQUIPO =================
  const team = [
    {
      name: "Javier Hernandez",
      role: "CEO y Director de Ventas",
      img: javierImg,
    },
    {
      name: "Armando Cua",
      role: "Community Manager",
      img: cuaImg,
    },
    {
      name: "Cristian Cajul",
      role: "IT & Desarrollo",
      img: cajulImg,
    },
  ];

  // ================= VALIDACIÓN =================
  const validateForm = () => {
    const newErrors = {};

    if (formData.nombre.trim().length < 3) {
      newErrors.nombre = "El nombre debe tener al menos 3 caracteres";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Correo electrónico inválido";
    }

    if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ================= INPUT =================
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ================= ENVÍO EMAIL =================
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error(
        "EmailJS: revisa VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID y VITE_EMAILJS_PUBLIC_KEY (en Vercel: Settings → Environment Variables y vuelve a desplegar)."
      );
      alert(
        "El envío por correo no está configurado en este sitio. Escríbenos por WhatsApp desde esta misma página."
      );
      return;
    }

    setIsSending(true);

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: formData.nombre,
          from_email: formData.email,
          message: formData.mensaje,
          email: "creapxinnovacion@gmail.com",
        },
        publicKey
      )
      .then(() => {
        setSuccess(true);
        setFormData({ nombre: "", email: "", mensaje: "" });
        setErrors({});
      })
      .catch((err) => {
        console.error(err);
        alert("Error al enviar el mensaje ❌");
      })
      .finally(() => setIsSending(false));
  };

  // ================= UI =================
  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 py-10 min-h-screen">
      {/* ================= HEADER ================= */}
      <header className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">CONTACTO</h1>
        <p className="text-lg text-gray-600">
          Conversemos y digitalicemos tu negocio
        </p>
      </header>

      {/* ================= EQUIPO ================= */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-blue-600 mb-10 text-center">
          Nuestro Equipo
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((person, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition"
            >
              <img
                src={person.img}
                alt={person.name}
                className="w-28 h-28 rounded-full mx-auto mb-5 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {person.name}
              </h3>
              <p className="text-gray-600">{person.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FORMULARIO ================= */}
      <section className="mb-20">
        <div className="bg-white p-8 rounded-2xl shadow-md max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">
            Formulario de Contacto
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              {errors.nombre && (
                <p className="text-red-500 text-sm">{errors.nombre}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <textarea
                name="mensaje"
                rows="4"
                placeholder="Mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              {errors.mensaje && (
                <p className="text-red-500 text-sm">{errors.mensaje}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSending}
              className={`w-full py-3 rounded-lg font-semibold transition
                ${
                  isSending
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }
              `}
            >
              {isSending ? "Enviando..." : "Enviar Mensaje"}
            </button>

            {success && (
              <p className="text-green-600 text-center font-medium">
                ✅ Mensaje enviado correctamente
              </p>
            )}
          </form>
        </div>
      </section>

      {/* ================= CONTACTO DIRECTO ================= */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-5">
          <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl">
            💬
          </div>
          <div>
            <h3 className="text-xl font-semibold">WhatsApp</h3>
            <p className="text-gray-600 text-sm">Atención inmediata</p>
            <a
              href="https://wa.me/50377562416?text=Hola%20quiero%20información"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-medium hover:underline"
            >
              Enviar mensaje
            </a>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-5">
          <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl">
            @
          </div>
          <div>
            <h3 className="text-xl font-semibold">Correo Empresarial</h3>
            <p className="text-gray-600 text-sm">Contacto formal</p>
            <a
              href="mailto:creapxinnovacion@gmail.com"
              className="text-blue-600 font-medium hover:underline"
            >
              creapxinnovacion@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* ================= CTA WHATSAPP FLOTANTE ================= */}
      <a
        href="https://wa.me/50377562416?text=Hola%20quiero%20información"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 transition animate-bounce"
      >
        <span className="font-semibold">WhatsApp</span>
        <span className="text-xl">💬</span>
      </a>
    </div>
  );
};

export default Contacto;

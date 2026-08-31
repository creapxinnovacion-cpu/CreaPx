import { useState, useEffect, useRef } from "react";
import { animate, stagger, remove } from "animejs";

// Importar imágenes de mantenimiento
import img01 from "../ImgMantenimiento/01.jpeg";
import img02 from "../ImgMantenimiento/02.jpeg";
import img03 from "../ImgMantenimiento/03.jpeg";
import img04 from "../ImgMantenimiento/04.jpeg";
import img05 from "../ImgMantenimiento/05.jpeg";
import img06 from "../ImgMantenimiento/06.jpeg";
import img07 from "../ImgMantenimiento/07.jpeg";
import img08 from "../ImgMantenimiento/08.jpeg";
import img09 from "../ImgMantenimiento/09.jpeg";
import imgCajul from "../ImgMantenimiento/cajul.jpg";

const galleryItems = [
  { src: img01, caption: "Inspección inicial y diagnóstico de hardware de la computadora." },
  { src: img02, caption: "Desmontaje completo y organización ordenada de tornillos y piezas." },
  { src: img03, caption: "Limpieza profunda de disipadores y ventiladores con aire y cepillos." },
  { src: img04, caption: "Eliminación completa de acumulación de polvo en placa madre." },
  { src: img05, caption: "Aplicación de pasta térmica de alta conductividad en CPU y GPU." },
  { src: img06, caption: "Reensamblaje meticuloso y verificación de conexiones eléctricas." },
  { src: img07, caption: "Optimización del flujo de aire interno y gestión de cableado." },
  { src: img08, caption: "Limpieza física externa del chasis y pulido de acrílicos." },
  { src: img09, caption: "Pruebas de encendido, configuración de BIOS y optimización de drivers." },
  { src: imgCajul, caption: "Prueba final de estrés y control de temperatura bajo carga máxima." }
];

export default function MaintenanceGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  // Refs para animaciones
  const cardImgRef = useRef(null);
  const lightboxRef = useRef(null);
  const lightboxImgRef = useRef(null);
  const captionRef = useRef(null);
  const thumbsContainerRef = useRef(null);

  // Animación del slider interno (tarjeta) al cambiar de imagen
  const animateCardSlide = (direction) => {
    if (!cardImgRef.current) return;
    
    // Desliza la imagen actual hacia afuera y la nueva hacia adentro
    const translateVal = direction === "next" ? [-20, 0] : [20, 0];
    
    remove(cardImgRef.current);
    animate(cardImgRef.current, {
      translateX: translateVal,
      opacity: [0.6, 1],
      scale: [0.98, 1],
      duration: 350,
      ease: "easeOutCubic"
    });
  };

  const handleCardNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
    animateCardSlide("next");
  };

  const handleCardPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
    animateCardSlide("prev");
  };

  // Abrir Lightbox
  const openLightbox = () => {
    setModalIndex(currentIndex);
    setIsOpen(true);
  };

  // Efecto cuando se abre el modal
  useEffect(() => {
    if (isOpen) {
      // Bloquear scroll
      document.body.style.overflow = "hidden";

      // Animación de entrada de la ventana del Lightbox
      animate(lightboxRef.current, {
        opacity: [0, 1],
        duration: 300,
        ease: "easeOutQuad"
      });

      // Animación elástica / de rebote para la imagen principal
      animate(lightboxImgRef.current, {
        scale: [0.85, 1],
        opacity: [0, 1],
        duration: 500,
        ease: "easeOutBack"
      });

      // Animación secuencial (stagger) para las miniaturas en la parte inferior
      if (thumbsContainerRef.current) {
        const thumbs = thumbsContainerRef.current.querySelectorAll(".thumb-item");
        animate(thumbs, {
          translateY: [30, 0],
          opacity: [0, 1],
          delay: stagger(40, { start: 150 }),
          duration: 400,
          ease: "easeOutBack"
        });
      }
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // Animación al cambiar de imagen dentro del modal
  const animateModalChange = (direction) => {
    if (!lightboxImgRef.current || !captionRef.current) return;

    // Desvanecer y deslizar la imagen principal del modal
    const xVal = direction === "next" ? [50, 0] : [-50, 0];
    
    animate(lightboxImgRef.current, {
      translateX: xVal,
      opacity: [0.5, 1],
      scale: [0.95, 1],
      duration: 300,
      ease: "easeOutCubic"
    });

    // Desvanecer y levantar la descripción
    animate(captionRef.current, {
      translateY: [15, 0],
      opacity: [0, 1],
      duration: 300,
      ease: "easeOutQuad"
    });
  };

  const handleModalNext = () => {
    setModalIndex((prev) => (prev + 1) % galleryItems.length);
    animateModalChange("next");
  };

  const handleModalPrev = () => {
    setModalIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
    animateModalChange("prev");
  };

  const handleThumbSelect = (idx) => {
    const dir = idx > modalIndex ? "next" : "prev";
    setModalIndex(idx);
    animateModalChange(dir);
  };

  // Cerrar Lightbox con animación
  const closeLightbox = () => {
    animate(lightboxRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 250,
      ease: "easeInQuad",
      complete: () => {
        setIsOpen(false);
      }
    });
  };

  // Soporte para cerrar con tecla ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight" && isOpen) handleModalNext();
      if (e.key === "ArrowLeft" && isOpen) handleModalPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, modalIndex]);

  return (
    <>
      {/* ================= CONTENEDOR SLIDER DE LA TARJETA ================= */}
      <div 
        onClick={openLightbox}
        className="relative h-56 w-full overflow-hidden bg-gray-950 cursor-pointer group"
      >
        <img
          ref={cardImgRef}
          src={galleryItems[currentIndex].src}
          alt={`Mantenimiento ${currentIndex + 1}`}
          className="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Capa degradada de oscurecimiento */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30 pointer-events-none" />

        {/* Textos y tags de navegación sobrepuestos */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="text-[10px] font-bold tracking-wider text-white bg-blue-600/90 backdrop-blur-sm px-2 py-0.5 rounded-full uppercase">
            Galería activa
          </span>
          <span className="text-[10px] font-bold text-gray-200 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-full">
            {currentIndex + 1} / {galleryItems.length}
          </span>
        </div>

        {/* Caption abreviado inferior */}
        <div className="absolute bottom-3 left-4 right-4 text-left pointer-events-none transition-all duration-300 group-hover:bottom-4">
          <p className="text-xs text-gray-300 line-clamp-1 font-medium italic">
            "{galleryItems[currentIndex].caption}"
          </p>
        </div>

        {/* Indicador de lupa para expandir */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 text-white transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Botones de navegación interna en la card */}
        <button
          onClick={handleCardPrev}
          className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-blue-600 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 border border-white/10 hover:scale-115 cursor-pointer z-10"
          title="Anterior"
        >
          ❮
        </button>
        <button
          onClick={handleCardNext}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-blue-600 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 border border-white/10 hover:scale-115 cursor-pointer z-10"
          title="Siguiente"
        >
          ❯
        </button>
      </div>

      {/* ================= LIGHTBOX MODAL DE PANTALLA COMPLETA ================= */}
      {isOpen && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-[999] flex flex-col justify-between bg-black/95 backdrop-blur-xl p-4 md:p-8"
        >
          {/* Botón de cerrar */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-red-500 hover:scale-110 transition-all duration-200 text-3xl md:text-4xl font-light cursor-pointer z-50 p-2"
            title="Cerrar (Esc)"
          >
            ✕
          </button>

          {/* Indicador superior del modal */}
          <div className="text-center text-gray-400 text-xs md:text-sm font-semibold tracking-wider pt-2 select-none">
            REGISTRO DE PROCESO DE MANTENIMIENTO ({modalIndex + 1} de {galleryItems.length})
          </div>

          {/* Área Central: Flechas e Imagen Principal */}
          <div className="flex-1 flex items-center justify-between max-w-6xl mx-auto w-full my-4 relative">
            {/* Flecha Izquierda */}
            <button
              onClick={handleModalPrev}
              className="absolute left-2 md:left-4 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-all active:scale-95 border border-white/10 z-20 cursor-pointer text-xl"
            >
              ❮
            </button>

            {/* Contenedor Imagen */}
            <div className="w-full h-full flex flex-col items-center justify-center px-12 md:px-20 select-none">
              <img
                ref={lightboxImgRef}
                src={galleryItems[modalIndex].src}
                alt={`Mantenimiento detallado ${modalIndex + 1}`}
                className="max-h-[62vh] max-w-full rounded-xl border border-white/10 shadow-2xl object-contain"
              />
            </div>

            {/* Flecha Derecha */}
            <button
              onClick={handleModalNext}
              className="absolute right-2 md:right-4 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-all active:scale-95 border border-white/10 z-20 cursor-pointer text-xl"
            >
              ❯
            </button>
          </div>

          {/* Panel Inferior: Caption y Track de Miniaturas */}
          <div className="max-w-4xl mx-auto w-full pb-2 md:pb-4 space-y-4">
            {/* Descripción (Caption) */}
            <div
              ref={captionRef}
              className="bg-white/5 backdrop-blur-md px-6 py-3.5 rounded-2xl border border-white/10 text-white text-center text-sm md:text-base font-medium max-w-2xl mx-auto shadow-lg"
            >
              <span className="text-blue-400 font-bold block text-[10px] uppercase tracking-wider mb-1">
                Paso {modalIndex + 1}
              </span>
              "{galleryItems[modalIndex].caption}"
            </div>

            {/* Miniaturas en carrusel horizontal */}
            <div 
              ref={thumbsContainerRef}
              className="flex gap-2 overflow-x-auto justify-start md:justify-center py-2 px-4 max-w-full no-scrollbar"
            >
              {galleryItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleThumbSelect(idx)}
                  className={`thumb-item shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                    idx === modalIndex
                      ? "border-blue-500 scale-105 opacity-100 ring-2 ring-blue-500/20"
                      : "border-transparent opacity-40 hover:opacity-85 hover:scale-102"
                  }`}
                >
                  <img
                    src={item.src}
                    alt={`Miniatura ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

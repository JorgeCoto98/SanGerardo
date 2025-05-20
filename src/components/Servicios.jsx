// src/components/Servicios.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Servicios() {
  return (
    <section className="relative h-[100vh] bg-cover bg-center flex flex-col justify-center items-center text-white px-4"
      style={{ backgroundImage: "url('/servicios-fondo.jpeg')" }}>
      
      {/* Capa oscura encima del fondo */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Contenido principal */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Nuestros Servicios</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Descubre todas las soluciones educativas y tecnológicas que ofrecemos para transformar el aprendizaje.
        </p>

        {/* Módulos visuales estilo botones */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {['Talleres', 'Transporte', 'Uniformes', 'Trabaja con Nosotros', 'Woot - it'].map((modulo, index) => (
            <span
              key={index}
              className="bg-[#F0533C] text-white text-sm font-semibold px-4 py-2 rounded-full shadow hover:scale-105 transition cursor-default"
            >
              {modulo}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


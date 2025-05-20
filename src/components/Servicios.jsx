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
              className="text-white text-sm font-semibold px-5 h-10 min-w-[150px] flex items-center justify-center rounded-full shadow-md transition transform hover:scale-105 hover:shadow-[0_0_20px_rgba(245,94,16,0.6)] cursor-default"
              style={{
                backgroundColor: 'rgb(245, 94, 16)',
                boxShadow: '0 4px 10px rgba(245, 94, 16, 0.4)',
              }}
            >
              {modulo}
            </span>
          ))}
        </div>

      </motion.div>
    </section>
  );
}


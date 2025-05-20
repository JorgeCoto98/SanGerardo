// src/components/Nosotros.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Nosotros() {
  return (
    <section className="py-16 bg-[#f4f8fd] px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Imagen animada */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/nosotros.jpeg"
            alt="Nosotros"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </motion.div>

        {/* Texto animado */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-[#0D254A] mb-4">¿Quiénes Somos?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Somos una institución educativa comprometida con la formación integral de nuestros estudiantes,
            fomentando valores, pensamiento crítico y el desarrollo de habilidades del siglo XXI.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Nuestro equipo docente está altamente capacitado y comprometido con brindar una educación
            personalizada, moderna y significativa en un entorno inclusivo y seguro.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


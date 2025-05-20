import React from 'react';

export default function Contacto() {
  return (
    <div className="relative max-w-4xl mx-auto p-6 mt-10">
      {/* Marca de agua */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <img
          src="/watermark.jpeg"
          alt="Marca de agua"
          className="w-1/2 opacity-10"
        />
      </div>

      {/* Contenido del formulario */}
      <div className="relative z-10 bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#0D254A]">Contáctanos</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-[#0D254A]" htmlFor="name">Nombre</label>
            <input
              id="name"
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-[#0D254A]" htmlFor="email">Correo electrónico</label>
            <input
              id="email"
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
              placeholder="tu@correo.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-[#0D254A]" htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              rows="5"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
              placeholder="Escribe tu mensaje..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#0D254A] text-white py-2 rounded hover:bg-[#1896D3] transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="relative max-w-4xl mx-auto p-6 mt-16">
      {/* Marca de agua */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <img
          src="/watermark.jpeg"
          alt="Marca de agua"
          className="w-1/2 opacity-10"
        />
      </div>

      {/* Contenido del formulario */}
      <div className="relative z-10 bg-[#fef9f4]/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold mb-8 text-center text-[#0D254A]">Contáctanos</h1>
        <form className="space-y-6">
          {/* Nombre */}
          <div className="relative">
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="peer w-full border border-gray-300 bg-transparent rounded-lg px-3 pt-6 pb-2 text-[#0D254A] placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#1896D3]"
              placeholder="Tu nombre"
            />
            <label
              htmlFor="name"
              className="absolute left-3 top-2 text-sm text-[#0D254A] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#1896D3]"
            >
              Nombre
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="peer w-full border border-gray-300 bg-transparent rounded-lg px-3 pt-6 pb-2 text-[#0D254A] placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#1896D3]"
              placeholder="tu@correo.com"
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-2 text-sm text-[#0D254A] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#1896D3]"
            >
              Correo electrónico
            </label>
          </div>

          {/* Mensaje */}
          <div className="relative">
            <textarea
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="peer w-full border border-gray-300 bg-transparent rounded-lg px-3 pt-6 pb-2 text-[#0D254A] placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#1896D3]"
              placeholder="Escribe tu mensaje..."
            />
            <label
              htmlFor="message"
              className="absolute left-3 top-2 text-sm text-[#0D254A] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#1896D3]"
            >
              Mensaje
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#F55E10] hover:bg-[#d64e0c] transition text-white font-semibold py-3 rounded-full shadow-md hover:shadow-lg hover:scale-[1.02]"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-gray-300 pt-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Información de contacto */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Instituto Educativo San Gerardo</h3>
          <p className="mb-2">📍 Residencial Alajuela, 1ra entrada, 200 metros al norte.</p>
          <p className="mb-2">📞 <a href="tel:+50624416880" className="hover:underline">+506 2441 6880</a></p>
          <p className="mb-4">🌐 <a href="https://institutosangerardo.ed.cr" target="_blank" rel="noopener noreferrer" className="hover:underline">institutosangerardo.ed.cr</a></p>

          {/* Redes Sociales */}
          <div className="flex gap-4 mt-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="https://wa.me/50624416880" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Navegación</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white hover:underline">Inicio</Link></li>
            <li><Link to="/nosotros" className="hover:text-white hover:underline">Nosotros</Link></li>
            <li><Link to="/oferta-educativa" className="hover:text-white hover:underline">Oferta Educativa</Link></li>
            <li><Link to="/servicios" className="hover:text-white hover:underline">Servicios</Link></li>
            <li><Link to="/contacto" className="hover:text-white hover:underline">Contacto</Link></li>
          </ul>
        </div>

        {/* Mapa */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Ubicación</h3>
          <iframe
            title="Ubicación Colegio San Gerardo"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.123456789!2d-84.2214!3d10.02283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fb123456789%3A0xabcdef123456789!2sInstituto%20Educativo%20San%20Gerardo!5e0!3m2!1ses!2scr!4v1610000000000"
            width="100%"
            height="200"
            style={{ border: 0, borderRadius: '0.5rem' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Footer inferior */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © 2025 Instituto Educativo San Gerardo. Todos los derechos reservados.
      </div>
    </footer>
  );
}

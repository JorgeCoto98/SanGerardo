import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import OfertaEducativa from './components/OfertaEducativa';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import './index.css'; // Asegúrate de tener tailwind y estilos globales

function NavBar() {
  const location = useLocation();

  const linkStyle = (path) =>
    location.pathname === path
      ? 'text-blue-600 font-bold border-b-2 border-blue-600 pb-1'
      : 'hover:text-blue-600 transition';

  return (
    <nav className="bg-white shadow fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          {/* Logo desde public */}
          <img src="/logo.jpeg" alt="Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold text-[#0D254A]"> San Gerardo</span>
        </Link>
        <div className="space-x-6 text-sm md:text-base">
          <Link to="/" className={linkStyle('/')}>Inicio</Link>
          <Link to="/nosotros" className={linkStyle('/nosotros')}>Nosotros</Link>
          <Link to="/oferta-educativa" className={linkStyle('/oferta-educativa')}>Oferta Educativa</Link>
          <Link to="/servicios" className={linkStyle('/servicios')}>Servicios</Link>
          <Link to="/contacto" className={linkStyle('/contacto')}>Contacto</Link>
        </div>
      </div>
    </nav>
  );
}

function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
    >
     <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 32 32"
  fill="currentColor"
  className="w-6 h-6"
>
  <path d="M16.001 3.2a12.8 12.8 0 0 1 11.04 19.2l1.76 5.28-5.44-1.76a12.8 12.8 0 1 1-7.36-22.72zm0 2.4a10.4 10.4 0 1 0 5.68 19.2l.64.32 3.2 1.04-1.04-3.2-.32-.64A10.4 10.4 0 0 0 16 5.6zm5.36 12.48c-.24-.08-1.44-.72-1.68-.8-.24-.08-.4-.08-.56.16s-.64.8-.8.96c-.16.16-.32.16-.56.08s-1.04-.4-1.92-1.28c-.72-.64-1.2-1.44-1.36-1.68s-.016-.384.12-.512c.128-.128.288-.336.432-.48s.192-.24.288-.4a.47.47 0 0 0-.016-.48c-.08-.16-.56-1.36-.768-1.84-.2-.48-.4-.4-.56-.4s-.32-.016-.48-.016a.94.94 0 0 0-.672.32 2.768 2.768 0 0 0-.88 2.08c0 .24.04.48.12.72.16.56.48 1.04.8 1.44l.32.4c.48.64.96 1.2 1.6 1.68 1.12.96 2.48 1.44 3.2 1.68s1.44.16 1.984.08c.64-.096 1.28-.544 1.456-1.072s.176-.96.128-1.056c-.048-.096-.2-.16-.416-.24z"/>
</svg>

    </a>
  );
}

function Layout() {
  return (
    <>
      <NavBar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/oferta-educativa" element={<OfertaEducativa />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
      <WhatsAppFloatingButton />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

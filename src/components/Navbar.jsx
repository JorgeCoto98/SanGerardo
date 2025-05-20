import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import OfertaEducativa from './components/OfertaEducativa';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';

function NavBar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="/assets/logo.jpeg" alt="Logo" className="h-10 w-auto" />
          <Link to="/" className="text-2xl font-bold text-blue-900">Mi Colegio</Link>
        </div>
        <div className="space-x-6 text-sm md:text-base">
          <Link to="/" className="hover:text-blue-600">Inicio</Link>
          <Link to="/nosotros" className="hover:text-blue-600">Nosotros</Link>
          <Link to="/oferta" className="hover:text-blue-600">Oferta Educativa</Link>
          <Link to="/servicios" className="hover:text-blue-600">Servicios</Link>
          <Link to="/contacto" className="hover:text-blue-600">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}

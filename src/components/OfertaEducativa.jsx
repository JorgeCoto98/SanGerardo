// src/components/OfertaEducativa.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from "framer-motion";

const slides = [
  {
    title: 'Preescolar es juego',
    subtitle: 'A través del juego estructurado, los niños desarrollan habilidades fundamentales para su futuro.',
    cta: { text: 'Más información', href: '/academics/preschool' },
    background: '/slide-preescolar.jpg',
  },
  {
    title: 'Primaria: descubriendo el mundo',
    subtitle: 'Un currículo integral que despierta la curiosidad y el pensamiento crítico.',
    cta: { text: 'Más información', href: '/academics/elementary' },
    background: '/slide-primaria.jpg',
  },
  {
    title: 'Secundaria que inspira',
    subtitle: 'Proyectos colaborativos y tecnología al servicio del aprendizaje.',
    cta: { text: 'Más información', href: '/academics/middle-school' },
    background: '/slide-secundaria.jpg',
  },
];

const niveles = [
  {
    icon: '🎨',
    title: 'Artes',
    desc: 'Programa de artes visuales y escénicas para desarrollar la creatividad.',
    href: '/life-at-lincoln/art-program',
  },
  {
    icon: '🤸‍♂️',
    title: 'Deportes',
    desc: 'Formación en valores y trabajo en equipo a través del deporte.',
    href: '/life-at-lincoln/sports-program',
  },
  {
    icon: '💻',
    title: 'Academia',
    desc: 'Enfoque académico riguroso con apoyo en habilidades del siglo XXI.',
    href: '/academics/our-approach',
  },
];

export default function OfertaEducativa() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };

  return (
    <div className="OfertaEducativa">
      {/* Slider */}
      <Slider {...settings} className="mb-16">
        {slides.map((slide, i) => (
          <div key={i} className="relative h-96">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.background})` }}
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start px-8 md:px-16 text-white">
              <h2 className="text-3xl md:text-5xl font-bold">{slide.title}</h2>
              <p className="mt-4 max-w-lg">{slide.subtitle}</p>
              <a
                href={slide.cta.href}
                className="mt-6 inline-block bg-[#C40000] hover:bg-[#16254C] text-white py-2 px-4 rounded"
              >
                {slide.cta.text}
              </a>
            </div>
          </div>
        ))}
      </Slider>

      {/* Bienvenida */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#16254C] border-l-4 border-[#C40000] pl-4">
            Bienvenido a Nuestra Oferta Educativa
          </h1>
          <p className="mt-6 text-[#0D254A]">
            En nuestro colegio apostamos por un aprendizaje integral: académico, artístico,
            deportivo y emprendedor. Aquí encontrarás todos los niveles educativos
            diseñados para potenciar al máximo las habilidades de nuestros estudiantes.
          </p>
        </div>
      </section>

      {/* Sección de niveles */}
      <section className="py-16 bg-[#f4f8fd]"
        style={{backgroundColor: "rgb(141,201,230)"}}
      >
        <div className="max-w-5xl mx-auto px-4 grid gap-8 grid-cols-1 md:grid-cols-3">
          {niveles.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="bg-white rounded-lg shadow-lg p-6 transform hover:-translate-y-1 transition"
            >
              <div className="text-5xl">{item.icon}</div>
              <h3 className="mt-4 text-2xl font-semibold text-[#0D254A]">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Contenido adicional simulado */}
      <motion.section
        className="py-16 px-4 md:px-16 flex justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="bg-[#fef9f4]/80 backdrop-blur-md rounded-2xl shadow-xl p-8 max-w-4xl w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0D254A] text-center">
            Más Información
          </h2>
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed
            posuere, nisl in consectetur vulputate, orci metus malesuada urna, at
            pellentesque lorem neque ac turpis. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Integer sit amet sapien venenatis,
            facilisis nulla eu, tincidunt nunc.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Phasellus hendrerit tellus eget dolor tempus, nec vulputate purus elementum.
            Praesent ac nibh vitae lorem rutrum semper. Duis sed risus sit amet arcu fermentum
            laoreet.
          </p>
        </div>
      </motion.section>
    </div>
  );
}


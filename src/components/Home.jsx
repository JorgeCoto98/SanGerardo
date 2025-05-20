// src/components/Home.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from "framer-motion";


export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      {/* Carrusel */}
      <Slider {...settings}>
        <div>
          <img src="/assets/slide1.jpg" alt="Slide 1" className="w-full h-[400px] object-cover" />
        </div>
        <div>
          <img src="/assets/slide2.jpg" alt="Slide 2" className="w-full h-[400px] object-cover" />
        </div>
        <div>
          <img src="/assets/slide3.jpg" alt="Slide 3" className="w-full h-[400px] object-cover" />
        </div>
      </Slider>

     
      {/* Mensaje de bienvenida animado */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center py-16 px-4"
      >
        <h1 className="text-4xl font-bold text-[#0D254A] mb-4">
          Bienvenido al Colegio San Gerardo
        </h1>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
        </p>
      </motion.div>
    </div>
  );
}

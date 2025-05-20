import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function HeroSlider() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    '/assets/slide1.jpg',
    '/assets/slide2.jpg',
    '/assets/slide3.jpg',
  ];

  return (
    <div className="mt-16"> {/* deja espacio al navbar */}
      <Slider {...settings}>
        {slides.map((src, i) => (
          <div key={i}>
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              className="w-full h-96 object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

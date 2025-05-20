// components/OfertaCard.jsx
import React from 'react';

export default function OfertaCard({ frontIcon, title, description }) {
  return (
    <div className="group perspective w-64 h-64 m-4">
      <div className="relative w-full h-full duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
        <div className="absolute w-full h-full backface-hidden bg-[#85C7F4] flex flex-col justify-center items-center rounded-lg shadow-lg">
          {frontIcon}
          <h3 className="mt-4 font-semibold">{title}</h3>
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white p-4 rounded-lg shadow-lg">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

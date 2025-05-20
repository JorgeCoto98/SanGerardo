import React from 'react';

export default function Plataforma() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Espacio principal de contenido */}
      <main style={{ flex: 1, padding: '2rem' }}>
        <h1>Plataforma</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan,
          metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum
          justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio,
          sollicitudin vel erat vel, interdum mattis neque.
        </p>
        <p>
          Subheading
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
          Cras venenatis euismod malesuada.
        </p>
      </main>

      {/* Footer fijo al fondo */}
      <footer style={{ background: '#16254c', color: '#ffffff', textAlign: 'center', padding: '1rem' }}>
        © 2025 Instituto San Gerardo. All Rights Reserved.
      </footer>
    </div>
  );
}

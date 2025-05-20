// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary:   "#16254C",
        secondary: "#00AFE1",
        accent:    "#85C7F4",
        bg:        "#FFFFFF",
         oscuro: '#0D254A',
          medio: '#1896D3',
          claro: '#85C7F4',
          acento: '#F0533C',
        // añade aquí más si hiciera falta
      }
    }
  },
  plugins: [],
}


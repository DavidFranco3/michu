import React from 'react';

function App() {
  // Estilos en línea para la imagen de fondo y el contenedor
  const fondoEstilos = {
    backgroundImage: 'url("/fondo.jpeg")', // Asegúrate de que la imagen esté en public
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Ocupa toda la altura de la pantalla
    width: '100%', // Asegura que ocupe todo el ancho
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    position: 'absolute', // Permite que el fondo ocupe toda la pantalla
    top: 0,
    left: 0,
  };

  // Estilos del contenedor del texto
  const contenidoEstilos = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente
    padding: '2rem',
    borderRadius: '10px',
  };

  return (
    <div style={fondoEstilos}>
      <div style={contenidoEstilos}>
        <h1>feliz cumpleaños michu pituda</h1>
      </div>
    </div>
  );
}

export default App;

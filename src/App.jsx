import React from 'react';

function App() {
  const estilosGenerales = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#000',
    boxSizing: 'border-box',
  };

  const tarjetaEstilos = {
    position: 'relative',
    width: '100%',
    maxWidth: '95vw', // Abarca casi todo el ancho en PC
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  };

  const imagenEstilos = {
    width: '100%',
    height: 'auto',
    display: 'block',
  };

  const textoEncima = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.4)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    textAlign: 'center',
  };

  const tituloEstilos = {
    fontSize: 'clamp(1.5rem, 5vw, 3rem)',
    marginBottom: '0.5rem',
  };

  const mensajeEstilos = {
    fontSize: 'clamp(0.9rem, 2.5vw, 1.5rem)',
  };

  return (
    <div style={estilosGenerales}>
      <div style={tarjetaEstilos}>
        <img src="/fondo.jpeg" alt="Fondo cumpleaños" style={imagenEstilos} />

      </div>
    </div>
  );
}

export default App;

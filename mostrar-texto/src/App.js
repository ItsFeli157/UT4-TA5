import React, { useState } from 'react';
import './App.css';

function App() {
  const [mostrarTexto, setMostrarTexto] = useState(false);

  const alternarTexto = () => {
    setMostrarTexto(!mostrarTexto);
  };

  return (
    <div className="App">
      <button onClick={alternarTexto}>
        {mostrarTexto ? 'Ocultar Texto' : 'Mostrar Texto'}
      </button>

      {mostrarTexto && <p>Hola</p>}
    </div>
  );
}

export default App;

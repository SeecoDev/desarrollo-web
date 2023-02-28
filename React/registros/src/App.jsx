import React from 'react';
import Cabecera from './components/Cabecera';
import Formulario from './components/Formulario';
import Registros from './components/Registros';

function App() {
  return (
    <div className='container'>
      <Cabecera />
      <Formulario />
      <Registros />
    </div>
  )
}

export default App

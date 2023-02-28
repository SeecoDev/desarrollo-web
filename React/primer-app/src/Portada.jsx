import React from 'react';
import PropTypes from 'prop-types';

const Portada = ({titulo = 'DESARROLLO WEB 1', fecha = 2023}) => {

    const nuevoMensaje ={
        mensaje: 'COSCU ES GOOOD OISTE VIEJAAA NAZZHEEEE',
        title: 'arriba la coscu army'
    }

  return (
    <div>
        <h1>{titulo}</h1>
        <h3>{fecha}</h3>
        <h4>{nuevoMensaje.mensaje}</h4>
    </div>
  )
}

Portada.propTypes = {
    titulo: PropTypes.string,
    fecha: PropTypes.number
  }
  
export default Portada
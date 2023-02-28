import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
useState;

const Contador = ({numero}) => {

    const [valor, setValor] = useState(numero)

    const sumar = (event) =>{
        setValor(valor+1);
    }

    const resta = (event) =>{
        setValor(valor-1);
    }

    const reset = (event) =>{
        setValor(numero);
    }

    return(
    <div>
        <h1>{valor}</h1>
        <button onClick={sumar}>+1</button>
        <button onClick={resta}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
    )
}

Contador.propTypes = {
    numero: PropTypes.number.isRequired,
}

export default Contador
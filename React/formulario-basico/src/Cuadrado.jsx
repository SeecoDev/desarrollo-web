import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
useState;

const Cuadrado = ({base}) => {

    const [area, setArea] = useState(0);

    const areaCuadrado = (event) => {
        setArea(base*base);
    }

    return(
        <div>
            <h1>Calculadora del area de un cuadrado</h1>
            <button onClick={areaCuadrado}>Area Cuadrado</button>
            <h2>Area del cuadrado: {area} </h2>
        </div>
    )

}

Cuadrado.propTypes = {
    base: PropTypes.number.isRequired,
}

export default Cuadrado
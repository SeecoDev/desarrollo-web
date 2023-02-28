import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
useState;

const Rectangulo = ({altura,base}) => {

    const [area, setArea] = useState(0);

    const areaRectangulo= (event) => {
        setArea(altura*base)
    }

    return(
        <div>
            <h1>Calculadora del area de un Triangulo</h1>
            <button onClick={areaRectangulo}>Area Triangulo</button>
            <h2>Area del Rectangulo: {area} </h2>
        </div>
    )

}

Rectangulo.propTypes = {
    base: PropTypes.number.isRequired,
    Altura: PropTypes.number.isRequired,
}

export default Rectangulo
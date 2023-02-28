import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
useState;

const Triangulo = ({altura,base}) => {

    const [area, setArea] = useState(0);

    const areaTriangulo= (event) => {
        setArea((altura*base)/2);
    }

    return(
        <div>
            <h1>Calculadora del area de un Triangulo</h1>
            <button onClick={areaTriangulo}>Area Triangulo</button>
            <h2>Area del Triangulo: {area} </h2>
        </div>
    )

}

Triangulo.propTypes = {
    base: PropTypes.number.isRequired,
    Altura: PropTypes.number.isRequired,
}

export default Triangulo
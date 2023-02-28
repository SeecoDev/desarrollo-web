import React from 'react';
// import '../styles/formularioStyle.css'

const Formulario = () => {
return(
    <div className='formulario'>
        <h1>Formulario</h1>
        <form className='formularioChido'>
            <label>Nombre: <input type='text'/></label>
            <label>Apellido: <input type='text'/></label>
            <label>Correo: <input type='text'/></label>
            <label>Telefono: <input type='text'/></label>
            <input type='submit'></input>
        </form>
    </div>
)
}

export default Formulario
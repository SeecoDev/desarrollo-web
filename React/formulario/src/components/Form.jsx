import React from 'react'

const Form = () => {
  return (
    <div className='md:w-1/2 bg-[#613F75]'>
        <h2>Formulario</h2>
        <form>
          <label>Nombre: </label>
          <input type="text" placeholder='Nombre' />
          <label>Apellido: </label>
          <input type="text" placeholder='Apellido' />
          <label>Correo: </label>
          <input type="text" placeholder='Correo' />
        </form>
    </div>
  )
}

export default Form

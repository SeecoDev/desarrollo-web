import React from 'react'
import Link from 'next/link'

const rutas= [
    {
        ruta: '/',
        label: 'Inicio'
    },{
        ruta:'/about',
        label:'About'
    },{
        ruta:'/registro',
        label:'Registro'
    }
]

const Navbar = () => {
  return (
    <nav>
        <ul className='flex flex-wrap gap-4 bg-blue-500 text-white items-center  justify-between mx-auto text-lg border rounded-lG'>
            {   
                rutas.map(({ruta,label}) =>(
                    <li key={ruta}> <Link href={ruta}>{label}</Link></li>
                ))
            }
            
            

        </ul>
    </nav>
  )
}

export default Navbar
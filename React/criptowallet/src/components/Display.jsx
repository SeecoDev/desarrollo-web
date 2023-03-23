import React from 'react'
import styled from "@emotion/styled";

const Texto = styled.div`
  color: white;
  font-size: 24px;
  border-radius: 10px;
  margin-top: 10px;
  padding: 30px;
  text-align: center;
  background-color: #4832b8;

`;

const Imagen = styled.img`
 width: 50%;
 align-items: normal;
`;

const Loader = styled.div`
margin: auto;
border: 20px solid #EAF0F6;
border-radius: 50%;
border-top: 20px solid gold;
width: 200px;
height: 200px;
animation: spinner 4s linear infinite;

@keyframes spinner {
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
}`;


export const Display = ({datos, imagen,loading}) => {
   const {precioActual,precioBajo,precioInicio} = datos;
  return (
    <div>
      {loading ? <Loader></Loader> : <Texto>
        <center><Imagen src={imagen} alt="Logo" /></center>
        <p>Precio Actual: {precioActual}</p>
        <p>Precio Mas bajo: {precioBajo}</p>
        <p>Precio Inicial: {precioInicio}</p>   
    </Texto>}
    </div>
  )
}

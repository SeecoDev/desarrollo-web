import React, { useState } from "react";

const Estudiante = ({ estudiante, setEstudiante, eliminarEstudiante }) => {
  const { nombre, carrera, semestre, promedio } = estudiante;

  return (
    <div className="shadow-md bg-[#FAFAFF] rounded-md m-2 p-2">
      <p className="uppercase font-bold">
        Nombre: {<span className=" text-[#1C1C1C] normal-case">{nombre}</span>}
      </p>
      <p className="uppercase font-bold">
        Carrera:{" "}
        {<span className=" text-[#1C1C1C] normal-case">{carrera}</span>}
      </p>
      <p className="uppercase font-bold">
        Semestre:{" "}
        {<span className=" text-[#1C1C1C] normal-case">{semestre}</span>}
      </p>
      <p className="uppercase font-bold">
        Promedio:{" "}
        {<span className=" text-[#1C1C1C] normal-case">{promedio}</span>}
      </p>
      <div className="flex justify-evenly">
        <button
          onClick={() => eliminarEstudiante(estudiante.id)}
          type="button"
          className="inline-block rounded bg-red-500 text-white p-1 leading-normal shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] "
        >
          Borrar
        </button>
        <button
          type="button"
          onClick={() => {
            setEstudiante(estudiante);
          }}
          className="inline-block rounded bg-yellow-500 text-white p-1 leading-normal shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] "
        >
          Modificar
        </button>
      </div>
    </div>
  );
};

export default Estudiante;

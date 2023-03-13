import React from "react";
import Estudiante from "./Estudiante";

const Registros = ({ estudiantes, setEstudiante, eliminarEstudiante}) => {
  return (
    <div className="p-[20px] md:w-1/2 lg:w-3/5 bg-[#EEF0F2] rounded-md text-[#EF798A] md:h-screen md:overflow-y-scroll">
      <h2 className="font-bold text-center text-m mb-4">
        Listado de estudiantes
      </h2>

      {estudiantes.map((estudiante) => {
        return (
          <Estudiante
            key={estudiante.id}
            estudiante={estudiante}
            setEstudiante={setEstudiante}
            eliminarEstudiante={eliminarEstudiante}
          />
        );
      })}
    </div>
  );
};

export default Registros;

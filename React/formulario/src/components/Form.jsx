import React, { useEffect } from "react";
import { useState } from "react";

const Form = ({ setEstudiantes, estudiantes, estudiante, setEstudiante, eliminarEstudiante }) => {
  const [nombre, setNombre] = useState("");
  const [carrera, setCarrera] = useState("");
  const [semestre, setSemestre] = useState("");
  const [promedio, setPromedio] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(estudiante).length > 0) {
      const { nombre, carrera, semestre, promedio } = estudiante;
      setNombre(nombre);
      setCarrera(carrera);
      setSemestre(semestre);
      setPromedio(promedio);
    }else{
      limpiar();
    }
  }, [estudiante]);

  const generarId = () => {
    const fecha = Date.now().toString(36).substring(2);
    const random = Math.random().toString(36).substring(2);
    return fecha + random;
  };

  const limpiar = () => {
    setNombre("");
    setCarrera("");
    setSemestre("");
    setPromedio("");
  };

  const manejadorSubmit = (e) => {
    e.preventDefault();
    if (
      [
        nombre.trim(),
        carrera.trim(),
        semestre.trim(),
        promedio.trim(),
      ].includes("")
    ) {
      setError(true);
      return;
    }

    const objetoEstudiante = {
      nombre,
      carrera,
      semestre,
      promedio,
    };

    if (estudiante.id) {
      console.log("modificar");
      objetoEstudiante.id = estudiante.id;
      const estudiantesActualizados = estudiantes.map((estudianteState) =>
        estudianteState.id === estudiante.id
          ? objetoEstudiante
          : estudianteState
      );
      setEstudiantes(estudiantesActualizados);
      setEstudiante({});
    } else {
      objetoEstudiante.id = generarId();
      setEstudiantes([...estudiantes, objetoEstudiante]);
    }
    setError(false);
    limpiar();
  };

  return (
    <div className="p-[20px] md:w-1/2 bg-[#EEF0F2] rounded-md text-[#EF798A]">
      <h2 className="font-bold text-center text-m">Registrar Estudiantes</h2>
      <form onSubmit={manejadorSubmit}>
        {error && (
          <div className="text-center text-[#FF0000] font-extrabold bg-white">
            <p>Te faltan campos por llenar!</p>
          </div>
        )}
        <div className="mt-2">
          <label className="block">Nombre completo: </label>
          <input
            className="border-2 p-1 w-full rounded-md"
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mt-2">
          <label className="block">Carrera: </label>
          <input
            className="border-2 p-1 w-full rounded-md"
            type="text"
            placeholder="Carrera"
            value={carrera}
            onChange={(e) => setCarrera(e.target.value)}
          />
        </div>

        <div className="mt-2">
          <label className="block">Semestre: </label>
          <input
            className="border-2 p-1 w-full rounded-md"
            type="text"
            placeholder="Semestre"
            value={semestre}
            onChange={(e) => setSemestre(e.target.value)}
          />
        </div>

        <div className="mt-2">
          <label className="block">Promedio: </label>
          <input
            className="border-2 p-1 w-full rounded-md"
            type="text"
            placeholder="Promedio"
            value={promedio}
            onChange={(e) => setPromedio(e.target.value)}
          />
        </div>

        <div className="mt-2">
          <input
            className="bg-[#EF798A] text-white w-full rounded-md p-1 "
            type="submit"
            value={
              estudiante.id ? "Modificar Estudiante" : "Agregar Estudiante"
            }
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Form;

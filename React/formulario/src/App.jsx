import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Registros from "./components/Registros";

function App() {
  
  const [estudiantes, setEstudiantes] = useState([]);
  const [estudiante, setEstudiante] = useState({});
  const eliminarEstudiante = (id) => {
    const estudiantesFiltrados = estudiantes.filter(
      (estudiante) => estudiante.id !== id
    );
    setEstudiantes(estudiantesFiltrados);
    setEstudiante({});
  };

  return (
    <div className="container mx-auto">
      <Header />
      <div className="mt-2 md:flex gap-2">
        <Form
          estudiantes={estudiantes}
          setEstudiantes={setEstudiantes}
          estudiante={estudiante}
          setEstudiante={setEstudiante}
          eliminarEstudiante={eliminarEstudiante}
        />
        <Registros
          estudiantes={estudiantes}
          setEstudiante={setEstudiante}
          eliminarEstudiante={eliminarEstudiante}
        />
      </div>
    </div>
  );
}

export default App;

import Contador from "./Contador"
import Horario from "./Horario"
import Portada from "./Portada"
import './styles/formularioStyle.css'

function App() {
  return (
    <div className="">
      <Portada 
        titulo={'Titulo Chad'} 
        fecha= {2023}
      />
      <Horario/>
      <Contador
      numero= {1}
      />
    </div>
  )
}

export default App

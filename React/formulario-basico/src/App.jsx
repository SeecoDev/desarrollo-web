import Cuadrado from "./Cuadrado"
import Rectangulo from "./Rectangulo"
import Triangulo from "./Triangulo"

function App() {

  return (
    <>
      <Cuadrado base={2}/>
      <Rectangulo 
      base={2}
      altura={3}/>
      <Triangulo
      base={2}
      altura={3}/>
    </>
  )
}

export default App

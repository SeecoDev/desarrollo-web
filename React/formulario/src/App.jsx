import { useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import Registros from './components/Registros'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container mx-auto'>
      <Header/>
      <div className='mt-2 md:flex'>
        <Form/>
        <Registros/> 
      </div>
    </div>
  )
}

export default App

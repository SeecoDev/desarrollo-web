import { useState } from 'react'
import styled from '@emotion/styled'



export const useSelectorMonedas = (label, divisas) => {

    const [state,setState] = useState();

    const Label = styled.label`
        color: white;
        `
    const SelectorMonedas = () => 
        <>
        <Label>{label}</Label>

        <select
        value={state}
        onChange={e => setState(e.target.value)}
        >
            <option 
            >one una divisa</option>
            {divisas.map(opcion =>(
                <option
                key={opcion.id}
                value={opcion.id}
                >{opcion.nombre}</option>
            ))}
        </select>
        </>

    return [ state, SelectorMonedas ]

}

export default useSelectorMonedas
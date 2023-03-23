import styled from '@emotion/styled'
import {useState} from 'react'

export const useSelectorMonedas = (label, divisas) => {

    const Label = styled.label`
         color: #ffffff; 
         font-family: 'Raleway',sans-serif; 
         font-size: 32px; 
         font-weight: 800; 
         line-height: 72px;  
         text-align: center; 
         text-transform: uppercase; 
    `;

    const SelectSubmit = styled.select`
        background-color: #4832b8;
        width: 80%;
        padding: 10px;
        justify-content:center;
        color: white;
        font-weight: 800;
        font-size:20px;
        border-radius:12px;
        margin-bottom:  20px;
    `;

    /////////// todo ////////////////
    
    const [state, setState] = useState('');

    const SelectorMonedas = () => 
        <>
        <div>
        <Label>{label}</Label>
        <SelectSubmit 
        value={state}
        onChange={e => setState(e.target.value)
        }>
            <option>Seleccione una divisa</option>
            {divisas.map(divisa =>(
                <option key={divisa.id} value={divisa.id}>
                    {divisa.nombre}
                </option>
            ))}
        </SelectSubmit>
        </div>
        </>

    return [state, SelectorMonedas ]

}

export default useSelectorMonedas
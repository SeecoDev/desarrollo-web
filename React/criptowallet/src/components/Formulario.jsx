import React from "react";
import styled from "@emotion/styled";
import useSelectorMonedas from "../hooks/useSelectorMonedas";
import { monedas } from "../data/monedas";

const InputSubmit = styled.input`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: gold;
    cursor: pointer;
  }
`;

const Seleccion = styled.select`
  background-color: white;

`

export const Formulario = () => {


  const [SelectorMonedas] = useSelectorMonedas('Elige tu moneda: ', monedas);
  return (
    <form>
      <SelectorMonedas />

      <InputSubmit type="submit" value="Enviar" />
    </form>
  );
};

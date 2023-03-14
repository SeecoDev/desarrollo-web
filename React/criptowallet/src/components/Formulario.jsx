import React from "react";
import styled from "@emotion/styled";
import { Input } from "postcss";

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

export const Formulario = () => {
  return (
    <form>
      <InputSubmit type="submit" value="Enviar" />
    </form>
  );
};

import React from 'react'
import styled from '@emotion/styled'

const Texto = styled.div`
    background-color: red;
    color: white;
    font-size: 30;
    padding: auto;
    text-transform: uppercase;
    text-align: center;
    margin-top: 20px

`;

export const Error = ({children}) => {
  return (
    <Texto>{children}</Texto>
  )
}

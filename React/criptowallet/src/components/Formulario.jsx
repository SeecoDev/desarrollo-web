import React, { useState } from "react";
import styled from "@emotion/styled";
import useSelectorMonedas from "../hooks/useSelectorMonedas";
import { useEffect } from "react";
import { monedas } from "../data/monedas";
import { Error } from "./Error";
import { Display } from "./Display";

const InputSubmit = styled.input`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  width: 80%;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: gold;
    cursor: pointer;
  }
`;


const Seleccion = styled.div`
  align-items: normal;
  margin: auto;
  padding: 10px;

`
export const Formulario = () => {
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);
  const [moneda, SelectorMonedas] = useSelectorMonedas('Elige tu moneda', monedas);
  const [cripto, SelectorCriptos] = useSelectorMonedas('Elige tu crypto', cryptos);
  const [data, setData] = useState({});
  const [consulta, setConsulta] = useState(false);
  const [imagenCrypto, setImagenCrypto] = useState('');
  const [loading,setLoading] = useState(false);
  
  useEffect(() => {
    const consultarApi = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      const arregloCryptos = resultado.Data.map(crypto => {

        const objeto = {
          id: crypto.CoinInfo.Name, 
          nombre: crypto.CoinInfo.FullName,
        }
        return objeto;
      }
      );
      setCryptos(arregloCryptos);
    };
    consultarApi();
  }, [])
  
  const manejadorSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if([moneda,cripto].includes('')){
      setError(true);
      return;
    }
    setError(false);
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=${moneda}`;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    const objetoCrypto = resultado.Data.find(
      (crypto) => crypto.CoinInfo.Name === cripto
    );
    const imagenUrl = `https://cryptocompare.com${objetoCrypto.CoinInfo.ImageUrl}`;
    setImagenCrypto(imagenUrl);
    const obejetoData = objetoCrypto.DISPLAY[moneda];
    setData({
      precioActual: obejetoData.PRICE,
      precioBajo: obejetoData.LOWDAY,
      precioInicio: obejetoData.OPENDAY
    })
    setConsulta(true);
    setLoading(false);
  };
  
  return (
    <>
    {error && <Error>'Selecciona una divisa y una cripto'</Error>}
      <Seleccion>
      <form onSubmit={manejadorSubmit} >
        <SelectorMonedas/>
        <SelectorCriptos/>
        <InputSubmit type="submit" value="Cotizar" />   
      </form>
      </Seleccion>
      {consulta && <Display datos={data} imagen={imagenCrypto} loading={loading}></Display>}
    </>
  )
}

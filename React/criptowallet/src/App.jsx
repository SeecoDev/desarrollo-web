import styled from "@emotion/styled";
import imageCrypto from "./assets/images/criptowallet.png";
import { Formulario} from "./components/Formulario";

const Heading = styled.h1`
  font-family: "Montserrat", sans-serif;
  color: gold;
  font-size: 4em;
  text-align: center;

  &::after {
    content: "";
    width: 180px;
    height: 4px;
    background-color: gold;
    display: block;
  }
`;

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100 auto 0 auto;
  display: block;
`;

function App() {
  const Contenedor = styled.div`
    margin: 0 auto;
    max-width: 900px;
    width: 90%;
    @media (min-width: 992px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2rem;
    }
  `;

  return (
    <Contenedor>
      <Imagen src={imageCrypto} />
      <Heading>CriptoShit.com</Heading>
      <Formulario />
    </Contenedor>
  );
}

export default App;

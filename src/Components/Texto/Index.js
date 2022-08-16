import React from 'react';
import { Container } from 'react-bootstrap';

const TextoApp = () => {
  return (
    <Container style={{border:"solid #FFE919", marginTop:"25px"}}>
        <h2 className='m-3 p-2 text-center fw-bold text-decoration-underlin' style={{color:"#997621", textDecoration:"underline"}}>STARWARS</h2>
        <p className='m-2 p-2 text-bg-bg-white' style={{textAlign:"justify"}}>traducido al español como La Guerra de las Galaxias, es una franquicia compuesta de películas, novelas, cómics, videojuegos y juguetes . Es un universo de ficción creado por George Lucas. La historia de Star Wars utiliza arquetipos comunes a la ciencia ficción, climax político y mitología, así como temas musicales de estos aspectos.</p>
            <p className='m-2 p-2 text-bg-bg-white' style={{textAlign:"justify"}}>Siendo uno de los ejemplos más importantes de la space opera (subgénero de ciencia ficción) Star Wars se ha convertido en una parte esencial de la cultura popular, así como una de las películas de mayor recaudación en taquilla de todos los tiempos y una de las mas aclamadas por el público en general.</p>
    </Container>
  )
}

export default TextoApp
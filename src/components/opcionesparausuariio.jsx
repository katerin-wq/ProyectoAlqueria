import React from 'react' // import ALWAYS react //
import '../utils/css/BodyOpciones.css'
import Banner from '../utils/images/leches-alqueria.png'
import nuevagranja from '../utils/images/nuevagranjas.jpg'
import nuestragranja from '../utils/images/agranjas.jpg'
import {Link} from 'react-router-dom' //Declaration//


const BodyOpciones = () => {
    return (
        <div id="formulario">
        <img src={Banner} alt="Cargando..."/>
        <nav id="granjas">
        <p></p>
        <img src={nuevagranja} alt="Cargando..."/>
        <Link to='/nuevagranja' id="textoencima">
                       <p>Nueva Granja</p></Link>
        <p></p>
        <img src={nuestragranja} alt="Cargando..."/>
        <Link to='/nuestrasgranjas' id="textoencima2">
                       <p>‎      ‏‏‎Produccion‎‎‎      ‏‏‎   ‏‏‎‎      ‏‏‎‎      ‏‏‎‎      
                          ‏‏‎</p></Link>
        </nav>
        </div>
    )
}

 export default BodyOpciones
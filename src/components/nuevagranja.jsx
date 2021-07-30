import React from 'react' // import ALWAYS react //
import '../utils/css/BodyNuevagranja.css'
import {Link} from 'react-router-dom' //Declaration//


const BodyOpciones = () => {
    return (
        <div id="formulario1">
        <h2>Formulario "Nueva granja"</h2>
        <nav id="registronuevo">
        <h3><input type="name" name="nombre" size="40" placeholder="Nombre*"></input></h3>ㅤㅤㅤㅤ<h3><input type="text" name="nombre" size="40" placeholder="Apellido*"></input></h3>
        </nav>
        <nav id="registronuevo">
        <h3><input type="text" name="number" size="40" placeholder="Cedula*"></input></h3>ㅤㅤㅤㅤ<h3><input type="text" name="nombre" size="40" placeholder="Teléfono*"></input></h3>
        </nav>
        <nav id="registronuevo">
        <h3><input type="mail" name="correo" size="40" placeholder="Correo eléctronico*"></input></h3>ㅤㅤㅤㅤ<h3><input type="mail" name="correo" size="40" placeholder="Confirmar Correo eléctronico*"></input></h3>
        </nav>
        <nav id="registronuevo">
        <h3><input type="text" name="direccion" size="95" placeholder="Dirección*"></input></h3>
        </nav>
        <nav id="registronuevo">
        <h3><input type="text" name="number" size="40" placeholder="Número de parada*"></input></h3>ㅤㅤㅤㅤ<h3><input type="text" name="texto" size="40" placeholder="Ciudad*"></input></h3>
        </nav>
        <div id="botones">
                        <Link to='/nuestrasgranjas'>
                        ㅤ<h1>Guardar</h1>
                        </Link>
        </div>
        </div>
    )
}

 export default BodyOpciones
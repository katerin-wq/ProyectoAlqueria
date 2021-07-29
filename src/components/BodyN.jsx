import React from 'react' // import ALWAYS react //
import '../utils/css/BodyNuevagranja.css'
import {Link} from 'react-router-dom' //Declaration//


const BodyOpciones = () => {
    return (
        <div id="formulario">
        <h2>Formulario "Nueva granja"</h2>
        <nav id="registronuevo">
        <h3><input type="text" name="nombre" size="40" placeholder="Nombre*"></input></h3>ㅤㅤㅤㅤㅤㅤ <h3><input type="text" name="nombre" size="40" placeholder="Apellido*"></input></h3>
        </nav>
        <nav id="registronuevo">
        <h3><input type="text" name="nombre" size="40" placeholder="Cedula*"></input></h3>ㅤㅤㅤㅤㅤㅤ <h3><input type="text" name="nombre" size="40" placeholder="Teléfono*"></input></h3>
        </nav>
        <nav id="registronuevo">
        <h3><input type="text" name="nombre" size="40" placeholder="Correo eléctronico*"></input></h3>ㅤㅤㅤㅤㅤㅤ <h3><input type="text" name="nombre" size="40" placeholder="Confirmar Correo eléctronico*"></input></h3>
        </nav>
        <nav id="registronuevo">
        <h3><input type="text" name="nombre" size="100" placeholder="Dirección*"></input></h3>
        </nav>
        <nav id="registronuevo">
        <h3><input type="text" name="nombre" size="40" placeholder="Número de parada*"></input></h3>ㅤㅤㅤㅤㅤㅤ <h3><input type="text" name="nombre" size="40" placeholder="Ciudad*"></input></h3>
        </nav>
        <div id="botones">
                           <h4> Editar</h4>
                        <Link to='/nuestrasgranjas'>
                           <h1> Guardar</h1>
                        </Link>
        </div>
        </div>
    )
}

 export default BodyOpciones
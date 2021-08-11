import React from 'react' // import ALWAYS react //
import '../utils/css/BodyRegistro.css'
import Banner from '../utils/images/leches-alqueria.png'
import {Link} from 'react-router-dom' //Declaration//


const BodyRegistro = () => {
    return (
        <div id="formulario">
        <img src={Banner} alt="Cargando..."/>
        <p>BIENVENIDOS</p>
        ㅤㅤ
        ㅤ
        <nav id="registro">
        <br></br>
        <h6>ㅤㅤㅤㅤㅤㅤㅤㅤCorreo electrónico</h6>
        <h6>ㅤㅤㅤㅤㅤㅤㅤㅤ<input type="mail" name="correo" size="64" placeholder="usuario@gmail.com"></input></h6>
        ㅤ <h6>ㅤㅤㅤㅤㅤㅤㅤㅤContraseña</h6>
        <h6>ㅤㅤㅤㅤㅤㅤㅤㅤ<input type="password" name="contraseña" size="64" placeholder="Contraseña"></input></h6>
        ㅤ
        <Link to='/opciones'>
                           <h1> INICIAR SESION</h1>
                        </Link>
        </nav>
        </div>
        
    )
}
 export default BodyRegistro
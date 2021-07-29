import React from 'react' // import ALWAYS react //
import '../utils/css/BodyRegistro.css'
import Banner from '../utils/images/leches-alqueria.png'
import logofacebook from '../utils/images/facebooklogo.PNG';
import logogoogle from '../utils/images/googlelogo.png'
import {Link} from 'react-router-dom' //Declaration//


const BodyRegistro = () => {
    return (
        <div id="formulario">
        <img src={Banner} alt="Cargando..."/>
        <p>BIENVENIDOS</p>
        <h3>inicia Sesión con</h3>
        <nav id="registro">
        <h3>ㅤㅤㅤㅤㅤㅤㅤㅤ----------------------ㅤㅤ<img src={logofacebook} alt="Cargando..."/>ㅤㅤ<img src={logogoogle} alt="Cargando..."/>ㅤ----------------------</h3>
        <h3>ㅤㅤㅤㅤㅤㅤㅤㅤCorreo electrónico</h3>
        <h3>ㅤㅤㅤㅤㅤㅤㅤㅤ<input type="mail" name="correo" size="64" placeholder="usuario@gmail.com"></input></h3>
        <h3>ㅤㅤㅤㅤㅤㅤㅤㅤContraseña</h3>
        <h3>ㅤㅤㅤㅤㅤㅤㅤㅤ<input type="password" name="contraseña" size="64" placeholder="Contraseña"></input></h3>
        <h5>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ<input type="checkbox" name="recordar"></input>Recordar mis datosㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ¿Olvidaste tú contraseña?</h5>
        <Link to='/opciones'>
                           <h1> INICIAR SESION</h1>
                        </Link>
        </nav>
        </div>
    )
}
 export default BodyRegistro
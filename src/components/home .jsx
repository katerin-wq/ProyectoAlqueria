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
        <h4>ㅤㅤㅤㅤㅤㅤㅤㅤㅤCorreo electrónico</h4>
        <h6>ㅤㅤㅤㅤㅤㅤㅤ<input type="mail" name="correo" size="64" placeholder="usuario@gmail.com"></input></h6>
        <br></br>
        <br></br>
        <h4>ㅤㅤㅤㅤㅤㅤㅤㅤㅤContraseña</h4>
        <h6>ㅤㅤㅤㅤㅤㅤㅤ<input type="password" name="contraseña" size="64" placeholder="Contraseña"></input></h6>
        ㅤ<br></br>
        <br></br>
        <Link to='/ProyectoAlqueria/opciones'>
                           <h1> INICIAR SESION</h1>
                        </Link>
                        <br></br>
        </nav>
        </div>
        
    )
}
 export default BodyRegistro
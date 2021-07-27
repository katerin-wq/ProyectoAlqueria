import React from 'react' // import ALWAYS react //
import {Link} from 'react-router-dom' //Declaration//
import image from '../utils/images/footer.PNG'
import usuario from '../utils/images/usuario.png'

const Header = () => {
    return (
            <div className="headerMenu">
                <nav id="menu">
                    <ul>
                    <a href="https://www.alqueria.com.co/"><img src={image} alt="Cargando..."/></a>
                        <li><a href="https://www.alqueria.com.co/recetas"><p>Recetas</p></a></li>
                        <li><a href="https://www.alqueria.com.co/blog-nutricion-bienestar"><p>Bienestar y nutricion</p></a></li>
                        <li><a href="https://www.alqueria.com.co/sostenibilidad"><p>Sostenibilidad</p></a></li>
                        <li><a href="https://www.alqueria.com.co/productos"><p>Productos</p></a></li>
                        <li><a href="https://www.alqueria.com.co/conocenos"><p>Conócenos</p></a></li>
                    </ul>
                    </nav>
                    <nav id="submenu">
                        <li><img src={usuario} alt="Cargando..."/><Link to='/produccion'>      Iniciar Sesión
                        </Link></li>
                        
                        <li><img src={usuario} alt="Cargando..."/><Link to='/'>      Registrarse
                        </Link></li>
                    </nav>
            </div>
    )
}
 export default Header
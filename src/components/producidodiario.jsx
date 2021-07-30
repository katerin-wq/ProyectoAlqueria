import React from 'react' // import ALWAYS react //
import '../utils/css/BodyNuestrasgranjas.css'
import {Link} from 'react-router-dom' //Declaration//

const BodyGranjas = () => {
    return (
        <div id="formulario">
        <p>espacio para las granjas ya registradas
        donde se registra el producido diario</p>
        <Link to='/'>
                        ㅤ<h1>Guardar</h1>
                        </Link>
        </div>
    )
}

 export default BodyGranjas
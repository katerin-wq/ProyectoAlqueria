import React from 'react' // import ALWAYS react //
import '../utils/css/BodyNuestrasgranjas.css'
import {Link} from 'react-router-dom' //Declaration//


const BodyGranjas = () => {
    return (
        <div id="formulario">
        <p>espacio para las granjas ya registradas
        donde se podrian visualizar todas ellas</p>
        <Link to='/produccion'>
                        ㅤ<h1>Guardar</h1>
                        </Link>
        </div>
    )
}

 export default BodyGranjas
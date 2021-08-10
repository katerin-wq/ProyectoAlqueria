import React from 'react' // import ALWAYS react //
import '../utils/css/BodyNuestrasgranjas.css'
import {Link} from 'react-router-dom' //Declaration//
import granja1 from '../utils/images/annie-spratt-JMjNnQ2xFoY-unsplash.jpg'
import granja2 from '../utils/images/asantha-abeysooriya-beNiTTa8Pp8-unsplash.jpg'
import granja3 from '../utils/images/benoit-debaix-EoIXZXoe-nw-unsplash.jpg'
import granja4 from '../utils/images/dietmar-reichle-caiX9QloFc8-unsplash.jpg'
import granja5 from '../utils/images/ernesto-velazquez-5gwqO_-j9SY-unsplash.jpg'
import granja6 from '../utils/images/evi-t-fQ9X2rPEwq8-unsplash.jpg'
import granja7 from '../utils/images/prahlad-inala-CABm-iI_6QQ-unsplash.jpg'
import granja8 from '../utils/images/sam-carter-GHOiyov2TSQ-unsplash.jpg'
import granja9 from '../utils/images/timothy-eberly-3yrHbOXudUs-unsplash.jpg'


const BodyGranjas = () => {
    return (
        <div id="nuestrasgranjas">
        <div id="banner">
        <i>"La ciudad cree que fuera de ella no hay más que paisaje, patatas y leche; 
        <br></br>ignoran que también  existe una cultura noble, antiquísima e insobornable.“</i>
        <p></p>
        <h6><i> —  Alfonso Daniel Rodríguez Castelao, libro Siempre en Galiza</i></h6></div>
        <p></p>
        <div id="cuadrotexto">
            <h3 id="texto1">TresArroyos</h3>
            <h3 id="texto2">MiRanchito</h3>
            <h3 id="texto3">DoñaJuana</h3>
            </div>
            <div id="cuadrotexto">
            <h3 id="texto4">El Sol</h3>
            <h3 id="texto5">AquaViva</h3>
            <h3 id="texto6">SanMiguel</h3>
        </div>
        <div id="cuadrotexto">
            <h3 id="texto7">TerraViva</h3>
            <h3 id="texto8">LaRiviera</h3>
            <h3 id="texto9">LasCorales</h3>
        </div>
        <div id="cuadroimagenes">
            <img src={granja1} alt="Cargando.."/>
            <img src={granja2} alt="Cargando.."/>
            <img src={granja9} alt="Cargando.."/>
        </div>
        <div id="cuadroimagenes">
            <img src={granja4} alt="Cargando.."/>
            <img src={granja5} alt="Cargando.."/>
            <img src={granja6} alt="Cargando.."/>
        </div>
        <div id="cuadroimagenes">
            <img src={granja7} alt="Cargando.."/>
            <img src={granja8} alt="Cargando.."/>
            <img src={granja3} alt="Cargando.."/>
        </div>
        <div id="formulario"><Link to='/produccion'><h1>Produccion</h1>
                        </Link>
                        <Link to='/nuevagranja'><h1>Atras</h1>
                        </Link>
        </div>
        </div>
    )
}

 export default BodyGranjas
 
import React from 'react' // import ALWAYS react //
import '../utils/css/BodyNuestrasgranjas.css'
import {Link} from 'react-router-dom' //Declaration//
import granja1 from'../utils/images/annie-spratt-JMjNnQ2xFoY-unsplash.jpg'
import granja2 from'../utils/images/asantha-abeysooriya-beNiTTa8Pp8-unsplash.jpg'
import granja3 from'../utils/images/benoit-debaix-EoIXZXoe-nw-unsplash.jpg'
import granja4 from '../utils/images/dietmar-reichle-caiX9QloFc8-unsplash.jpg'
import granja5 from '../utils/images/ernesto-velazquez-5gwqO_-j9SY-unsplash.jpg'
import granja6 from '../utils/images/evi-t-fQ9X2rPEwq8-unsplash.jpg'
import granja7 from '../utils/images/h-ng-nguy-n-vi-t-8wiECX4Cga4-unsplash.jpg'
import granja8 from '../utils/images/mikki-seifu-GYF0GAsUkYI-unsplash.jpg'
import granja9 from '../utils/images/rajesh-ram-HOOKgN_zIY8-unsplash.jpg'
import granja10 from '../utils/images/sam-carter-GHOiyov2TSQ-unsplash.jpg'
import granja11 from '../utils/images/stijn-te-strake-UdhpcfImQ9Y-unsplash.jpg'
import granja12 from '../utils/images/timothy-eberly-3yrHbOXudUs-unsplash.jpg'


const BodyGranjas = () => {
    return (
        <div id="nuestrasgranjas">
        <div id="banner">
        <i>"La ciudad cree que fuera de ella no hay más que paisaje, patatas y leche; 
        <br></br>ignoran que también  existe una cultura noble, antiquísima e insobornable.“</i>
        <p></p>
        <h6><i> —  Alfonso Daniel Rodríguez Castelao, libro Siempre en Galiza</i></h6></div>
        <p></p>
        <div id="cuadroimagenes">
            <img src={granja1} alt="Cargando.."/>
            <img src={granja2} alt="Cargando.."/>
            <img src={granja12} alt="Cargando.."/>
        </div>
        <div id="cuadroimagenes">
            <img src={granja4} alt="Cargando.."/>
            <img src={granja5} alt="Cargando.."/>
            <img src={granja6} alt="Cargando.."/>
        </div>
        <div id="formulario"><Link to='/produccion'>
                        </Link>
        </div>
        </div>
    )
}

 export default BodyGranjas
 
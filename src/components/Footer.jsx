import React from 'react' // import ALWAYS react //
import image from '../utils/images/footer.PNG'
import facebook from '../utils/images/facebook.PNG'
import twitter from '../utils/images/twitter.PNG'
import youtube from '../utils/images/youtube.PNG'
import instagram from '../utils/images/instagram.PNG'
import linkedln from '../utils/images/linkedln.PNG'
import pinterest from '../utils/images/pinterest.PNG'
import telefono from '../utils/images/llamada.png'
import mail from '../utils/images/email.png'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <>
        <div className="integrantes">
        <div className="barra">
           <h5>Entérate de todas las<br></br> novedades
           que Alquería tiene para ti.</h5>
        </div>
        <div className="barra">
        <ul>
            <input type="mail" class="redondeado" placeholder="Correo electrónico"></input>
        </ul>
        </div>
        <div className="barra">
        <Link to='/'><button class="button" id="Registrate">Regístrate</button></Link>
        </div>
        </div>
	  <div className="redessociales">
      <img src={image} alt="Cargando..."/>
	  <div className="persona">
      <ul>
            <li><b>Servicio al cliente</b></li>
            <li></li>
            <li><b>A nivel nacional</b></li>
            <li><img src={telefono} alt="Cargando..."/>‎      01 8000 110 000</li>
            <li></li>
            <li><b>Bogotá</b></li>
            <li><img src={telefono} alt="Cargando..."/>‎      411 9200</li>
            <li></li>
            <li><b>Correo Electrónico</b></li>
            <li><img id="mail" src={mail} alt="Cargando..."/>‎      ccbogota@alqueria.com.co</li>
            <li></li>
            <li><b>Línea Ética</b></li>
            <li><img src={telefono} alt="Cargando..."/>‎      01 8000 512 550</li>
            </ul>
	  </div>
	  <div className="persona0">
	    <ul>
            <li>Fundacion Alquería Cavalier</li>
            <li></li>
            <li>Zona de pagos</li>
            <li></li>
            <li>Intranet MIA</li>
            <li></li>
            <li>Portal Proveedores</li>
            <li></li>
            <li>Contáctanos</li>
        </ul>
	  </div>
	  <div className="persona1">
       <ul><li>Síguenos en nuestras redes<br></br> corporativas</li></ul>
       <div className="padreiconos">
        <div className="iconos">
            <a href="https://www.facebook.com/AlqueriaOficial/"><img src={facebook} alt="Cargando..."/></a>
            <a href="https://twitter.com/alqueriaoficial"><img src={twitter} alt="Cargando..."/></a>
            <a href="https://www.youtube.com/user/AlqueriaColombia"><img src={youtube} alt="Cargando..."/></a>
            <a href="https://www.instagram.com/alqueriaoficial/"><img src={instagram} alt="Cargando..."/></a>
            <a href="https://www.linkedin.com/company/alquer-a-colombia/"><img src={linkedln} alt="Cargando..."/></a>
        </div>
        </div>
        <ul><li>Síguenos en nuestras redes de <br></br>recetas Alquería</li></ul>
       <div className="padreiconos">
        <div className="iconos">
            <a href="https://www.youtube.com/user/AlqueriaColombia"><img src={youtube} alt="Cargando..."/></a>
            <a href="https://www.facebook.com/AlqueriaOficial/"><img src={facebook} alt="Cargando..."/></a>
            <a href="https://www.instagram.com/alqueriaoficial/"><img src={instagram} alt="Cargando..."/></a>
            <a href="https://co.pinterest.com/cremaalqueria/"><img src={pinterest} alt="Cargando..."/></a>
            </div>
	  </div>
      </div>
	  </div>

        <div className="derechos">
            <a href="https://www.alqueria.com.co/mapa-del-sitio">Mapa del sitio</a>
            <a href="https://www.alqueria.com.co/sites/default/files/2021-06/politica-de-tratamiento-de-datos-personales-pns-sas-y-filiales.pdf">Proteccion de datos personales</a>
            <a href="https://www.alqueria.com.co/sites/default/files/2020-12/aviso-de-privacidad-alqueria.pdf">Avisos de privacidad</a>
            <a href="https://www.alqueria.com.co/sites/default/files/2020-11/terminos-y-condiciones.pdf">Términos y condiciones</a>
        </div>
        </>
    )
}
 export default Footer
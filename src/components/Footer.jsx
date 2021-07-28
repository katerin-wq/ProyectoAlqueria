import React from 'react' // import ALWAYS react //
import image from '../utils/images/footer.PNG'
import facebook from '../utils/images/facebook.PNG'
import twitter from '../utils/images/twitter.PNG'
import youtube from '../utils/images/youtube.PNG'
import instagram from '../utils/images/instagram.PNG'
import linkedln from '../utils/images/linkedln.PNG'
import pinterest from '../utils/images/pinterest.PNG'


const Footer = () => {
    return (
        <>
	  <div className="redessociales">
      <img src={image} alt="Cargando..."/>

      <div className="persona1">
        <ul><li>Síguenos en nuestras redes corporativas</li></ul>
       <div className="padreiconos">
        <div className="iconos">
        <a href="https://www.facebook.com/AlqueriaOficial/"><img src={facebook} alt="Cargando..."/></a>
            <a href="https://twitter.com/alqueriaoficial"><img src={twitter} alt="Cargando..."/></a>
            <a href="https://www.youtube.com/user/AlqueriaColombia"><img src={youtube} alt="Cargando..."/></a>
            <a href="https://www.instagram.com/alqueriaoficial/"><img src={instagram} alt="Cargando..."/></a>
            <a href="https://www.linkedin.com/company/alquer-a-colombia/"><img src={linkedln} alt="Cargando..."/></a>
            </div>
	  </div>
      </div>

	  <div className="persona1">
        <ul><li>Síguenos en nuestras redes de recetas Alquería</li></ul>
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
            @copyright Katerin Torres, Yuri Herrera
        </div>
        </>
    )
}
 export default Footer